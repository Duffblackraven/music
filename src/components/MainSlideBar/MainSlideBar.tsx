import styles from "./MainSlideBar.module.css"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

type mainSideBarType = {
  isSideBar: boolean
}

export default function MainSlideBar({ isSideBar }: mainSideBarType) {
  return (
    <div className={classNames(styles.mainSidebar, styles.sidebar)}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}></p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use href="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      {isSideBar && (
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link href={"/tracks/1"}>
              <Image
                width={250}
                height={150}
                className={styles.sidebarImage}
                src="/img/playlist01.png"
                alt="плейлист дня"
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link href={"/tracks/2"}>
              <Image
                width={250}
                height={150}
                className={styles.sidebarImage}
                src="/img/playlist02.png"
                alt="плейлист дня"
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link href={"/tracks/3"}>
              <Image
                width={250}
                height={150}
                className={styles.sidebarImage}
                src="/img/playlist03.png"
                alt="плейлист дня"
              />
            </Link>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
