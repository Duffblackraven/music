import Link from "next/link";
import styles from "../app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.containerNf}>
        <h1 className={styles.containerH1}>404</h1>
        <h3 className={styles.containerH3}>
        Страница не найдена
        </h3>
        <Link className={styles.containerLink} href="/">
          <p className={styles.containerLinkP}>Вернуться на главную страницу</p>
        </Link>
      </div>
    </div>
  );
}
