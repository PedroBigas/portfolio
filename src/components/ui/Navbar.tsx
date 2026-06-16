import { HTMLAttributes, ReactNode } from 'react';
import { BrandMark } from './BrandMark';
import styles from './Navbar.module.css';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  logo?: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
}

export function Navbar({ brand = 'Pedro Bigas', logo, links = [], actions, className = '', ...rest }: NavbarProps) {
  const cls = [styles.nav, className].filter(Boolean).join(' ');
  return (
    <nav className={cls} {...rest}>
      <a className={styles.brand} href="#top">
        {logo ?? <BrandMark size="sm" />}
        {brand}
      </a>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} aria-current={l.active ? 'page' : undefined}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>{actions}</div>
    </nav>
  );
}
