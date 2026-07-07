import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
      <div className={`h-52 bg-gradient-to-br ${product.accent} p-5`}>
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/35 bg-zinc-950/80 p-5 text-white shadow-line backdrop-blur-xl">
          {product.coverImage && (
            <img
              src={product.coverImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/25" />
          <div className="relative flex items-center justify-between">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">{product.status}</span>
            <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
          </div>
          <div className="relative">
            <h3 className="font-display text-3xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-sm text-zinc-300">{product.tagline}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="leading-7 text-zinc-600 dark:text-zinc-300">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/products/${product.slug}`} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-ink dark:hover:bg-zinc-200">
            Learn More
            <ArrowUpRight size={15} />
          </Link>
          {product.github && (
            <a href={product.github} className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-black/5 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10">
              <Github size={15} />
              GitHub
            </a>
          )}
          {product.live && (
            <a href={product.live} className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-black/5 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
