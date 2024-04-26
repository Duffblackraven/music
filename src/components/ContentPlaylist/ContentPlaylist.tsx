"use client"

import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { trackType } from '@/types/types';
import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';
import { PlayListItem } from '@components/PlayListItem';
import { sortTracksByReleaseDate } from "@/lib/sortTracksByReleaseDate";
import { setAuthUserToken } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/types/hooks";
import { getLikedTracks, getTracks, refreshToken } from "@/api/api";

const ContentPlaylist = () => {

  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);
  const { track } = useAppSelector((state) => state.tracks);
  const userToken = localStorage.getItem('userToken');
  const isSearch = useAppSelector((state) => state.tracks.isSearch);
  const activeFilters = useAppSelector((state) => state.tracks.activeFilters);

  const [tokenRefreshInterval, setTokenRefreshInterval] = useState<NodeJS.Timeout | null>(null);
  const handleRefreshToken = async () => {
    try {
      const token = localStorage.getItem('refreshToken');
      if (!token) return;
      const refreshedToken = await refreshToken(token);
      dispatcher(setAuthUserToken(refreshedToken.access));
    } catch (error) {
      console.error('Ошибка при обновлении токена.', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRefreshToken();
    }, 160000);
    setTokenRefreshInterval(interval);
    return () => {
      if (tokenRefreshInterval) clearInterval(tokenRefreshInterval);
    };
  }, []);


  const playlistID = useAppSelector((state) => state.tracks.playlistNumber);

  useEffect(() => {
    if (userToken !== null) {
      if (String(playlistID) === "liked") {
        getLikedTracks(userToken).then((data) => {
          dispatcher(setPlayList(data));
        });
      } else {
        getTracks(playlistID).then((data) => {

          data.items ? dispatcher(setPlayList(data.items)) : dispatcher(setPlayList(data));
        });
      };
    };
  }, [dispatcher, playlistID]);

  const handleTrack = (trackR: trackType) => {
    dispatcher(setCurrentTrack(trackR));
  };

  const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  useEffect(() => {
    const durations: { [key: string]: number } = {};
    playList?.forEach((track: trackType) => {
      const audio = new Audio(track.track_file);
      audio.addEventListener('loadedmetadata', () => {
        durations[track.id] = audio.duration;
        setTrackDurations({ ...durations });
      });
      audioRefs.current[track.id] = audio;
    });
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.removeAttribute('src');
        audio.load();
      });
    };
  }, [playList]);

  const tracksToRender = isSearch ? searchPlayList : playList;


  const filterTracks = (tracks: trackType[]) => {
    return tracks.filter((track) => {
      const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);
      const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);
      return isAuthorsMatch && isGenresMatch;
    });
  };

  const filteredAndSortedPlaylist = useMemo(() => {
    const filteredTracks = filterTracks(tracksToRender);

    if (activeFilters.release_dates) {
      return sortTracksByReleaseDate(filteredTracks, activeFilters.release_dates);
    } else {
      return filteredTracks;
    }
  }, [tracksToRender, activeFilters]);

  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {isSearch && tracksToRender.length === 0 ? (
        <p className={styles.playlistTitleCol}>Треки не найдены</p>
      ) : (
        filteredAndSortedPlaylist.map((trackR: trackType) => (
          <PlayListItem
            key={trackR.id}
            id={trackR.id}
            name={trackR.name}
            author={trackR.author}
            album={trackR.album}
            duration={trackDurations[trackR.id]}
            setTrack={() => handleTrack(trackR)}
            isSetTrack={trackR.id === track?.id}
            stared_user={trackR.stared_user}
            // playlistID={playlistID}
          />
        ))
      )}
    </div>
  );
};

export default ContentPlaylist;