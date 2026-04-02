import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import ButtonHome from '../Buttons/ButtonHome/ButtonHome';

interface HeaderProps {
    applicationsGenerated: number;
}

function Header({ applicationsGenerated }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <div className={styles.logoContainer}>
                    <Logo
                        logomarc="/logomarc.svg"
                        logotype="/logotype.svg"
                    />  
                </div>
                <div><ButtonHome /></div> 
           </div>
           <div>
                <ButtonHome />
           </div>
        </header>
    )
}

export default Header;