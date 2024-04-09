"use client"

import styles from "./CenterBlock.module.css";
import React from "react";
import dynamic from "next/dynamic";
import { FilterBlock } from "@/components/FilterBlock";
import { ContentTitle } from "../ContentTitle";
import { SearchBar } from "../SearchBar";


export default function CenterBlock() {

  const ContentPlaylistWithCustomLoading = dynamic(() => import("../ContentPlaylist/ContentPlaylist"), {
    loading: () => <p className={styles.playlistTitleCol}>Загрузка...</p>,
  })

  return (
    <div className={styles.mainCenterBlock}>
      <SearchBar />
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <FilterBlock />
      <div className={styles.centerBlockContent}>
        <ContentTitle />
        <ContentPlaylistWithCustomLoading />
      </div>
    </div>
  );
}