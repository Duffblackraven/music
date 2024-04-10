import classNames from "classnames";
import styles from "./FilterBlockItem.module.css";
import React, { useEffect, useRef, useState } from "react";

type FilterItemProps = {
    children: string;
    onClick: () => void;
    isOpened: boolean;
    list: Array<string>;
    selectedOptions: Array<string>;
    toggleSelectedOption: (value: string) => void;
};

const FilterBlockItem = ({
    children,
    onClick,
    isOpened,
    list,
    selectedOptions,
    toggleSelectedOption,
}: FilterItemProps) => {
    const [popUpOpen, setPopUpOpen] = useState<boolean>(false);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popUpOpen && filterRef.current && !filterRef.current.contains(event.target as Node)) {
                onClick();
                setPopUpOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClick, popUpOpen]);

    const handleButtonClick = () => {
        setPopUpOpen(!popUpOpen);
        onClick();
    };

    const handleItemClick = (value: string) => {
        toggleSelectedOption(value);
    };

    return (
        <div ref={filterRef}>
            {list.length > 0 && isOpened && (
                <div className={styles.CountPopUp}>
                    {list.length}
                </div>
            )}
            <button
                type="button"
                className={classNames(styles.filterButton, {
                    [styles.active]: isOpened,
                })}
                onClick={handleButtonClick}
            >
                {children}
            </button>
            {isOpened && (
                <div className={styles.filterBy}>
                    {list.length > 0 ? (
                        <ul>
                            {list.map((value, index) => (
                                <li
                                    key={index}
                                    className={classNames(styles.filterByP, {
                                        [styles.active]: selectedOptions.includes(value),
                                    })}
                                    onClick={() => handleItemClick(value)}
                                >
                                    {value}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.filterByP}>Данные не найдены...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterBlockItem;