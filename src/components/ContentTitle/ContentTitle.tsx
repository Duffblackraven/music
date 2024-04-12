import classNames from "classnames";
import styles from "./ContentTitle.module.css";

export default function ContentTitle() {
    return (
        <div className={styles.contentTitle}>
            <div className={styles.playlistTitleCol}>
            ТРЕК
            </div>
            <div className={styles.playlistTitleCol}>
            ИСПОЛНИТЕЛЬ
            </div>
            <div className={styles.playlistTitleCol}>
            АЛЬБОМ
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col04)}>
                <svg className={styles.playlistTitleSvg}>
                    <use href="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}