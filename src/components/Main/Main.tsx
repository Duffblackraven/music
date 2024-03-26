"use client"
import styles from "./Main.module.css";
import { useState } from "react";
import { trackType } from "@/types/types";
import Bar from "../Bar/Bar";
import CenterBlock from "../CenterBlock/CenterBlock";
import MainSlideBar from "../MainSlideBar/MainSlideBar";
import Nav from "../Nav/Nav";

export default function Main() {
  const [track, setTrack] = useState<trackType | null>(null);
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock setTrack={setTrack} />
        <MainSlideBar />
      </main>
      {track && <Bar track={track} />}
      <footer className="footer"></footer>
    </>
  );
}
