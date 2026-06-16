import { Mail } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import { BrandMark } from '../ui/BrandMark';
import { Container } from '../layout/Container';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <BrandMark size="md" />
          <div>
            <strong>Pedro Bigas</strong>
            <span>Desenvolvedor Full Stack</span>
          </div>
        </div>
        <nav className={styles.nav}>
          <a href="#projetos">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className={styles.social}>
          <IconButton label="GitHub">
            <GithubIcon aria-hidden="true" />
          </IconButton>
          <IconButton label="LinkedIn">
            <LinkedinIcon aria-hidden="true" />
          </IconButton>
          <IconButton label="E-mail">
            <Mail size={18} aria-hidden="true" />
          </IconButton>
        </div>
      </Container>
      <Container className={styles.base}>
        <span>© {new Date().getFullYear()} Pedro Bigas.</span>
      </Container>
    </footer>
  );
}
