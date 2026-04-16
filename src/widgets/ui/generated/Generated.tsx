import Image from 'next/image';
import styles from './Generated.module.css';

export type GeneratedVariant = 'circles' | 'rectangles' | 'single';

export type GeneratedProps = {
  variant?: GeneratedVariant;
  showLeftLabel?: boolean;
  showBottomLabel?: boolean;
};

const MAX_COUNT = 5;

function quantityGenerated(): number {
  return 3;
}

function rowShape(variant: GeneratedVariant): 'circles' | 'rectangles' {
  return variant === 'rectangles' ? 'rectangles' : 'circles';
}

export function Generated({
  variant = 'circles',
  showLeftLabel = true,
  showBottomLabel = false,
}: GeneratedProps) {
  const savedCount = quantityGenerated();
  const leftLabel = `${savedCount}/${MAX_COUNT} applications generated`;
  const bottomLabel = `${savedCount} out of ${MAX_COUNT}`;

  const shape = rowShape(variant);
  const isCompleted = savedCount === MAX_COUNT;
  const rowModifierClass = isCompleted
    ? styles.single
    : shape === 'rectangles'
      ? styles.rectangles
      : styles.circles;
  const smallShapeClass =
    shape === 'rectangles' ? styles.rectangleIcon : styles.circleIcon;
  const progressCells = Array.from({ length: MAX_COUNT }, (_, index) => {
    const isLit = index < savedCount;
    const litClass = isLit ? styles.active : styles.inactive;

    return (
      <span
        key={index}
        className={[styles.icon, smallShapeClass, litClass].join(' ')}
      />
    );
  });
  const progressRow = isCompleted ? (
    <Image
      src="/checkIcon.svg"
      alt="check icon"
      width={28}
      height={28}
      className={styles.fullGenerateIcon}
    />
  ) : (
    progressCells
  );

  return (
    <div className={styles.generated}>
      {showLeftLabel ? (
        <span className={styles.leftLabel}>{leftLabel}</span>
      ) : null}

      <div className={styles.rightBlock}>
        <div className={[styles.iconsRow, rowModifierClass].join(' ')}>
          {progressRow}
        </div>

        {showBottomLabel ? (
          <span className={styles.bottomLabel}>{bottomLabel}</span>
        ) : null}
      </div>
    </div>
  );
}
