import { ProjectCard, ProjectCardProps } from '../ui/ProjectCard';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import styles from './Section.module.css';

const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Altitude Park',
    description:
      'Site institucional e landing page com sistema de gestão de leads e blog: dashboard administrativo, autenticação e acompanhamento de conversão.',
    image: '/images/cover-1.png',
    status: 'Em produção',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle', 'NextAuth'],
    href: 'https://altitudepark.com.br/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    title: 'Instrutemp',
    description: 'Site institucional em PHP com painel administrativo customizado, SCSS modular e SEO técnico.',
    image: '/images/cover-2.png',
    status: 'Em produção',
    tags: ['PHP', 'MySQL', 'SCSS', 'Bootstrap'],
    href: 'https://www.instrutemp.com.br/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    title: 'UAALD',
    description:
      'Back-end de plataforma multi-tenant para lojas de carros: CRM, controle de estoque e marketplace, com integrações Mercado Livre, OLX, Webmotors e Mercado Pago.',
    image: '/images/cover-3.png',
    status: 'Em produção',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'JWT'],
    href: 'https://www.uaald.com.br/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export function Projects() {
  return (
    <section className={styles.section} id="projetos">
      <Container>
        <SectionHeading
          index={1}
          label="Projetos selecionados"
          title="Trabalhos recentes"
          sub="Uma amostra de sites e back-ends entregues — sempre medindo o impacto real em velocidade e conversão."
        />
        <div className={styles.grid3}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
