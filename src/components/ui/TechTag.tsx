import { HTMLAttributes, ReactNode } from 'react';
import styles from './TechTag.module.css';

export interface TechTagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children?: ReactNode;
  icon?: ReactNode;
  interactive?: boolean;
}

export function TechTag({ children, icon = null, interactive = false, className = '', ...rest }: TechTagProps) {
  const cls = [styles.tag, interactive ? styles.interactive : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
