import styles from './Header.module.css';
import Logo from '../../../shared/ui/logo/Logo';
import ButtonHome from '../../../shared/ui/Buttons/button-home/ButtonHome';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
          <Logo logomarc="/logomarc.svg" logotype="/logotype.svg" />
        </div>
        <div>
          <ButtonHome />
        </div>
      </div>
      <div>
        <ButtonHome />
      </div>
    </header>
  );
}

export default Header;
