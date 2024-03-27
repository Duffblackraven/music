import { useState } from "react";
import styles from "./BarVolume.module.css";
import classNames from "classnames";

type BarVolumeProps = {
  handleVolume: any;
};

export default function BarVolume({ handleVolume }: BarVolumeProps) {

  const [volume, setVolume] = useState("");
  const onChange = (e: any) => {
    let newVolume = e.target.value;
    setVolume(newVolume);
    handleVolume(+newVolume)
  };
  

  return (
    <div className={classNames(styles.barVolume, styles.volume)}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use href="/img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={styles.volumeProgress}>
          <input
            className={classNames(styles.volumeProgressLine, styles.sliderProgress)}
            type="range"
            name="range"
            min={0}
            value={volume}
            max={100}
            onChange={onChange}
            step={1}
          />
        </div>
      </div>
    </div>
  );
}
