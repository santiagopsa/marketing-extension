"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="lore" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="max-w-3xl">
          {isEs ? (
            <>
              <div data-reveal className="text-sm font-semibold uppercase tracking-wide text-firo-blue">
                CÓMO FUNCIONA
              </div>
              <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                La extensión ejecuta tu búsqueda de candidatos en cuatro pasos:
              </h2>

              <ul data-reveal className="mt-8 space-y-3 text-firo-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-firo-blue">✓</span>
                  <span>Cargas la información de la vacante: requisitos, experiencia y contexto del rol.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-firo-blue">✓</span>
                  <span>Seleccionas en la extensión la vacante que quieres correr.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-firo-blue">✓</span>
                  <span>PeakU recorre LinkedIn y detecta los perfiles más relevantes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-firo-blue">✓</span>
                  <span>Compara cada candidato contra tus condiciones y calcula nivel de ajuste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-firo-blue">✓</span>
                  <span>Redacta mensajes personalizados para iniciar la conversación automáticamente.</span>
                </li>
              </ul>

              <div data-reveal className="mt-10 rounded-2xl border border-firo-line bg-white p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  Diseñada para prospección en LinkedIn
                </h3>
                <p className="mt-4 text-firo-muted">Incluye:</p>
                <ul className="mt-3 space-y-2 text-firo-muted">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-firo-blue">✓</span>
                    <span>Búsqueda basada en requisitos reales de la vacante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-firo-blue">✓</span>
                    <span>Ranking por relevancia para priorizar el contacto inicial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-firo-blue">✓</span>
                    <span>Mensajes automáticos que puedes revisar y enviar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-firo-blue">✓</span>
                    <span>Flujo rápido para lanzar nuevas vacantes sin fricción.</span>
                  </li>
                </ul>
              </div>

              <div data-reveal className="mt-10 rounded-2xl border border-firo-line bg-white p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-firo-blue">
                  RESULTADO
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Menos tiempo buscando, más tiempo hablando con talento relevante
                </h3>
                <p className="mt-4 text-firo-muted">
                  En lugar de revisar perfiles manualmente uno por uno, la extensión acelera la primera
                  etapa de prospección y te entrega candidatos priorizados por ajuste.
                </p>
                <p className="mt-3 text-firo-muted">
                  Así puedes abrir conversaciones antes, cubrir vacantes más rápido y mantener un flujo
                  constante de candidatos alineados con la necesidad del rol.
                </p>
                <p className="mt-3 text-firo-muted">
                  Todo desde LinkedIn, con tu proceso actual, y sin costo para empezar a probar.
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 data-reveal className="text-3xl font-semibold tracking-tight md:text-4xl">
                How the PeakU extension works
              </h2>
              <p data-reveal className="mt-4 text-firo-muted">
                You upload job details and requirements, select the opening in the extension, and let PeakU do the heavy lifting in LinkedIn.
              </p>
              <p data-reveal className="mt-3 text-firo-muted">
                It finds relevant profiles, measures fit against your criteria, and drafts personalized first messages.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Card desc="Run searches from real role requirements, not generic filters." />
                <Card desc="Prioritize candidates with an objective fit comparison." />
                <Card desc="Start outreach faster with auto-generated opening messages." />
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

function Card({ desc }: { desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
