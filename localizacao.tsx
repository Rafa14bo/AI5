import { Award, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

const itens = [
  {
    icon: HeartHandshake,
    titulo: "Atendimento próximo",
    texto: "Vendedores identificados e disponíveis por WhatsApp para falar direto com você.",
  },
  {
    icon: ShieldCheck,
    titulo: "Qualidade",
    texto: "Produtos de qualidade para cada etapa da construção ou reforma.",
  },
  {
    icon: Award,
    titulo: "Variedade",
    texto: "Linha completa de materiais, do alicerce ao acabamento, na mesma loja.",
  },
  {
    icon: Clock,
    titulo: "Praticidade",
    texto: "Orçamento rápido por WhatsApp, telefone ou presencialmente na loja.",
  },
];

export function Diferenciais() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="surface-deep relative overflow-hidden rounded-3xl px-6 py-14 shadow-lift sm:px-12 lg:py-20">
        <div
          className="bg-blueprint pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-deep-foreground/60">
            Por que a Riomar
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-deep-foreground sm:text-4xl">
            Nossos diferenciais
          </h2>
        </Reveal>

        <ul className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((item, i) => (
            <Reveal as="li" key={item.titulo} delay={i * 80}>
              <span className="grid size-12 place-items-center rounded-xl border border-white/15 bg-white/10 text-deep-foreground">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-deep-foreground">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-deep-foreground/70">{item.texto}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
