'use client';

import styles from './ButtonCteate.module.css';
import Image from 'next/image';

function ButtonCreate({ size = 'medium' }) {
    const handleClick = () => {
        //логика 
    };
    const buttonClass = `${styles.button} ${styles[size]}`;
    const iconClass = `${styles.plusIcon} ${styles[size]}Icon`;
    return (
        <button className={buttonClass} onClick={handleClick}>
            <div className={iconClass}>
            <Image
                className={styles.plusIcon}
                src="./plus.svg"
                alt="plus"
                fill
                priority
                />
            </div> 
            <span className={styles.text}>Create New</span>
        </button>
    )
}

export default ButtonCreate;