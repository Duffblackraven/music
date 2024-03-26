import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { trackType } from "@/types/types";
import PlayListItem from "../PlayListItem/PlayListItem";


type ContentPlayListProps = {
  trackList: trackType[];
  setTrack: (param: trackType) => void;
};

const ContentPlaylist = ({
  trackList,
  setTrack,
}: ContentPlayListProps) => {

  const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    const durations: { [key: string]: number } = {};
    trackList.forEach((track) => {
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
      {trackList.map((track) => (
        <PlayListItem
          key={track.id}
          setTrack={() => setTrack(track)}
          name={track.name}
          author={track.author}
          album={track.album}
          duration={trackDurations[track.id]}
        />
      ))
      }
    </div>
  );
};

export default ContentPlaylist;