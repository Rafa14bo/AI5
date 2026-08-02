import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "./reveal";
import revestimentos from "@/assets/g-revestimentos.jpg";
import concreto from "@/assets/g-concreto.jpg";
import tintas from "@/assets/g-tintas.jpg";
import hidraulica from "@/assets/g-hidraulica.jpg";
import loja from "@/assets/hero-riomar.jpg";
import balcao from "@/assets/sobre-riomar.jpg";

/**
 * Imagens ilustrativas das linhas de produtos.
 * Para publicar fotos reais da loja e das obras, basta substituir os arquivos
 * em src/assets ou trocar o campo `src` de cada item abaixo.
 */
const itens = [
  { src: loja, titulo: "Nossa loja", alt: "Corredor da loja de materiais de construção da Riomar" },
  { src: revestimentos, titulo: "Revestimentos", alt: "Amostras de revestimentos cerâmicos empilhadas" },
  { src: tintas, titulo: "Tintas", alt: "Prateleiras com latas de tinta e leque de cores" },
  { src: concreto, titulo: "Concreto", alt: "Caminhão betoneira entregando concreto em uma obra" },
  { src: hidraulica, titulo: "Hidráulica e elétrica", alt: "Tubos e conexões hidráulicas organizados" },
  { src: balcao, titulo: "Atendimento", alt: "Atendimento ao cliente no balcão da loja" },
];

export function Projetos() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + itens.length) % itens.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % itens.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const atual = index === null ? null : itens[index];

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Nossos trabalhos
        </p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Conheça nossos projetos
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Um panorama das linhas de materiais que atendem cada fase da obra. Clique em uma
          imagem para ampliar.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((item, i) => (
          <Reveal as="li" key={item.titulo} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-lift"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.19_0.06_254/0.85),transparent_55%)]" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                <span className="font-display text-base font-bold text-deep-foreground">
                  {item.titulo}
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/25 bg-white/10 text-deep-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="size-4" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      {atual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={atual.titulo}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[oklch(0.15_0.04_254/0.92)] p-4 backdrop-blur-sm animate-in fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-deep-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid size-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-deep-foreground sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={atual.src}
              alt={atual.alt}
              className="max-h-[75svh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm font-semibold text-deep-foreground">
              {atual.titulo}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid size-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-deep-foreground sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </section>
  );
}
