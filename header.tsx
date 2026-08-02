import { useState, type FormEvent } from "react";
import { CheckCircle2, Instagram, Loader2, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { empresa, vendedores, whatsappLink } from "@/lib/riomar";

type Erros = Partial<Record<"nome" | "telefone" | "email" | "assunto" | "mensagem", string>>;
type Estado = "idle" | "loading" | "success" | "error";

const emailValido = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function Contato() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [erros, setErros] = useState<Erros>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const telefone = String(data.get("telefone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const assunto = String(data.get("assunto") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    const novos: Erros = {};
    if (nome.length < 2) novos.nome = "Informe seu nome.";
    if (telefone.replace(/\D/g, "").length < 10) novos.telefone = "Informe um telefone válido com DDD.";
    if (email && !emailValido(email)) novos.email = "Informe um e-mail válido.";
    if (assunto.length < 2) novos.assunto = "Informe o assunto.";
    if (mensagem.length < 10) novos.mensagem = "Descreva sua necessidade com pelo menos 10 caracteres.";

    setErros(novos);
    if (Object.keys(novos).length > 0) {
      setEstado("error");
      return;
    }

    setEstado("loading");
    try {
      const texto = [
        `Olá, sou ${nome}.`,
        `Assunto: ${assunto}`,
        mensagem,
        `Telefone: ${telefone}`,
        email ? `E-mail: ${email}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      // O envio acontece pelo WhatsApp oficial. Para gravar as mensagens em um
      // banco de dados ou enviá-las por e-mail, conecte um backend aqui.
      window.open(whatsappLink(empresa.whatsappPrincipal, texto), "_blank", "noopener");
      setEstado("success");
      form.reset();
    } catch {
      setEstado("error");
    }
  }

  const campo =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contato" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Contato</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Entre em contato
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Fale com um de nossos vendedores pelo WhatsApp ou envie sua mensagem pelo
            formulário.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="grid content-start gap-4">
            <a
              href={whatsappLink(empresa.whatsappPrincipal)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
                <MessageCircle className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-base font-bold">WhatsApp</span>
                <span className="block truncate text-sm text-muted-foreground">
                  (17) 99142-1656 — canal principal
                </span>
              </span>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={empresa.telefoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <Phone className="size-5 shrink-0 text-primary" />
                <span className="min-w-0 text-sm font-semibold">{empresa.telefone}</span>
              </a>
              <a
                href={empresa.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <Instagram className="size-5 shrink-0 text-primary" />
                <span className="min-w-0 truncate text-sm font-semibold">
                  {empresa.instagramHandle}
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-bold">Fale com um vendedor</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Contatos divulgados nos canais oficiais da empresa.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {vendedores.map((v) => (
                  <li key={v.numero}>
                    <a
                      href={whatsappLink(v.numero)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                      <MessageCircle className="size-4" /> {v.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="text-sm font-semibold">
                    Nome
                  </label>
                  <input id="nome" name="nome" className={`mt-2 ${campo}`} placeholder="Seu nome" />
                  {erros.nome && <p className="mt-1.5 text-xs text-destructive">{erros.nome}</p>}
                </div>
                <div>
                  <label htmlFor="telefone" className="text-sm font-semibold">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    inputMode="tel"
                    className={`mt-2 ${campo}`}
                    placeholder="(17) 90000-0000"
                  />
                  {erros.telefone && (
                    <p className="mt-1.5 text-xs text-destructive">{erros.telefone}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    E-mail <span className="font-normal text-muted-foreground">(opcional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`mt-2 ${campo}`}
                    placeholder="voce@email.com"
                  />
                  {erros.email && <p className="mt-1.5 text-xs text-destructive">{erros.email}</p>}
                </div>
                <div>
                  <label htmlFor="assunto" className="text-sm font-semibold">
                    Assunto
                  </label>
                  <input
                    id="assunto"
                    name="assunto"
                    className={`mt-2 ${campo}`}
                    placeholder="Orçamento de materiais"
                  />
                  {erros.assunto && (
                    <p className="mt-1.5 text-xs text-destructive">{erros.assunto}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="mensagem" className="text-sm font-semibold">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className={`mt-2 resize-y ${campo}`}
                  placeholder="Conte o que você precisa para sua obra."
                />
                {erros.mensagem && (
                  <p className="mt-1.5 text-xs text-destructive">{erros.mensagem}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={estado === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {estado === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Enviando…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Enviar mensagem
                  </>
                )}
              </button>

              {estado === "success" && (
                <p className="mt-4 flex items-center gap-2 rounded-xl bg-whatsapp/10 px-4 py-3 text-sm font-semibold text-whatsapp">
                  <CheckCircle2 className="size-4" /> Mensagem preparada no WhatsApp. Confirme o
                  envio na conversa aberta.
                </p>
              )}
              {estado === "error" && Object.keys(erros).length > 0 && (
                <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
                  Verifique os campos destacados e tente novamente.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
