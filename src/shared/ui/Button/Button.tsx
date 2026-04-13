import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonSize = 'smallHome' | 'small' | 'middle';
export type ButtonVariant = 'filled' | 'outline';

type NativeButtonProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'children' | 'size'
>;

type NativeAnchorProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  'children' | 'size'
>;

export type ButtonType = {
  label?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  iconSrc: string;
  iconAlt: string;
  href?: string;
};

export type ButtonProps = (NativeButtonProps | NativeAnchorProps) & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode;
  leftIcon?: ReactNode;
  href?: string;
};

export function Button({
  size = 'small',
  variant = 'filled',
  children,
  leftIcon,
  className,
  type = 'button',
  href,
  ...rest
}: ButtonProps) {
  const hasText =
    children !== undefined && children !== null && children !== false;

  const sharedClassName = [
    styles.button,
    styles[size],
    styles[variant],
    hasText ? '' : styles.iconOnly,
    className ?? '',
  ].join(' ');

  const content = (
    <>
      {leftIcon ? (
        <span className={[styles.iconWrap, styles[`${size}Icon`]].join(' ')}>
          {leftIcon}
        </span>
      ) : null}

      {hasText ? <span className={styles.text}>{children}</span> : null}
    </>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={sharedClassName}
        {...(rest as NativeAnchorProps)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type as 'button' | 'submit' | 'reset'}
      className={sharedClassName}
      {...(rest as NativeButtonProps)}
    >
      {content}
    </button>
  );
}
