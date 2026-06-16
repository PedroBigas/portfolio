import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { TechTag } from '../ui/TechTag';
import { Container } from '../layout/Container';
import styles from './Hero.module.css';

const STACK = ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PHP'];

export function Hero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.heroBg} aria-hidden="true" />
      <Container className={styles.inner}>
        <Badge variant="success" dot>
          Disponível para novos projetos
        </Badge>
        <h1 className={styles.title}>
          Pedro Bigas
          <br />
          <span className={styles.grad}>Desenvolvedor</span>
          <br />
          <span className={styles.grad}>Full Stack.</span>
        </h1>
        <p className={styles.lead}>
          Sou <strong>Pedro Bigas</strong>, desenvolvedor Full Stack. Construo sites institucionais responsivos e
          otimizados para SEO — com foco obsessivo em performance e experiência de uso.
        </p>
        <div className={styles.cta}>
          <Button size="lg" href="#projetos" iconRight={<ArrowRight size={18} aria-hidden="true" />}>
            Ver projetos
          </Button>
          <Button size="lg" variant="secondary" href="#contato">
            Fale comigo
          </Button>
        </div>
        <dl className={styles.stats}>
          <div>
            <dt>+50</dt>
            <dd>sites entregues</dd>
          </div>
          <div>
            <dt>3 anos</dt>
            <dd>de experiência</dd>
          </div>
        </dl>
        <div className={styles.stack}>
          <span className={styles.stackLabel}>Stack principal</span>
          <div className={styles.tags}>
            {STACK.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
