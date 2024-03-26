import classNames from "classnames";
import styles from "./CenterBlock.module.css";
import React, { useEffect, useState } from "react";
import { getTracks } from "@/api/api";
import { trackType } from "@/types/types";
import ContentPlaylist from "../ContentPlaylist/ContentPlaylist";
import FilterBlock from "../FilterBlock/FilterBlock";

type CenterBlockProps = {
  setTrack: (param: trackType) => void;
};

export default function CenterBlock({ setTrack }: CenterBlockProps) {

  const [trackList, setTrackList] = useState<trackType[]>([]);
  // const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    getTracks().then((data) => setTrackList(data));
  }, []);

  return (
    <div className={classNames(styles.mainCenterBlock, styles.centerBlock)}>
      <div className={classNames(styles.centerBlockSearch, styles.search)}>
        <svg className={styles.searchSvg}>
          <use href="/img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="Поиск"
        />
      </div>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <FilterBlock trackList={trackList} />
      <div
        className={classNames(
          styles.centerBlockContent,
          styles.playlistContent
        )}
      >
        <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            ТРЕК
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          ИСПОЛНИТЕЛЬ
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          АЛЬБОМ
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use href="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
          <div></div>
        </div>
        <ContentPlaylist trackList={trackList} setTrack={setTrack} />
      </div>
    </div>
  );
}
