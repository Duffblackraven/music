import styles from "./Main.module.css";
import { Nav } from "@components/Nav";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Bar } from "@components/Bar";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <MainSlideBar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </>
  );
}
