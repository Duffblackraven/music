"use client"

import classNames from "classnames";
import styles from "./Bar.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from "@/components/ProgressBar";
import { BarVolume } from "@/components/BarVolume";
import { formatTime } from "@/lib/formatTime";
import { useAppDispatch, useAppSelector } from "@/types/hooks";

import {
  setPlay, setPause,
  setNextTrack, setPrevTrack,
  setShuffle
}
  from "@/store/features/tracksSlice";

export default function Bar() {

  const audioRef = useRef<null | HTMLAudioElement>(null);

  const [isLooped, setIsLooped] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatcher = useAppDispatch();
  const { track, isPlaying, isShuffle } = useAppSelector(
    (state) => state.tracks,
  )

  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatcher(setPlay());
    }
  }
  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.track_file;
      playTrack();
    }
  }, [track]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        dispatcher(setPause());
      } else {
        audioRef.current.play();
        dispatcher(setPlay());
      }
    }
  };

  const progressTrack = (value: any) => {
    setCurrentTime(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current!.currentTime);
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", updateTime);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const handleTrackEnded = () => {
    if (!isLooped) {
      dispatcher(setNextTrack());
    }
  };
  useEffect(() => {
    audioRef.current?.addEventListener("ended", handleTrackEnded);
    return () => {
      audioRef.current?.removeEventListener("ended", handleTrackEnded);
    };
  }, [isLooped]);


  const handleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooped;
      setIsLooped(prev => !prev);
    }
  };

  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  const handleVolume = (value: any) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  return (
    <>
      {track && (
        <div className={classNames(styles.bar, { [styles.displayTrue]: track })}>
          <div className={styles.barContent}>

            <audio src={track?.track_file} 
            ref={audioRef}
            onTimeUpdate={updateTime}
            />

            <ProgressBar
              value={currentTime}
              max={audioRef.current ? audioRef.current.duration : track?.duration_in_seconds}
              onChange={progressTrack}
            />
            <div className={styles.barPlayerProgress}>
              {track && currentTime !== undefined && audioRef.current && !isNaN(audioRef.current?.duration) && audioRef.current.duration !== undefined && (
                <>
                  {formatTime(currentTime)} / {formatTime(audioRef.current.duration)}
                </>
              )}
            </div>

            <div className={styles.barPlayerBlock}>
              <div className={classNames(styles.barPlayer, styles.player)}>

                <div className={styles.playerControls}>

                  <div className={styles.playerBtnPrev} onClick={() => dispatcher(setPrevTrack())}>
                    <svg className={styles.playerBtnPrevSvg}>
                      <use href="/img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
                    <svg className={styles.playerBtnPlaySvg}>
                      {isPlaying ? (
                        <use
                          href="/img/icon/sprite.svg#icon-pause"
                        ></use>
                      ) : (
                        <use
                          href="/img/icon/sprite.svg#icon-play"
                        ></use>
                      )}
                    </svg>
                  </div>

                  <div className={styles.playerBtnNext} onClick={() => dispatcher(setNextTrack())}>
                    <svg className={styles.playerBtnNextSvg}>
                      <use href="/img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>

                  <div
                    onClick={handleLoop}
                    className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
                  >
                    <svg className={styles.playerBtnRepeatSvg}>
                      {isLooped ? (
                        <use href="/img/icon/sprite.svg#icon-repeatOn"></use>
                      ) : (
                        <use href="/img/icon/sprite.svg#icon-repeat"></use>
                      )}
                    </svg>
                  </div>

                  <div
                    className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
                  >
                    <svg className={styles.playerBtnShuffleSvg} onClick={() => dispatcher(setShuffle(!isShuffle))}>
                      {isShuffle ? (
                        <use href="/img/icon/sprite.svg#icon-shuffleOn"></use>
                      ) : (
                        <use href="/img/icon/sprite.svg#icon-shuffle"></use>
                      )}
                    </svg>
                  </div>
                </div>

                <div
                  className={classNames(styles.playerTrackPlay, styles.trackPlay)}
                >
                  <div className={styles.trackPlayContain}>
                    <div className={styles.trackPlayImage}>
                      <svg className={styles.trackPlaySvg}>
                        <use href="/img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={classNames(styles.trackPlayName, styles.trackPlayNameText)}>
                      {track?.name}
                    </div>
                    <div className={classNames(styles.trackPlayAuthor, styles.trackPlayAuthorText)}>
                      {track?.author}
                    </div>
                  </div>
                </div>

                <div className={styles.trackPlayLikeDis}>
                  <div
                    className={classNames(styles.trackPlayLike, styles._btnIcon)}
                  >
                    <svg className={styles.trackPlayLikeSvg}>
                      <use href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(styles.trackPlayDislike, styles._btnIcon)}
                  >
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use href="/img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <BarVolume handleVolume={handleVolume} />

            </div>
          </div>
        </div>
      )}
    </>
  );
}