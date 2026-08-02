import { useEffect, useState } from "react";
import { Instagram, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { empresa, navegacao, whatsappLink } from "@/lib/riomar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 py-2 backdrop-blur-xl shadow-soft"
          : "py-4",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-xl surface-deep font-display text-lg font-extrabold transition-all",
              scrolled && "size-9",
            )}
            aria-hidden="true"
          >
            R
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-extrabold tracking-tight sm:text-lg">
              RIOMAR
            </span>
            <span className="block truncate text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Construção
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={empresa.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Riomar Construção"
            className="ml-1 grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href={whatsappLink(empresa.whatsappPrincipal)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mt-3 rounded-2xl border border-border bg-card p-3 shadow-lift animate-in fade-in slide-in-from-top-2 sm:mx-6">
            <nav className="flex flex-col" aria-label="Navegação mobile">
              {navegacao.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 grid gap-2 border-t border-border pt-3">
              <a
                href={whatsappLink(empresa.whatsappPrincipal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                Fale conosco pelo WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={empresa.telefoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold"
                >
                  <Phone className="size-4" /> Ligar
                </a>
                <a
                  href={empresa.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
