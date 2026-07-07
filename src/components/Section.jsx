import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto max-w-6xl px-5"
      >
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-mint">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl font-semibold text-zinc-950 dark:text-white sm:text-5xl">{title}</h2>}
            {description && <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
