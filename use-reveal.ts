import { CheckCircle2, MapPin, Users, Store } from "lucide-react";
import sobreImg from "@/assets/sobre-riomar.jpg";
import { Reveal } from "./reveal";
import { empresa } from "@/lib/riomar";

const pontos = [
  {
    icon: Store,
    titulo: "Loja completa",
    texto:
      "Materiais para obra da fundação ao acabamento reunidos em um só endereço em Barretos.",
  },
  {
    icon: Users,
    titulo: "Equipe de vendedores",
    texto:
      "Vendedores dedicados com atendimento direto por WhatsApp, divulgados nos canais oficiais.",
  },
  {
    icon: MapPin,
    titulo: "Presença local",
    texto: `Loja física no bairro Bom Jesus, em ${empresa.cidade} — ${empresa.estado}.`,
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Sobre a empresa
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Sobre a RIOMAR CONSTRUÇÃO
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A RIOMAR CONSTRUÇÃO atua em Barretos, no interior de São Paulo, com o comércio de
            materiais de construção em geral. Na loja você encontra o que precisa para cada
            etapa da obra — do alicerce ao acabamento.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            O atendimento acontece na loja física, por telefone e por WhatsApp, com vendedores
            que acompanham o cliente na escolha dos materiais. As novidades e os trabalhos são
            publicados no Instagram oficial {empresa.instagramHandle}.
          </p>

          <ul className="mt-10 grid gap-4">
            {pontos.map((p) => (
              <li key={p.titulo} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <p.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-bold">{p.titulo}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {p.texto}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <img
              src={sobreImg}
              alt="Vendedor da Riomar Construção atendendo um cliente no balcão da loja em Barretos"
              width={1200}
              height={1408}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-semibold shadow-soft sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-xs">
              <CheckCircle2 className="size-5 shrink-0 text-primary" />
              <span>
                {empresa.endereco}, {empresa.cidade}/{empresa.estado}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
