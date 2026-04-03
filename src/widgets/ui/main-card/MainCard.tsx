import styles from './MainCard.module.css';
import { Button } from '@/shared/ui/Buttons';
import Image from 'next/image';
import type { ButtonData } from '@/shared/config/main-page-data';

type MainCardProps = {
  header: string;
  description: string;
  button: ButtonData;
};

function MainCard({ header, description, button }: MainCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.text}>{description}</p>

        <div className={styles.secondaryButton}>
          <Button
            size={button.size}
            variant={button.variant}
            leftIcon={
              <Image src={button.iconSrc} alt={button.iconAlt} fill priority />
            }
          >
            {button.label}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
