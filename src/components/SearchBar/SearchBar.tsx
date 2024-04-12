import classNames from 'classnames';
import styles from "./SearchBar.module.css";
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { trackType } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/types/hooks';
import { setIsSearchFalse, setIsSearchTrue, setSearchPlayList } from '@/store/features/tracksSlice';

const SearchBar = () => {
    const dispatcher = useAppDispatch();
    const defaultPlayList = useAppSelector((state) => state.tracks.playList);
    const [fuse, setFuse] = useState<Fuse<trackType> | null>(null);

    useEffect(() => {
        if (defaultPlayList.length > 0) {
            const options = {
                keys: ['name'],
                includeScore: true,
                threshold: 0.3,
            };
            const fuseInstance = new Fuse(defaultPlayList, options);
            setFuse(fuseInstance);
        }
    }, [defaultPlayList]);

    const handleSearch = (query: string) => {
        dispatcher(setIsSearchTrue());
        if (!fuse) return [];
        if (query === '') {
            dispatcher(setSearchPlayList([]));
            dispatcher(setIsSearchFalse());
            return;
        }
        const result = fuse.search(query);

        dispatcher(setSearchPlayList(result.map((item) => item.item)));
    };

    return (
        <div>
            <div className={classNames(styles.centerBlockSearch, styles.search)}>
                <svg className={styles.searchSvg}>
                    <use href="/img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input
                    className={styles.searchText}
                    type="text"
                    placeholder="Поиск"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;