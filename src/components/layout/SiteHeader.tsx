import { Navbar } from '../ui/Navbar';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ThemeToggle';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <div className={styles.navWrap}>
      <div className={styles.inner}>
        <Navbar
          brand="Pedro Bigas"
          links={[
            { label: 'Projetos', href: '#projetos', active: true },
            { label: 'Skills', href: '#skills' },
            { label: 'Contato', href: '#contato' },
          ]}
          actions={
            <>
              <ThemeToggle />
              <Button size="sm" href="#contato">
                Fale comigo
              </Button>
            </>
          }
        />
      </div>
    </div>
  );
}
