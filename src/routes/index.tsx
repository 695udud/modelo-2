import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Menu, X, MessageCircle, Scale } from "lucide-react";
import { site, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seo.title },
      { name: "description", content: site.seo.description },
      { property: "og:title", content: site.seo.title },
      { property: "og:description", content: site.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#contato", label: "Contato" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo() {
  if (site.logo) return <img src={site.logo} alt={site.officeName} className="h-10 w-auto" />;
  return (
    <span className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-wide">
      <Scale className="h-5 w-5 text-gold" />
      {site.officeName}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-primary-foreground transition-all ${scrolled || open ? "bg-navy/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#inicio"><Logo /></a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm tracking-wide opacity-80 transition hover:text-gold hover:opacity-100">{n.label}</a>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border border-gold px-5 py-2 text-sm text-gold transition hover:bg-gold hover:text-navy">Fale conosco</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold/20 px-6 pb-6 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-lg">{n.label}</a>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2 bg-gold py-3 text-center font-medium text-navy">Fale conosco</a>
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="reveal mb-14 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className={`font-serif text-4xl font-semibold md:text-5xl ${light ? "text-primary-foreground" : "text-navy"}`}>{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-gold" />
    </div>
  );
}

function Index() {
  useReveal();
  const brand = { "--brand-primary": site.colors.primary, "--brand-secondary": site.colors.secondary } as CSSProperties;
  const oab = `OAB/${site.oab.state} ${site.oab.number}`;

  return (
    <div style={brand}>
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-navy text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--brand-secondary)_18%,transparent),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-center md:text-left">
          <p className="animate-rise mb-6 text-xs uppercase tracking-[0.35em] text-gold">{site.specialty}</p>
          <h1 className="animate-rise font-serif text-5xl font-semibold leading-tight md:text-7xl" style={{ animationDelay: ".1s" }}>{site.lawyerName}</h1>
          <p className="animate-rise mt-3 text-sm tracking-widest opacity-60" style={{ animationDelay: ".2s" }}>{oab}</p>
          <p className="animate-rise mx-auto mt-8 max-w-xl font-serif text-2xl italic opacity-90 md:mx-0" style={{ animationDelay: ".3s" }}>{site.tagline}</p>
          <div className="animate-rise mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start" style={{ animationDelay: ".4s" }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold px-8 py-4 font-medium text-navy transition hover:brightness-110">Agendar atendimento</a>
            <a href="#atuacao" className="border border-primary-foreground/30 px-8 py-4 transition hover:border-gold hover:text-gold">Áreas de atuação</a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -left-4 h-full w-full border border-gold" />
            <img src={site.photo} alt={site.lawyerName} width={896} height={1152} loading="lazy" className="relative aspect-[4/5] w-full object-cover" />
          </div>
          <div className="reveal">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Sobre</p>
            <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">{site.lawyerName}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{oab}</p>
            <div className="my-6 h-px w-16 bg-gold" />
            {site.about.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="atuacao" className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Especialidades" title="Áreas de atuação" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.practiceAreas.map((a, i) => (
              <div key={a.title} className="reveal group border-t-2 border-gold bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="font-serif text-3xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-navy py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Contato" title="Fale com o escritório" light />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, label: "Telefone", value: site.phone, href: `tel:${site.phone.replace(/\D/g, "")}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Enviar mensagem", href: whatsappLink },
              { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
              { icon: MapPin, label: "Endereço", value: `${site.address} — ${site.city}/${site.state}` },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="reveal border border-primary-foreground/10 p-6 text-center">
                <Icon className="mx-auto h-6 w-6 text-gold" />
                <p className="mt-4 text-xs uppercase tracking-widest opacity-60">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-2 block break-words transition hover:text-gold">{value}</a>
                ) : (
                  <p className="mt-2">{value}</p>
                )}
              </div>
            ))}
          </div>
          <p className="reveal mt-10 flex items-center justify-center gap-2 text-sm opacity-70"><Clock className="h-4 w-4 text-gold" />{site.hours}</p>
        </div>
      </section>

      <footer className="border-t border-gold/20 bg-navy py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-xs opacity-70 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.officeName} · {site.lawyerName} · {oab}</p>
          <div className="flex gap-4">
            {site.instagram && <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5" /></a>}
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold"><Linkedin className="h-5 w-5" /></a>}
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-xl transition hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
