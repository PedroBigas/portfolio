import { ReactNode } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import styles from './Section.module.css';

export interface SectionHeadingProps {
  index: number;
  label: ReactNode;
  title: ReactNode;
  sub: ReactNode;
}

export function SectionHeading({ index, label, title, sub }: SectionHeadingProps) {
  return (
    <div className={styles.head}>
      <div>
        <SectionLabel index={index}>{label}</SectionLabel>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.sub}>{sub}</p>
    </div>
  );
}
