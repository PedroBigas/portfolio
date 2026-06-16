import { HTMLAttributes, ReactNode } from 'react';
import styles from './SkillCard.module.css';

export interface SkillCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: string;
  description?: string;
  items?: string[];
}

export function SkillCard({ icon, title, description, items = [], className = '', ...rest }: SkillCardProps) {
  const cls = [styles.card, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      {items.length > 0 && (
        <div className={styles.list}>
          {items.map((it) => (
            <span key={it}>{it}</span>
          ))}
        </div>
      )}
    </div>
  );
}
