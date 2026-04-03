import styles from './Logo.module.css';
import Image from 'next/image';

type LogoProps = {
  logomarc: string;
  logotype: string;
};

function Logo({ logomarc, logotype }: LogoProps) {
  return (
    <div className={styles.logo}>
      <Image
        className={styles.logomarc}
        src={logomarc}
        alt="logo Alt + Shift"
        width={44}
        height={44}
        priority
      />
      <Image
        className={styles.logotype}
        src={logotype}
        alt="logo Alt + Shift"
        width={122}
        height={22}
        priority
      />
    </div>
  );
}

export default Logo;
