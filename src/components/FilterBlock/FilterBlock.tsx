"use client"

import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useState } from "react";
import FilterBlockItem from "../FilterBlockItem/FilterBlockItem";
import { artists, genres, years } from "./data";
import { useAppSelector } from "@/types/hooks";


const FilterBlock = () => {

  const playList = useAppSelector((state) => state.tracks.playList)

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (newFilter: string) => {
    setActiveFilter((prev) => newFilter === prev ? null : newFilter);
  }


  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>

      <FilterBlockItem onClick={() => handleFilterClick("artists")} isOpened={activeFilter === "artists"} list={artists}>исполнителю</FilterBlockItem>
      <FilterBlockItem onClick={() => handleFilterClick("years")} isOpened={activeFilter === "years"} list={years}>году выпуска</FilterBlockItem>
      <FilterBlockItem onClick={() => handleFilterClick("genres")} isOpened={activeFilter === "genres"} list={genres}>жанру</FilterBlockItem>

    </div >
  );
}

export default FilterBlock;