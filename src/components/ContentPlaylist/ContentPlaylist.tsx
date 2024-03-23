import React from "react";
import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import { PlayListItem } from "@components/PlayListItem";
import { getTracks } from "@/api/api";

async function ContentPlaylist() {

  let playlistArray: trackType[];
  try {
    playlistArray = await getTracks();
  }
  catch (error) {
    console.error('Error getting the playlist', error);
    playlistArray = [];
  }

  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {
        playlistArray.map((el, index) => (
          <PlayListItem
            key={index}
            el={el}
          />
        ))
      }
    </div>
  );
};

export default ContentPlaylist;