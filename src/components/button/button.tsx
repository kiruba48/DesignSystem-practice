import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  // This approach could get cumbersome if there are many variants.
  // let className = styles.button;
  // if (variant === 'secondary') className += ' ' + styles.secondary;
  // if (variant === 'destructive') className += ' ' + styles.destructive;

  // Better approach using clsx
  const classes = clsx(styles.button, styles[variant], styles[size], className);

  return <button className={classes} {...props} />;
};
