import styles from './MainTitle.module.css';
import ButtonCreate from '@/shared/ui/Buttons/ButtonCreate/ButtonCreate';

interface MainTitleProps {
    title: string;
}

function MainTitle({title}: MainTitleProps) {
    return (
        <div className={styles.mainTitle}>
            <div><h1 className={styles.title}>{title}</h1></div>
            <div><ButtonCreate size="small" /></div>
        </div>
    )
}

export default MainTitle;