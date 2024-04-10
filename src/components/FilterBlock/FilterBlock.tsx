"use client"
import classNames from "classnames";
import styles from "./FilterBlock.module.css";
import React, { useMemo, useState } from 'react';
import { trackType } from '@/types/types';
import { clearActiveFilters, setActiveFilter } from '@/store/features/tracksSlice';
import { getUniqueValues } from "@/lib/getUniqueValues";
import { useAppDispatch, useAppSelector } from "@/types/hooks";
import { FilterBlockItem } from "../FilterBlockItem"; 


const FilterBlock = () => {
  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const selectedAuthors = useAppSelector((state) => state.tracks.activeFilters.authors);
  const selectedGenres = useAppSelector((state) => state.tracks.activeFilters.genres);
  const [localActiveFilter, setLocalActiveFilter] = useState<keyof trackType | null>(null);
  const sortByYearValues = ["По умолчанию", "сначала новые", "сначала старые"];


  const toggleReleaseYearFilter = (option: string) => {
    dispatcher(setActiveFilter({
      release_dates: option
    }));
  };

  const toggleSelectedAuthors = (author: string) => {
    dispatcher(setActiveFilter({
      authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item) => item !== author) : [...selectedAuthors, author],
    }))
  };

  const toggleSelectedGenres = (genre: string) => {
    dispatcher(setActiveFilter({
      genres: selectedGenres.includes(genre) ? selectedGenres.filter((item) => item !== genre) : [...selectedGenres, genre],
    }))
  };

  const discardFilters = () => {
    dispatcher(clearActiveFilters())
  }

  const memoizedGetUniqueValues = useMemo(() => {
    if (localActiveFilter) {
      return getUniqueValues(playList, localActiveFilter);
    }
    return [];
  }, [localActiveFilter, playList]);

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'author' ? null : 'author')}
        isOpened={localActiveFilter === 'author'}
        list={memoizedGetUniqueValues}
        selectedOptions={selectedAuthors}
        toggleSelectedOption={toggleSelectedAuthors}
      >
        исполнителю
      </FilterBlockItem>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'release_date' ? null : 'release_date')}
        isOpened={localActiveFilter === 'release_date'}
        list={sortByYearValues}
        selectedOptions={[]}
        toggleSelectedOption={toggleReleaseYearFilter}
      >
        году выпуска
      </FilterBlockItem>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'genre' ? null : 'genre')}
        isOpened={localActiveFilter === 'genre'}
        list={memoizedGetUniqueValues}
        selectedOptions={selectedGenres}
        toggleSelectedOption={toggleSelectedGenres}
      >
        жанру
      </FilterBlockItem>

      <button
        className={styles.discardButton}
        onClick={() => discardFilters()}>
        сбросить фильтры
      </button>

    </div>
  );
};

export default FilterBlock;