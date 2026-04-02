'use client';

import styles from './ButtonHome.module.css';
import Image from 'next/image';

function ButtonHome() {
    const handleClick = () => {
        //логика 
    };
    return (
        <button className={styles.button} onClick={handleClick}>
            <Image
                className={styles.homeIcon}
                src="./home.svg"
                alt="home"
                width={15}
                height={15}
                priority
            />
        </button>
    )
}

export default ButtonHome;