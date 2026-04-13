import styles from './MainTitle.module.css';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title';
import type { ButtonType } from '@/shared/ui/Button';

type MainTitleProps = {
  title: string;
  button: ButtonType;
};

function MainTitle({ title, button }: MainTitleProps) {
  return (
    <div className={styles.mainTitle}>
      <div className={styles.wrapper}>
        <div>
          <Title order="h1" className={styles.title}>
            {title}
          </Title>
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
    </div>
  );
}

export default MainTitle;
