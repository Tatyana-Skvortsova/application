import styles from './Logo.module.css';
import Image from 'next/image';
import type { CSSProperties } from 'react';

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
  const marcW = widthlogomarc ?? 44;
  const marcH = heightlogomarc ?? 44;
  const typeW = widthlogotype ?? 122;
  const typeH = heightlogotype ?? 22;

  const cssVars = {
    '--logo-marc-w': `${marcW}px`,
    '--logo-marc-h': `${marcH}px`,
    '--logo-type-w': `${typeW}px`,
    '--logo-type-h': `${typeH}px`,
  } as CSSProperties;

  return (
    <div
      className={[styles.logo, className].filter(Boolean).join(' ')}
      style={cssVars}
    >
      <Image
        className={styles.logomarc}
        src={logomarc}
        alt={logomarcAlt}
        width={marcW}
        height={marcH}
        priority={prioritylogomarc}
        fill={filllogomarc}
      />
      <div className={styles.logotypeWrap}>
        <Image
          className={styles.logotype}
          src={logotype}
          alt={logotypeAlt}
          width={typeW}
          height={typeH}
          priority={prioritylogotype}
          fill={filllogotype}
        />
      </div>
    </div>
  );
}
