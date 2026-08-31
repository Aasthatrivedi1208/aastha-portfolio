import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
} from 'lucide-react';

const experience = [
  {
    company: 'PayPal',
    role: 'Senior Data Engineer',
    period: 'Aug 2024 — Present',
    location: 'Bengaluru',
    summary: 'Building high-volume data platforms, reporting workflows, and applied AI automation for customer and merchant systems.',
    highlights: [
      'Migrated data pipelines processing 50M+ records daily and automated Oracle-to-BigQuery movement with GCS-staged loads.',
      'Orchestrated customer profile, payment history, and reconciliation workflows with Cloud Composer (Airflow).',
      'Built Llama and vector-embedding workflows, plus conversational Atlassian automation through Open WebUI.',
    ],
    tags: ['BigQuery', 'Airflow', 'GCS', 'Datadog', 'GenAI'],
  },
  {
    company: 'FIS Global',
    role: 'Lead Engineer — Development',
    period: 'Oct 2022 — Jul 2024',
    location: 'Chennai',
    summary: 'Led cloud data engineering for core banking systems, spanning batch orchestration, streaming ingestion, and database modernization.',
    highlights: [
      'Designed GCP data workflows using Cloud Composer, Pub/Sub, BigQuery, and GCS.',
      'Directed an Oracle-to-PostgreSQL migration with automated SQL conversion and end-to-end validation.',
    ],
    tags: ['GCP', 'Pub/Sub', 'PostgreSQL', 'ETL'],
  },
  {
    company: 'Deloitte',
    role: 'Senior Executive — Azure Data Engineer',
    period: 'Jan 2021 — Sep 2022',
    location: 'Gurugram',
    summary: 'Delivered Azure data platforms, APIs, and observability systems while guiding execution, governance, and production support.',
    highlights: [
      'Built end-to-end workflows with Databricks, Data Factory, Synapse Analytics, and T-SQL.',
      'Developed Java Spring Boot APIs and deployed a three-node ELK observability cluster.',
    ],
    tags: ['Azure', 'Databricks', 'ADF', 'Synapse', 'ELK'],
  },
  {
    company: 'Prodapt',
    role: 'Software Engineer — Big Data Analytics',
    period: 'Aug 2019 — Oct 2020',
    location: 'Chennai',
    summary: 'Built ingestion, transformation, reporting, and monitoring systems across the data and application stack.',
    highlights: [
      'Developed PySpark and Kafka pipelines with Grafana and Kibana monitoring.',
      'Created automated MySQL reporting and a Django–MongoDB application with role-based access.',
    ],
    tags: ['PySpark', 'Kafka', 'Django', 'MongoDB'],
  },
];

const projects = [
  {
    number: '01', icon: Database, label: 'Data platform modernization',
    title: 'Moving 50M+ daily records with confidence',
    copy: 'A production migration from Boomi to a modern data access layer, paired with Oracle-to-BigQuery automation, partitioned tables, cross-project queries, and secure parallel file processing.',
    tags: ['BigQuery', 'GCS', 'Oracle', 'Python'],
  },
  {
    number: '02', icon: Workflow, label: 'GenAI workflow automation',
    title: 'Turning documentation into action',
    copy: 'A conversational workflow connecting Atlassian APIs and Open WebUI to create and update Jira tickets from Confluence content—reducing repetitive coordination work.',
    tags: ['Llama', 'Open WebUI', 'Atlassian APIs', 'RAG'],
  },
  {
    number: '03', icon: Sparkles, label: 'PayPal AI Hackathon',
    title: 'A voice-first bill splitting assistant',
    copy: 'A FastAPI service using Whisper speech-to-text and retrieval-augmented generation with Qdrant to produce context-aware split suggestions.',
    tags: ['FastAPI', 'Whisper', 'Qdrant', 'RAG'],
  },
];

const skills = [
  { label: 'Languages', items: ['Python', 'SQL', 'Java'] },
  { label: 'Data engineering', items: ['Spark / PySpark', 'Kafka', 'Airflow', 'BigQuery', 'Pub/Sub'] },
  { label: 'Cloud', items: ['GCP', 'Azure', 'Databricks', 'Data Factory', 'Synapse'] },
  { label: 'Data stores', items: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Cassandra'] },
  { label: 'GenAI', items: ['Llama', 'RAG', 'Qdrant', 'Vertex AI', 'Whisper'] },
  { label: 'Observability', items: ['Datadog', 'Grafana', 'Kibana', 'ELK Stack'] },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Aastha Trivedi, home">AT<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a><a href="#work">Work</a><a href="#skills">Skills</a>
          <a className="nav-cta" href="mailto:aasthatrivedi1997@gmail.com">Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span className="status-dot" />Senior Data Engineer · Bengaluru, India</div>
        <h1>I build data systems that stay reliable at <em>real-world scale.</em></h1>
        <div className="hero-lower">
          <p>I&apos;m Aastha—a data engineer with 7+ years of experience building batch, streaming, and analytics platforms across financial services and enterprise environments.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="button button-quiet" href="Aastha_Trivedi_Resume.pdf" download><Download size={16} aria-hidden="true" /> Résumé</a>
          </div>
        </div>
        <div className="stats" aria-label="Career highlights">
          <div className="stat"><strong>7+</strong><span>Years in data engineering</span></div>
          <div className="stat"><strong>50M+</strong><span>Records processed daily</span></div>
          <div className="stat"><strong>2</strong><span>Cloud platforms</span></div>
          <div className="stat stat-stack"><span>Core stack</span><strong>Python · SQL · GCP · Azure</strong></div>
        </div>
      </section>

      <section className="section section-experience" id="experience">
        <div className="section-heading">
          <p className="kicker">01 / Experience</p><h2>From pipelines to platforms.</h2>
          <p>A career shaped by complex data, regulated environments, and the steady work of making critical systems more dependable.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="timeline-meta"><p>{item.period}</p><span>{item.location}, India</span></div>
              <div className="timeline-content">
                <p className="company">{item.company}</p><h3>{item.role}</h3><p className="role-summary">{item.summary}</p>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="tags" aria-label={`${item.company} technologies`}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-work" id="work">
        <div className="section-heading split-heading">
          <div><p className="kicker">02 / Selected work</p><h2>Systems with a reason to exist.</h2></div>
          <p>A few examples spanning platform modernization, operational AI, and human-centered experimentation.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.number}>
                <div className="project-topline"><span>{project.number}</span><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></div>
                <p className="project-label">{project.label}</p><h3>{project.title}</h3><p>{project.copy}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-skills" id="skills">
        <div className="section-heading"><p className="kicker">03 / Toolkit</p><h2>Deep in data. Broad across the stack.</h2></div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.label}><p>{group.label}</p><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>
          ))}
        </div>
        <div className="education-card">
          <div><p className="kicker">Education</p><h3>B.Tech, Information Technology</h3><p>Sri Sairam Engineering College · Anna University</p></div>
          <div className="education-result"><strong>8.74</strong><span>GPA · 16th rank, Anna University</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <p className="kicker">Have an interesting data problem?</p><h2>Let&apos;s build something dependable.</h2>
          <div className="contact-links">
            <a className="button button-light" href="mailto:aasthatrivedi1997@gmail.com"><Mail size={17} aria-hidden="true" /> Send an email</a>
            <a className="button button-outline-light" href="https://www.linkedin.com/in/aastha-trivedi-809b94126" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top" aria-label="Back to top">AT<span>.</span></a>
        <p>© {new Date().getFullYear()} Aastha Trivedi</p>
        <p className="footer-location"><MapPin size={14} aria-hidden="true" /> Bengaluru, India</p>
      </footer>
    </main>
  );
}
