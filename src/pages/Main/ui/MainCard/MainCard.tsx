import styles from './MainCard.module.css';
import ButtonCreate from '@/shared/ui/Buttons/ButtonCreate/ButtonCreate';

function MainCard() {
    return (
        <div className = {styles.card} >
            <div className={styles.container}>
                <h2 className={styles.header}>Hit your goal</h2>
                <p className={styles.text}>
                    Generate and send out couple more job applications today to get hired faster
                </p>

            <div className={styles.buttonCreate}>
                    <ButtonCreate size="large" />
            </div>
        
        </div>
    </div>
        
    );
};

export default MainCard;