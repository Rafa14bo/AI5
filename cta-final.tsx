import { Instagram, LinkIcon, MapPin, MessageCircle, Phone } from "lucide-react";
import { empresa, navegacao, whatsappLink } from "@/lib/riomar";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid size-11 shrink-0 place-items-center rounded-xl surface-deep font-display text-lg font-extrabold"
              aria-hidden="true"
            >
              R
            </span>
            <span>
              <span className="block font-display text-lg font-extrabold">RIOMAR</span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Construção
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Loja de materiais de construção em Barretos — SP. Tudo para sua obra, do alicerce ao
            acabamento.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider">Navegação</h2>
          <ul className="mt-4 grid gap-2.5">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider">Contato</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>
                {empresa.endereco}
                <br />
                {empresa.cidade} — {empresa.estado}, CEP {empresa.cep}
              </span>
            </li>
            <li>
              <a href={empresa.telefoneHref} className="flex gap-3 transition-colors hover:text-primary">
                <Phone className="size-4 shrink-0 text-primary" /> {empresa.telefone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(empresa.whatsappPrincipal)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4 shrink-0 text-primary" /> WhatsApp (17) 99142-1656
              </a>
            </li>
            <li>
              <a
                href={empresa.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-primary"
              >
                <Instagram className="size-4 shrink-0 text-primary" /> {empresa.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={empresa.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-primary"
              >
                <LinkIcon className="size-4 shrink-0 text-primary" /> Todos os contatos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2026 RIOMAR CONSTRUÇÃO. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
