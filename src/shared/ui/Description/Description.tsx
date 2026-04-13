import styles from './Description.module.css';
import type { ReactNode } from 'react';

export type DescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function Description({ children, className }: DescriptionProps) {
  return (
    <p className={[styles.description, className].filter(Boolean).join(' ')}>
      {children}
    </p>
  );
}
