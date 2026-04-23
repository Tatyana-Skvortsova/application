import styles from './MainCard.module.css';
import { Button } from '@/shared/ui/Button';
import { Title, type Order, type TitleProps } from '@/shared/ui/Title';
import { Description, DescriptionProps } from '@/shared/ui/Description';
import { Generated, GeneratedProps } from '../generated';
import Image from 'next/image';
import type { ButtonType } from '@/shared/ui/Button';

type MainCardProps = {
  title: TitleProps<Order>;
  description: DescriptionProps;
  button: ButtonType;
  generated: GeneratedProps;
};

function MainCard({ title, description, button, generated }: MainCardProps) {
  const { children: titleChildren, ...titleRest } = title;
  const { children: descriptionChildren, ...descriptionRest } = description;

  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title {...titleRest} className={styles.title}>
            {titleChildren}
          </Title>
          <Description {...descriptionRest} className={styles.description}>
            {descriptionChildren}
          </Description>

          <div className={styles.secondaryButton}>
            <Button
              size={button.size}
              variant={button.variant}
              href={button.href}
              leftIcon={
                <Image
                  src={button.iconSrc}
                  alt={button.iconAlt}
                  fill
                  priority
                />
              }
            >
              {button.label}
            </Button>
          </div>
        </div>
        <div className={styles.generated}>
          <Generated
            variant={generated.variant}
            showLeftLabel={generated.showLeftLabel}
            showBottomLabel={generated.showBottomLabel}
          />
        </div>
      </div>
    </section>
  );
}

export default MainCard;
