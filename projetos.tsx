import { Instagram, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { empresa } from "@/lib/riomar";
import revestimentos from "@/assets/g-revestimentos.jpg";
import concreto from "@/assets/g-concreto.jpg";
import tintas from "@/assets/g-tintas.jpg";
import hidraulica from "@/assets/g-hidraulica.jpg";

/**
 * Área preparada para as publicações do Instagram oficial.
 * As imagens abaixo são ilustrativas e podem ser trocadas manualmente pelas
 * fotos publicadas em @riomarbarretos (a API do Instagram exige autenticação).
 */
const posts = [
  { src: revestimentos, alt: "Revestimentos disponíveis na loja" },
  { src: tintas, alt: "Linha de tintas disponível na loja" },
  { src: concreto, alt: "Entrega de concreto em obra" },
  { src: hidraulica, alt: "Materiais hidráulicos e elétricos" },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Instagram
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Acompanhe a Riomar
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Veja nossos trabalhos e acompanhe nossas novidades no Instagram.
            </p>
            <a
              href={empresa.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Instagram className="size-4" /> Visitar Instagram
              <ArrowUpRight className="size-4" />
            </a>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              {empresa.instagramHandle}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-4">
              {posts.map((post, i) => (
                <li key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <a href={empresa.instagram} target="_blank" rel="noopener noreferrer">
                    <img
                      src={post.src}
                      alt={post.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
