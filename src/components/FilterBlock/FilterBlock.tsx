import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useContext, useState } from "react";
import FilterBlockItem from "../FilterBlockItem/FilterBlockItem";
import { artists, genres, years } from "./data";

const FilterBlock: React.FC = () => {


  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (newFilter: string) => {
    setActiveFilter((prev) => newFilter === prev ? null : newFilter);
  }

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Поиск по:</div>

      <FilterBlockItem onClick={() => handleFilterClick("artists")} isOpened={activeFilter === "artists"} list={artists}>исполнителю</FilterBlockItem>
      <FilterBlockItem onClick={() => handleFilterClick("years")} isOpened={activeFilter === "years"} list={years}>году выпуска</FilterBlockItem>
      <FilterBlockItem onClick={() => handleFilterClick("genres")} isOpened={activeFilter === "genres"} list={genres}>жанру</FilterBlockItem>

    </div >
  );
}

export default FilterBlock;
