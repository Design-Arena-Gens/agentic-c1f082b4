import { CapabilityCard } from './components/CapabilityCard';
import styles from './styles/page.module.css';

const CAPABILITIES = [
  {
    title: 'Full-Stack Web Development',
    summary:
      'Design, implement, and optimize end-to-end web applications using modern frameworks like Next.js, React, and Tailwind CSS with production-ready quality.',
    actions: [
      'Architect data models & APIs',
      'Integrate authentication & payments',
      'Build responsive UI/UX systems',
      'Apply performance & accessibility fixes'
    ]
  },
  {
    title: 'AI & Automation Workflows',
    summary:
      'Prototype and refine AI-driven features, automation pipelines, and intelligent assistants that blend LLM reasoning with deterministic systems.',
    actions: [
      'Implement Retrieval-Augmented Generation',
      'Design agentic task routers',
      'Automate data enrichment pipelines',
      'Build evaluation and monitoring suites'
    ]
  },
  {
    title: 'Developer Productivity Engineering',
    summary:
      'Streamline engineering workflows with custom tooling, CI/CD pipelines, static analysis, and test harnesses tailored to your stack.',
    actions: [
      'Setup CI/CD and feature environments',
      'Author reusable scaffold CLIs',
      'Integrate testing & linting suites',
      'Optimize build performance'
    ]
  },
  {
    title: 'Data & Analytics Enablement',
    summary:
      'Model datasets, build dashboards, and automate insights so teams can make decisions faster with trustworthy metrics.',
    actions: [
      'Design ETL / ELT jobs',
      'Develop analytics dashboards',
      'Verify data quality constraints',
      'Instrument product analytics events'
    ]
  }
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.pill}>What can Codex build for you?</div>
        <h1>Autonomous engineering partner for your toughest problems.</h1>
        <p>
          From ideation to deployment, I design, implement, and ship high-quality software. Whether you need
          an MVP today or want to level up an existing product, I handle the heavy lifting and deliver in
          production-ready form.
        </p>
        <div className={styles.grid}>
          <div>
            <h2>Delivery Principles</h2>
            <ul>
              <li>Outcome-driven planning</li>
              <li>Conversational collaboration</li>
              <li>Transparent iteration loops</li>
              <li>Relentless polish & testing</li>
            </ul>
          </div>
          <div>
            <h2>Engagement Modes</h2>
            <ul>
              <li>Idea to launch accelerators</li>
              <li>Feature implementation sprints</li>
              <li>Legacy system modernization</li>
              <li>Rapid experimentation pods</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.capabilities}>
        <h2>Core Capability Pillars</h2>
        <div className={styles.capabilityGrid}>
          {CAPABILITIES.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to collaborate?</h2>
        <p>
          Drop your problem statement, codebase link, or even a rough sketch. I will ship a production-ready
          solution that you can deploy today.
        </p>
        <a className={styles.button} href="mailto:codex-agent@example.com">
          Start a build session
        </a>
      </section>
    </main>
  );
}
