import { AnchorHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { TechTag } from './TechTag';
import { Badge } from './Badge';
import styles from './ProjectCard.module.css';

export interface ProjectMetric {
  /** Headline figure, e.g. "+190%" */
  value: string;
  /** Caption, e.g. "PageSpeed mobile" */
  label: string;
}

export interface ProjectCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  title: string;
  description?: string;
  tags?: string[];
  image?: string;
  status?: string;
  metric?: ProjectMetric;
  href?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags = [],
  image,
  status,
  metric,
  href,
  className = '',
  ...rest
}: ProjectCardProps): ReactNode {
  const cls = [styles.card, className].filter(Boolean).join(' ');
  const content = (
    <>
      <div className={styles.media}>
        {image && <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" />}
        {status && (
          <div className={styles.status}>
            <Badge variant="primary" dot>
              {status}
            </Badge>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.title}>{title}</h3>
          {href && (
            <span className={styles.arrow}>
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          )}
        </div>
        {description && <p className={styles.desc}>{description}</p>}
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        )}
        {metric && (
          <div className={styles.metric}>
            <b>{metric.value}</b>
            <span>{metric.label}</span>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    );
  }
  return <article className={cls}>{content}</article>;
}
