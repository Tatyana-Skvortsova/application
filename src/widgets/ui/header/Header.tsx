import Image from 'next/image';
import styles from './Header.module.css';
import { Logo, type LogoProps } from '@/shared/ui/logo';
import { Button } from '@/shared/ui/Button';
import { Generated, GeneratedProps } from '../generated';
import type { ButtonType } from '@/shared/ui/Button';

type HeaderProps = {
  logo: LogoProps;
  homeButton: ButtonType;
  generated: GeneratedProps;
};

const HomeNavButton = ({
  href,
  size,
  variant,
  iconSrc,
  iconAlt,
}: ButtonType) => (
  <Button
    href={href}
    size={size}
    variant={variant}
    leftIcon={<Image src={iconSrc} alt={iconAlt} fill priority />}
    aria-label="Home"
  />
);

function Header({ logo, homeButton, generated }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
          <Logo {...logo} />
        </div>
        <HomeNavButton {...homeButton} />
      </div>
      <div className={styles.rightContainer}>
        <Generated
          variant={generated.variant}
          showLeftLabel={generated.showLeftLabel}
          showBottomLabel={generated.showBottomLabel}
        />
        <HomeNavButton {...homeButton} />
      </div>
    </header>
  );
}

export default Header;
