'use client';

import { motion } from 'framer-motion';
import styles from './CapabilityCard.module.css';

type CapabilityCardProps = {
  title: string;
  summary: string;
  actions: string[];
};

const fadeIn = {
  initial: { opacity: 0, translateY: 16 },
  whileInView: { opacity: 1, translateY: 0 },
  viewport: { once: true, margin: '-48px' }
};

export function CapabilityCard({ title, summary, actions }: CapabilityCardProps) {
  return (
    <motion.article className={styles.card} {...fadeIn} transition={{ duration: 0.5 }}>
      <header className={styles.header}>
        <h3>{title}</h3>
      </header>
      <p className={styles.summary}>{summary}</p>
      <ul className={styles.actions}>
        {actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
    </motion.article>
  );
}
