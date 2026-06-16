import { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children?: ReactNode;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
  dot?: boolean;
}

export function Badge({ children, variant = 'neutral', dot = false, className = '', ...rest }: BadgeProps) {
  const cls = [styles.badge, styles[variant], className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
