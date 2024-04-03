"use client"

import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { PlayListItem } from "@components/PlayListItem";
import { trackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/types/hooks";
import { getTracks } from "@/api/api";
import { setCurrentTrack, setPlayList } from "@/store/features/playlistSlice";



const ContentPlaylist = () => {

  // get the tracklist from API
  const [trackList, setTrackList] = useState<trackType[]>([]);
  useEffect(() => {
    getTracks().then((data) => setTrackList(data));
  }, []);
  // Redux tools: set the track playing
  const dispatcher = useAppDispatch();
  const { track } = useAppSelector((state) => state.tracks);
  const handleTrack = (trackR: trackType) => {
    dispatcher(setCurrentTrack(trackR));
    dispatcher(setPlayList(trackList));
  };

  // add a duration from audio props to each track
  const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  useEffect(() => {
    const durations: { [key: string]: number } = {};
    trackList?.forEach((track: trackType) => {
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
  }, [trackList]);

  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {trackList?.map((trackR: trackType) => (
        <PlayListItem
          key={trackR.id}
          name={trackR.name}
          author={trackR.author}
          album={trackR.album}
          duration={trackDurations[trackR.id]}
          setTrack={() => handleTrack(trackR)}
          isSetTrack={trackR.id === track?.id}
        />
      ))}
    </div>
  );
};

export default ContentPlaylist;