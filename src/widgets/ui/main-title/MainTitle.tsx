import styles from './MainTitle.module.css';
import Image from 'next/image';
import { Button } from '@/shared/ui/Buttons';
import type { ButtonData } from '@/shared/config/main-page-data';

type MainTitleProps = {
  title: string;
  button: ButtonData;
};

function MainTitle({ title, button }: MainTitleProps) {
  return (
    <div className={styles.mainTitle}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div>
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
  );
}

export default MainTitle;
