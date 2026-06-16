import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'solid';
  /** Accessible label — required since there is no visible text */
  label: string;
}

export function IconButton({
  children,
  size = 'md',
  variant = 'outline',
  label,
  disabled = false,
  className = '',
  ...rest
}: IconButtonProps) {
  const cls = [styles.btn, styles[size], variant === 'solid' ? styles.solid : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <button type="button" className={cls} aria-label={label} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
