import styles from './Logo.module.css';
import Image from 'next/image';

export type LogoProps = {
  logomarc: string;
  logotype: string;
  className?: string;
  logomarcAlt: string;
  logotypeAlt: string;
  widthlogomarc?: number;
  heightlogomarc?: number;
  widthlogotype?: number;
  heightlogotype?: number;
  prioritylogomarc?: boolean;
  prioritylogotype?: boolean;
  filllogomarc?: boolean;
  filllogotype?: boolean;
};

export function Logo({
  logomarc,
  logotype,
  className,
  logomarcAlt,
  logotypeAlt,
  widthlogomarc,
  heightlogomarc,
  widthlogotype,
  heightlogotype,
  prioritylogomarc,
  prioritylogotype,
  filllogomarc,
  filllogotype,
}: LogoProps) {
  return (
    <div className={[styles.logo, className].filter(Boolean).join(' ')}>
      <Image
        className={styles.logomarc}
        src={logomarc}
        alt={logomarcAlt}
        width={widthlogomarc}
        height={heightlogomarc}
        priority={prioritylogomarc}
        fill={filllogomarc}
      />
      <Image
        className={styles.logotype}
        src={logotype}
        alt={logotypeAlt}
        width={widthlogotype}
        height={heightlogotype}
        priority={prioritylogotype}
        fill={filllogotype}
      />
    </div>
  );
}
