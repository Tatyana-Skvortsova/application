import styles from './ButtonHome.module.css';
import Image from 'next/image';

function ButtonHome() {
  const handleClick = () => {};
  return (
    <button className={styles.button} onClick={handleClick}>
      <Image
        src="/home.svg"
        alt="home"
        width={20}
        height={20}
        className={styles.homeIcon}
      />
    </button>
  );
}

export default ButtonHome;
