import {
  Blocks,
  Droplets,
  Hammer,
  Layers,
  Lightbulb,
  PaintRoller,
  Truck,
  Zap,
} from "lucide-react";
import { Reveal } from "./reveal";
import { empresa, whatsappLink } from "@/lib/riomar";

/** Linhas de produtos e serviços divulgados nos canais oficiais da empresa. */
const servicos = [
  {
    icon: Blocks,
    nome: "Material básico de obra",
    texto: "Itens para a estrutura da construção, do alicerce ao levantamento da obra.",
  },
  {
    icon: Layers,
    nome: "Revestimentos cerâmicos",
    texto: "Pisos e revestimentos para acabamento de ambientes internos e externos.",
  },
  {
    icon: PaintRoller,
    nome: "Tintas",
    texto: "Linha de tintas para pintura de paredes, forros e áreas externas.",
  },
  {
    icon: Droplets,
    nome: "Material hidráulico",
    texto: "Tubos, conexões e componentes para as instalações hidráulicas da obra.",
  },
  {
    icon: Zap,
    nome: "Material elétrico",
    texto: "Itens para as instalações elétricas, da infraestrutura aos acabamentos.",
  },
  {
    icon: Hammer,
    nome: "Ferragens",
    texto: "Ferragens e itens complementares para o dia a dia da construção.",
  },
  {
    icon: Lightbulb,
    nome: "Iluminação",
    texto: "Soluções de iluminação para finalizar cada ambiente do projeto.",
  },
  {
    icon: Truck,
    nome: "Concreto 1000",
    texto: "Atendimento específico de concreto, com canal próprio de orçamento no WhatsApp.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            O que oferecemos
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Conheça nossos serviços
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Linhas de produtos disponíveis na loja, reunindo tudo o que a sua obra precisa em
            um único lugar.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s, i) => (
            <Reveal as="li" key={s.nome} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <a
            href={whatsappLink(
              empresa.whatsappPrincipal,
              "Olá, gostaria de um orçamento de materiais.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Pedir orçamento pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
