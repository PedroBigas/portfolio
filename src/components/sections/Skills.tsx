import { HeartHandshake, Layers, Search, Server } from 'lucide-react';
import { SkillCard, SkillCardProps } from '../ui/SkillCard';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import styles from './Section.module.css';

const SKILLS: SkillCardProps[] = [
  {
    icon: <Layers size={22} aria-hidden="true" />,
    title: 'Front-end',
    description: 'Interfaces responsivas, acessíveis e fiéis ao design.',
    items: ['React', 'Next.js', 'TypeScript', 'CSS'],
  },
  {
    icon: <Server size={22} aria-hidden="true" />,
    title: 'Back-end',
    description: 'APIs robustas, integrações e modelagem de dados.',
    items: ['Node.js', 'NestJS', 'PHP', 'PostgreSQL'],
  },
  {
    icon: <HeartHandshake size={22} aria-hidden="true" />,
    title: 'Soft skills',
    description: 'Comunicação direta, organização e colaboração próxima com time e cliente.',
    items: ['Comunicação', 'Colaboração', 'Autonomia', 'Proatividade'],
  },
  {
    icon: <Search size={22} aria-hidden="true" />,
    title: 'SEO técnico',
    description: 'Estrutura semântica, dados estruturados e indexação.',
    items: ['Schema.org', 'Sitemaps', 'Meta tags'],
  },
];

export function Skills() {
  return (
    <section className={[styles.section, styles.alt].join(' ')} id="skills">
      <Container>
        <SectionHeading
          index={2}
          label="Stack & skills"
          title="O que eu construo"
          sub="Full stack de verdade — da interface ao banco de dados, sempre com performance e SEO como critério de qualidade."
        />
        <div className={styles.grid4}>
          {SKILLS.map((s) => (
            <SkillCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
