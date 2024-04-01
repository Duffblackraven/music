import React from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";
import { formatTime } from "@/lib/formatTime";
import { useAppSelector } from "@/types/hooks";


type PlayListItemProps = {
  name: string;
  author: string;
  album: string;
  duration: number;
  setTrack: () => void;
  isSetTrack: boolean;
};

export default function PlayListItem({
  name,
  author,
  album,
  duration,
  setTrack,
  isSetTrack,
}: PlayListItemProps) {

  const trackDuration = formatTime(duration);

  const { isPlaying } = useAppSelector((state) => state.tracks)

  return (
    <div onClick={setTrack} className={classNames(styles.playlistItem, styles.playlistTrack, styles.track)}>

      <div className={classNames(styles.trackTitleImage, { [styles.trackTitleImageSelected]: isSetTrack }, { [styles.trackTitleImageAnimated]: isPlaying && isSetTrack })}>
        <svg className={styles.trackTitleSvg}>
          <use href="/img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>

      <div className={styles.trackTitle}>
        <div className={styles.trackTitle}>
          <span className={classNames(styles.trackText, styles.trackTextLeft)}>{name}</span>
        </div>
      </div>
      <div className={styles.trackAuthor}>
        <span className={classNames(styles.trackText, styles.trackTextSecondary)}>{author}</span>
      </div>
      <div className={styles.trackAlbum}>
        <span className={classNames(styles.trackText, styles.trackTextSecondary)}>{album}</span>
      </div>
      <div className={styles.trackTime}>
        <span className={classNames(styles.trackText, styles.trackTextSecondary, styles.trackTextRight)}>
          {trackDuration}
        </span>
      </div>
      <div>
        <svg className={styles.trackTimeSvg}>
          <use href="/img/icon/sprite.svg#icon-like"></use>
        </svg>
      </div>
    </div>
  );
}