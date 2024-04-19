import styles from "./Main.module.css";
import { Nav } from "@components/Nav";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Bar } from "@components/Bar";

type mainType = {
  playlistID: string,
  isFilter?: boolean,
  isSideBar?: boolean,
};

export default function Main({ playlistID, isFilter = true, isSideBar = true }: mainType) {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock playlistID={playlistID} isFilter={isFilter} />
        <MainSlideBar isSideBar={isSideBar} />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </>
  );
}
