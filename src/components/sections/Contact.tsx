import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { Container } from '../layout/Container';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../icons/BrandIcons';
import sectionStyles from './Section.module.css';
import styles from './Contact.module.css';

const CHANNELS = [
  {
    icon: <GithubIcon aria-hidden="true" />,
    label: 'GitHub',
    value: 'github.com/PedroBigas',
    href: 'https://github.com/PedroBigas',
  },
  {
    icon: <LinkedinIcon aria-hidden="true" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pedro-bigas',
    href: 'https://www.linkedin.com/in/pedro-bigas/',
  },
  {
    icon: <WhatsappIcon aria-hidden="true" />,
    label: 'WhatsApp',
    value: '+55 11 97406-8772',
    href: 'https://wa.me/5511974068772',
  },
  {
    icon: <Mail size={18} aria-hidden="true" />,
    label: 'E-mail',
    value: 'pedrobcoding@gmail.com',
    href: 'mailto:pedrobcoding@gmail.com',
  },
];

export function Contact() {
  return (
    <section className={sectionStyles.section} id="contato">
      <Container className={styles.contact}>
        <SectionLabel index={3}>Contato</SectionLabel>
        <div className={styles.main}>
          <h2 className={[sectionStyles.title, styles.panelTitle].join(' ')}>Entre em contato</h2>
          <div className={styles.panel}>
            <div className={styles.channels}>
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  className={styles.channel}
                  href={c.href}
                  target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={c.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                >
                  <span className={styles.channelIcon}>{c.icon}</span>
                  <span className={styles.channelLabel}>
                    <strong>{c.label}</strong>
                    <span>{c.value}</span>
                  </span>
                  <ArrowUpRight size={16} className={styles.channelArrow} aria-hidden="true" />
                </a>
              ))}
            </div>
            <Button
              size="lg"
              href="/Curriculo-Pedro-Bigas-2026.pdf"
              download="Curriculo-Pedro-Bigas-2026.pdf"
              iconRight={<Download size={18} aria-hidden="true" />}
            >
              Baixar currículo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
