import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/portfolio';

const sectionLabels = {
  problem: 'Problem',
  research: 'Research',
  planning: 'Planning',
  architecture: 'Architecture',
  database: 'Database',
  ui: 'UI Screens',
  features: 'Features',
  roadmap: 'Future Roadmap',
  lessons: 'Lessons Learned',
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="grid min-h-screen place-items-center bg-paper px-5 text-zinc-950 dark:bg-ink dark:text-white">
        <div className="text-center">
          <h1 className="font-display text-4xl font-semibold">Product not found</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink">
            <ArrowLeft size={17} />
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper text-zinc-950 dark:bg-ink dark:text-white">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pb-24">
        <Link to="/#products" className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-white/15">
          <ArrowLeft size={16} />
          Back to Products
        </Link>
        <div className={`overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br ${product.accent} p-6 shadow-soft dark:border-white/10 sm:p-8`}>
          <div className="rounded-[1.5rem] bg-zinc-950/86 p-6 text-white backdrop-blur-xl sm:p-10">
            <p className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-200">{product.status}</p>
            <h1 className="font-display text-5xl font-semibold sm:text-7xl">{product.name}</h1>
            <p className="mt-4 text-xl text-mint">{product.tagline}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-200">{tech}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.live && (
                <a href={product.live} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
                  Live Website
                  <ArrowUpRight size={17} />
                </a>
              )}
              {product.github && (
                <a href={product.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white">
                  <Github size={17} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {product.images?.length > 0 && (
          <section className="mt-10 rounded-3xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-6">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Product Screens</p>
                <h2 className="mt-2 font-display text-3xl font-semibold">Interface highlights</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Selected screens showing the main workflows, responsive behavior, and operational UI.
              </p>
            </div>
            <div className="grid gap-5">
              {product.images.map((image, index) => (
                <figure key={image.src} className={index === product.images.length - 1 ? 'grid gap-4 overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-3 dark:border-white/10 dark:bg-zinc-950/60 sm:grid-cols-[0.45fr_0.55fr]' : 'overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-3 dark:border-white/10 dark:bg-zinc-950/60'}>
                  <img src={image.src} alt={`${product.name} - ${image.title}`} className="w-full rounded-xl border border-black/10 object-cover dark:border-white/10" loading="lazy" />
                  <figcaption className="p-3">
                    <h3 className="font-display text-xl font-semibold">{image.title}</h3>
                    <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-300">{image.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <h2 className="font-display text-2xl font-semibold">Role</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.role.map((role) => <span key={role} className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-white/10 dark:text-zinc-200">{role}</span>)}
            </div>
            <h2 className="mt-8 font-display text-2xl font-semibold">Highlights</h2>
            <ul className="mt-5 space-y-3 text-zinc-600 dark:text-zinc-300">
              {product.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
          <div className="grid gap-5">
            {Object.entries(product.sections).map(([key, text]) => (
              <section key={key} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <h2 className="font-display text-2xl font-semibold">{sectionLabels[key]}</h2>
                <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-300">{text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
