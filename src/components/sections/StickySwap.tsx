"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Role-based search", desc: "Candidates are discovered from your vacancy requirements, not from manual trial and error." },
  { title: "Fit-first prioritization", desc: "Profiles are ranked by how closely they match required skills and context." },
  { title: "Faster first contact", desc: "The extension drafts personalized outreach messages to start conversations sooner." },
  { title: "Less repetitive work", desc: "Reduce manual profile scanning and spend time with high-potential candidates." },
];
const cardsEs = [
  { title: "Búsqueda guiada por vacante", desc: "Los candidatos se encuentran con base en requisitos reales, no con filtros genéricos." },
  { title: "Priorización por ajuste", desc: "Cada perfil se ordena según qué tanto cumple condiciones clave del rol." },
  { title: "Primer contacto más rápido", desc: "La extensión redacta mensajes personalizados para iniciar conversaciones antes." },
  { title: "Menos trabajo repetitivo", desc: "Disminuye el tiempo de revisión manual y enfócate en talento con mayor potencial." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que cambia cuando usas la extensión de PeakU" : "What changes when you use the PeakU extension"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "El objetivo es claro: llenar tu pipeline más rápido con candidatos relevantes y listos para conversar."
                : "The goal is clear: fill your pipeline faster with relevant candidates ready to engage."}
            </p>
          </div>

          <div className="grid gap-4">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft"
              >
                <div className="text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
