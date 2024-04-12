"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { trackType } from '@/types/types';
import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';
import { PlayListItem } from '@components/PlayListItem';
import { getTracks } from "@/api/api";
import { useAppDispatch, useAppSelector } from "@/types/hooks";

const ContentPlaylist = () => {
  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);
  const { track } = useAppSelector((state) => state.tracks);
  const isSearch = useAppSelector((state) => state.tracks.isSearch);
  const activeFilters = useAppSelector((state) => state.tracks.activeFilters);

  useEffect(() => {
    getTracks().then((data) => {
      dispatcher(setPlayList(data));
    });
  }, [dispatcher]);

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

  const filterTracks = useCallback((tracks: trackType[]) => {
    return tracks.filter((track) => {
      const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);
      const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);
      return isAuthorsMatch && isGenresMatch;
    });
  }, [activeFilters]);

  const sortTracksByReleaseDate = useCallback((tracks: trackType[], order: string) => {
    return tracks.sort((a, b) => {
      const dateA = new Date(a.release_date).getTime();
      const dateB = new Date(b.release_date).getTime();
      switch (order) {
        case 'сначала новые':
          return dateB - dateA;
        case 'сначала старые':
          return dateA - dateB;
        default:
          return 0;
      }
    });
  }, []);

  const filteredAndSortedPlaylist = useMemo(() => {
    const filteredTracks = filterTracks(tracksToRender);
    if (activeFilters.release_dates) {
      return sortTracksByReleaseDate(filteredTracks, activeFilters.release_dates);
    } else {
      return filteredTracks;
    }
  }, [tracksToRender, activeFilters, filterTracks, sortTracksByReleaseDate]);

  return (
    <div>
      {isSearch && tracksToRender.length === 0 ? (
        <p>Треки не найдены</p>
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