"use client"

import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { trackType } from '@/types/types';
import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';
import { PlayListItem } from '@components/PlayListItem';
import { useAppDispatch, useAppSelector } from "@/types/hooks";
import { getTracks } from "@/api/api";
import { sortTracksByReleaseDate } from "@/lib/sortTracksByReleaseDate";

const ContentPlaylist = () => {

  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);
  const { track } = useAppSelector((state) => state.tracks);
  const isSearch = useAppSelector((state) => state.tracks.isSearch);

  const activeFilters = useAppSelector((state) => state.tracks.activeFilters);


  const playlistNumber = useAppSelector((state) => state.tracks.playlistNumber);
 
  useEffect(() => {
    getTracks(playlistNumber).then((data) => {

      data.items ? dispatcher(setPlayList(data.items)) : dispatcher(setPlayList(data));
    });
  }, [dispatcher, playlistNumber]);

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
        <p className={styles.playlistTitleCol}>No tracks found</p>
      ) : (
        filteredAndSortedPlaylist.map((trackR: trackType) => (
          <PlayListItem
            key={trackR.id}
            name={trackR.name}
            author={trackR.author}
            album={trackR.album}
            duration={trackDurations[trackR.id]}
            setTrack={() => handleTrack(trackR)}
            isSetTrack={trackR.id === track?.id}
          />
        ))
      )}
    </div>
  );
};

export default ContentPlaylist;