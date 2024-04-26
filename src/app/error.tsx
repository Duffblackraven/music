'use client';

import Link from "next/link";
import styles from "../app/not-found.module.css";
import { useEffect } from 'react';

interface ErrorProps {
    error: any; 
    reset: () => void; 
}
export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={styles.container}>
            <div className={styles.containerNf}>
                <h1 className={styles.containerH1}>404</h1>
                <h3 className={styles.containerH3}>
                Ошибка загрузки страницы
                </h3>
                <p className={styles.containerP}>Проверьте подключение к интернету и попробуйте еще раз</p>
                <Link className={styles.containerLink} href="/">
                    <p className={styles.containerLinkP}>Вернуться на главную страницу</p>
                </Link>
            </div>
        </div>
    );
}