"use client"

import { useAppSelector } from "@/types/hooks";
import styles from "./Nav.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {

  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened((prevState) => !prevState);
  };

  const authState = useAppSelector((state) => state.auth.authState);

  return (
    <nav className={classNames(styles.mainNav, styles.nav)}>
      <div className={classNames(styles.navLogo, styles.logo)}>
        <Link href="/">
          <Image
            alt="logo"
            width={113}
            height={17}
            className={styles.logoImage}
            src="/img/logo.png"
          />
        </Link>
      </div>
      <div onClick={toggleMenu} className={classNames(styles.navBurger, styles.burger, isOpened ? styles.openNav : "")}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {
        isOpened && (
          <div className={classNames(styles.navMenu, styles.menu)}>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  Главная
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/myplaylist" className={styles.menuLink}>
                  Мой плейлист
                </Link>
              </li>

              {!authState && (
                <li className={styles.menuItem}>
                  <Link href="/signin" className={styles.menuLink}>
                    Войти
                  </Link>
                </li>
              )}

            </ul>
          </div>
        )}
    </nav>
  );
}