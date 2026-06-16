import { HTMLAttributes, ReactNode } from 'react';
import styles from './SectionLabel.module.css';

export interface SectionLabelProps extends HTMLAttributes<HTMLSpanElement> {
  /** Section number; rendered zero-padded ("01"). Optional. */
  index?: number;
  children?: ReactNode;
}

export function SectionLabel({ index, children, className = '', ...rest }: SectionLabelProps) {
  const cls = [styles.label, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {index != null && <span className={styles.num}>{String(index).padStart(2, '0')}</span>}
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.text}>{children}</span>
    </span>
  );
}
