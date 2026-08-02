import { MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { empresa } from "@/lib/riomar";

export function Localizacao() {
  const { lat, lng } = empresa.coords;
  const embed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <section id="localizacao" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Localização
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Visite-nos</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nossa loja fica no bairro Bom Jesus, em Barretos — São Paulo.
          </p>

          <address className="mt-8 grid gap-4 not-italic">
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <MapPin className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold leading-relaxed">
                {empresa.endereco}
                <br />
                {empresa.cidade} — {empresa.estado}, CEP {empresa.cep}
              </span>
            </div>
            <a
              href={empresa.telefoneHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <Phone className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold">{empresa.telefone}</span>
            </a>
          </address>

          <a
            href={empresa.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Navigation className="size-4" /> Como chegar
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-[380px] overflow-hidden rounded-3xl border border-border shadow-lift sm:h-[460px] lg:h-full">
            <iframe
              title="Mapa com a localização da RIOMAR CONSTRUÇÃO em Barretos - SP"
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
