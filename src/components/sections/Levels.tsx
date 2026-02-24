"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Job Setup",
    earns: "Add vacancy requirements and role context",
    does: "Skills, seniority, must-haves, and priorities",
  },
  {
    level: "Step 2",
    title: "Run Search",
    earns: "Select the vacancy in the extension",
    does: "PeakU starts scanning LinkedIn profiles",
  },
  {
    level: "Step 3",
    title: "Candidate Match",
    earns: "Relevant candidates are matched to your criteria",
    does: "Each profile gets a clear fit comparison",
  },
  {
    level: "Step 4",
    title: "Automated Outreach",
    earns: "Extension drafts personalized first messages",
    does: "You review, send, and start conversations faster",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Configura la vacante",
    earns: "Carga requisitos y contexto del rol",
    does: "Habilidades, seniority, requisitos obligatorios y prioridades",
  },
  {
    level: "Paso 2",
    title: "Ejecuta la búsqueda",
    earns: "Selecciona la vacante en la extensión",
    does: "PeakU empieza a analizar perfiles en LinkedIn",
  },
  {
    level: "Paso 3",
    title: "Prioriza candidatos",
    earns: "Los perfiles se comparan con tus condiciones",
    does: "Cada candidato muestra su nivel de ajuste",
  },
  {
    level: "Paso 4",
    title: "Inicia contacto",
    earns: "La extensión redacta mensajes personalizados",
    does: "Revisas, envías y comienzas conversaciones más rápido",
  },
];

type LevelsProps = {
  locale?: "en" | "es";
};

export default function Levels({ locale = "en" }: LevelsProps) {
  const isEs = locale === "es";
  const levelItems = isEs ? levelsEs : levels;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-level]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="levels" className="bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs
                ? "Un flujo completo para pasar de vacante a conversación en minutos."
                : "A complete flow from job setup to first outreach in minutes."}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "PeakU te ayuda a automatizar la búsqueda inicial y a priorizar candidatos con mejor ajuste para cada vacante."
                : "PeakU helps automate early sourcing and prioritize better-fit candidates for each opening."}
            </p>
            {isEs ? (
              <p className="mt-3 text-firo-muted">
                Así reduces trabajo manual y avanzas más rápido en procesos de contratación.
              </p>
            ) : null}
          </div>

          <div className="grid gap-4">
            {levelItems.map((l) => (
              <div
                key={l.level}
                data-level
                className="group rounded-3xl border border-firo-line bg-firo-bg p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-firo-muted">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-firo-blue opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label={isEs ? "Qué ocurre" : "What happens"} value={l.earns} />
                  <Stat label={isEs ? "Impacto" : "Impact"} value={l.does} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-white p-4">
      <div className="text-xs font-semibold text-firo-muted">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
