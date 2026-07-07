import { useEffect, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, Copy, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroGraphic from './components/HeroGraphic';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Section from './components/Section';
import { aiWorkflow, badges, buildProcess, credentials, experience, products, profile, skillGroups } from './data/portfolio';
import { applyTheme, getInitialTheme } from './utils/theme';

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [solidNav, setSolidNav] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
  };

  return (
    <div className="min-h-screen bg-paper text-zinc-950 antialiased dark:bg-ink dark:text-white">
      <Navbar theme={theme} solid={solidNav} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
              <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-300">
                Modern SaaS products, built with product thinking
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] text-zinc-950 dark:text-white sm:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 text-xl font-medium text-mint sm:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                I design and build modern SaaS products by combining product thinking, scalable architecture, intuitive user experiences, and AI-assisted software development.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.resume} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-ink dark:hover:bg-zinc-200">
                  <Download size={17} />
                  Download Resume
                </a>
                <a href="#products" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
                  View Products
                  <ArrowRight size={17} />
                </a>
                <a href={profile.github} className="icon-link" aria-label="GitHub"><Github size={19} /></a>
                <a href={profile.linkedin} className="icon-link" aria-label="LinkedIn"><Linkedin size={19} /></a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
            <HeroGraphic />
          </div>
        </section>

        <Section id="products" eyebrow="Featured Products" title="Product work shaped around real business problems." description="Each project is framed around a problem, workflow, architecture, user experience, and product direction. The goal is to show how I think, not only what technologies I used.">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </Section>

        <Section id="about" eyebrow="About" title="I build from the workflow backward." description="I am a full stack product engineer with 3.5 years of experience across development, QA, enterprise systems, and product-focused software. My background helps me think beyond screens: business logic, reliability, workflows, architecture, and the details that make software useful in real operations.">
          <div className="grid gap-4 md:grid-cols-3">
            {['Development + QA background', 'Modern SaaS and business workflow design', 'System architecture with AI-assisted development'].map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Enterprise engineering experience with product instincts.">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-mint dark:bg-white/10"><experience.icon size={23} /></span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{experience.company}</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">{experience.title}</p>
                </div>
              </div>
              <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-300">{experience.period}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {experience.work.map((item) => (
                <span key={item} className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-white/10 dark:text-zinc-200">{item}</span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Capabilities" title="A practical stack for product engineering.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-950 text-mint dark:bg-white/10"><Icon size={20} /></span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => <span key={item} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-white/10 dark:text-zinc-300">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" eyebrow="Product Philosophy" title="How I Build Products">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {buildProcess.map(([step, text], index) => (
              <div key={step} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <span className="text-sm font-semibold text-coral">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="ai" eyebrow="AI Workflow" title="How I Use AI" description="AI assists my development process. It helps me move faster through analysis, planning, prototyping, implementation, debugging, review, optimization, and documentation while engineering judgment stays in the driver seat.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {aiWorkflow.map(([step, Icon]) => (
              <div key={step} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <Icon className="text-mint" size={24} />
                <p className="mt-4 font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl leading-8 text-zinc-600 dark:text-zinc-300">
            Tools I use include OpenAI Codex, ChatGPT, Claude, modern AI IDEs, and prompt engineering workflows for better speed, structure, and quality.
          </p>
        </Section>

        <Section id="resume" eyebrow="Resume" title="Resume snapshot">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold">{profile.name}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{profile.title}</p>
                <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">Full stack product engineer with enterprise experience, QA thinking, SaaS product building, and AI-assisted delivery workflows.</p>
              </div>
              <a href={profile.resume} className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-ink dark:hover:bg-zinc-200">
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic foundation and certifications.">
          <div className="grid gap-4 md:grid-cols-3">
            {credentials.map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <p className="text-sm font-semibold text-coral">{item.year}</p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Open to remote opportunities and product-focused engineering roles.">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
              { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
              { icon: Github, label: 'GitHub', value: 'View GitHub', href: profile.github },
              { icon: MapPin, label: 'Location', value: profile.location },
              { icon: BriefcaseBusiness, label: 'Availability', value: 'Open to Remote Opportunities' },
            ].map(({ icon: Icon, label, value, href }) => {
              const Card = href ? 'a' : 'div';
              return (
                <Card key={label} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-zinc-950 text-mint dark:bg-white/10"><Icon size={20} /></span>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-ink dark:hover:bg-zinc-200">
              <Copy size={17} />
              Copy Email
            </button>
            <a href={profile.meeting} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
              Schedule Meeting
            </a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built with React & Tailwind</p>
          <p>Designed and Developed by {profile.name}</p>
          <p>Copyright {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

