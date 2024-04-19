"use client"

import styles from "./CenterBlock.module.css";
import React from "react";
import dynamic from "next/dynamic";
import { FilterBlock } from "@/components/FilterBlock";
import { SearchBar } from "@/components/SearchBar";
import { ContentTitle } from "@/components/ContentTitle";

type centerBlockType = {
  playlistID: string,
  isFilter: boolean,
};

export default function CenterBlock({ playlistID, isFilter }: centerBlockType) {

  const ContentPlaylistWithCustomLoading = dynamic(() => import("../ContentPlaylist/ContentPlaylist"), {
    loading: () => <p className={styles.playlistTitleCol}>Загрузка...</p>,
  })

  let centerBlockTitle;
  switch (playlistID) {
    case "1":
      centerBlockTitle = "Плейлист дня";
      break;
    case "2":
      centerBlockTitle = "100 танцевальных хитов";
      break;
    case "3":
      centerBlockTitle = "Инди заряд";
      break;
    default:
      centerBlockTitle = "Треки";
      break;
  }

  return (
    <div className={styles.mainCenterBlock}>
      <SearchBar />
      <h2 className={styles.centerBlockH2}>{centerBlockTitle}</h2>
      {isFilter && <FilterBlock />}
      <div className={styles.centerBlockContent}>
        <ContentTitle />
        <ContentPlaylistWithCustomLoading />
      </div>
    </div>
  );
}