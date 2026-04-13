import { createElement } from 'react';
import type { ReactNode, JSX } from 'react';
import styles from './Title.module.css';

export type Order = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps<T extends Order> = JSX.IntrinsicElements[T];

type NativeHeadingProps<T extends Order> = Omit<
  HeadingProps<T>,
  'children' | 'className'
>;

export type TitleProps<T extends Order = 'h1'> = NativeHeadingProps<T> & {
  order?: T;
  children: ReactNode;
  className?: string;
};

export function Title<T extends Order = 'h1'>({
  order = 'h1' as T,
  children,
  className,
  ...rest
}: TitleProps<T>) {
  return createElement(
    order, //  строка 'h1', 'h2'
    {
      ...rest,
      className: [styles.title, styles[order], className]
        .filter(Boolean)
        .join(' '),
    },
    children
  );
}
