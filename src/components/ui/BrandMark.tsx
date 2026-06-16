import styles from './BrandMark.module.css';

export interface BrandMarkProps {
  size?: 'sm' | 'md';
  className?: string;
}

const SIZES = { sm: 28, md: 40 } as const;

export function BrandMark({ size = 'md', className = '' }: BrandMarkProps) {
  const px = SIZES[size];
  const cls = [styles.mark, styles[size], className].filter(Boolean).join(' ');

  return (
    <img
      src="/icon.png"
      alt=""
      className={cls}
      width={px}
      height={px}
      decoding="async"
      aria-hidden="true"
    />
  );
}
