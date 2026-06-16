import { HTMLAttributes } from 'react';
import styles from './Container.module.css';

export function Container({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  const cls = [styles.container, className].filter(Boolean).join(' ');
  return <div className={cls} {...rest} />;
}
