"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type VideoHeroProps = {
  locale?: "en" | "es";
};

export default function VideoHero({ locale = "en" }: VideoHeroProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-counter]",
        { innerText: 0 },
        {
          innerText: 1414,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: root.current!, start: "top 70%" },
        } as any
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100vh] overflow-hidden bg-firo-bg text-firo-text"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/firo-hero-poster.jpg"
      >
        <source src="/video/firo-hero.webm" type="video/webm" />
        <source src="/video/firo-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-firo-bg/95" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.9) 0, rgba(255,255,255,.9) 1px, transparent 2px, transparent 7px)",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs text-firo-muted">
              <a
                href="/"
                className={`rounded-md px-2 py-1 hover:text-firo-text ${
                  !isEs ? "bg-firo-blue/10 text-firo-text" : ""
                }`}
              >
                EN
              </a>
              <a
                href="/es"
                className={`rounded-md px-2 py-1 hover:text-firo-text ${
                  isEs ? "bg-firo-blue/10 text-firo-text" : ""
                }`}
              >
                ES
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-firo-muted border border-firo-line">
              <span className="h-2 w-2 rounded-full bg-firo-blue" />
              {isEs ? "Extensión de PeakU para LinkedIn" : "PeakU extension for LinkedIn"}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {isEs
                ? "Activa tu vacante y empieza a contactar talento relevante en LinkedIn, sin trabajo manual."
                : "Launch your opening and start contacting relevant LinkedIn talent without manual busywork."}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-firo-muted md:text-lg">
              {isEs
                ? "Carga requisitos y contexto de la vacante, selecciónala en la extensión y deja que PeakU encuentre perfiles, priorice por ajuste y redacte el primer mensaje."
                : "Add role requirements and context, select the opening in the extension, and let PeakU find profiles, rank fit, and draft your first outreach message."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95"
              >
                {isEs ? "Empieza tu prueba sin costo" : "Start your free trial"}
              </a>
            </div>

            <p className="mt-3 text-xs text-firo-muted">
              {isEs
                ? "Configúralo en minutos y acelera la prospección con candidatos de mejor ajuste."
                : "Get set up in minutes and speed up sourcing with better-fit candidates."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
