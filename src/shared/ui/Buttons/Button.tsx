import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonSize = 'small' | 'middle';
export type ButtonVariant = 'filled' | 'outline';

type NativeButtonProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'children' | 'size'
>;

export type ButtonProps = NativeButtonProps & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode;
  leftIcon?: ReactNode;
};

export default function Button({
  size = 'small',
  variant = 'filled',
  children,
  leftIcon,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const hasText = children !== undefined && children !== null && children !== false;

  return (
    <button
      {...rest}
      type={type}
      className={[
        styles.button,
        styles[size],
        styles[variant],
        hasText ? '' : styles.iconOnly,
        className ?? '',
      ].join(' ')}
    >
      {leftIcon ? (
        <span className={[styles.iconWrap, styles[`${size}Icon`]].join(' ')}>
          {leftIcon}
        </span>
      ) : null}

      {hasText ? <span className={styles.text}>{children}</span> : null}
    </button>
  );
}
