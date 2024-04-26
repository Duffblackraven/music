import React, { useState } from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";
import { formatTime } from "@/lib/formatTime";
import { userType } from "@/types/types";
import Link from "next/link";
import { useAppSelector } from "@/types/hooks";
import { addTrackToPlaylist, removeTrackFromPlaylist } from "@/api/api";

type PlayListItemProps = {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: number;
  setTrack: () => void;
  isSetTrack: boolean;
  stared_user: Array<userType> | null;
  playlistID?: string;
};

export default function PlayListItem({
  id,
  name,
  author,
  album,
  duration,
  setTrack,
  isSetTrack,
  stared_user,
  playlistID,
}: PlayListItemProps) {

  const trackDuration = formatTime(duration);
  const { isPlaying } = useAppSelector((state) => state.tracks);

  const [showPopup, setShowPopup] = useState(false);
  const showPopupMessage = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 8000);
  };

  const [isLiked, setIsLiked] = useState(() => {
    if (playlistID === "liked") {
      return true;
    } else {
      return (
        stared_user &&
        stared_user?.some(
          (user) => JSON.stringify(user) === localStorage.getItem("userData")
        )
      );
    }
  });

  const handleLikeTrack = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    if (!localStorage.getItem('userData')) {
      showPopupMessage();
      return;
    }

    setIsLiked(prevState => !prevState);

    try {
      if (!isLiked) {
        await addTrackToPlaylist(id);
      } else {
        await removeTrackFromPlaylist(id);
      }
    } catch (error: any) {
      console.error(error);
    }
  };


  return (
    <div onClick={setTrack} className={classNames(styles.playlistItem, styles.playlistTrack, styles.track)}>

      <div className={classNames(styles.trackTitleImage, { [styles.trackTitleImageSelected]: isSetTrack }, { [styles.trackTitleImageAnimated]: isPlaying && isSetTrack }, { [styles.trackTitleImageDot]: isSetTrack && (isPlaying || !isPlaying) })}>
        <svg className={styles.trackTitleSvg}>
          <use
            className={
              isSetTrack
                ? isPlaying
                  ? styles.dotIcon : styles.dot : styles.noteIcon
            }
            href={isSetTrack ? (isPlaying ? "/img/icon/sprite.svg#icon-dot" : "/img/icon/sprite.svg#icon-dot") : "/img/icon/sprite.svg#icon-note"}
          ></use>
        </svg>
      </div>

      {!showPopup ? (
        <div className={styles.trackInfo}>
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
        </div>
      ) : (
        <div className={styles.popupSignIn}>
          <p>Вы не зарегистрированы</p>
          <Link
            href="/signin"
            className={styles.linkSignIn}
            onClick={(event) => event.stopPropagation()}
          >Войдите в свой аккаунт</Link>
        </div>
      )}

      <div onClick={handleLikeTrack}>
        <svg className={styles.trackTimeSvg}>
          {isLiked ? (
            <use href="/img/icon/sprite.svg#icon-liked"></use>
          ) : (
            <use href="/img/icon/sprite.svg#icon-like"></use>
          )}
        </svg>
      </div>
    </div>
  );
}