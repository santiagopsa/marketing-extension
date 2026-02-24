import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="rewards" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "PeakU convierte vacantes en conversaciones con candidatos relevantes" : "PeakU turns openings into conversations with relevant candidates"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Con la información de tu vacante, la extensión encuentra perfiles alineados en LinkedIn, compara su ajuste y redacta mensajes para que inicies contacto más rápido."
                : "Using your job requirements, the extension finds aligned LinkedIn profiles, compares fit, and drafts messages so you can start outreach faster."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot value={isEs ? "Más candidatos relevantes" : "More relevant candidates"} />
              <Loot value={isEs ? "Mejor priorización" : "Better prioritization"} />
              <Loot value={isEs ? "Contacto más rápido" : "Faster outreach"} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-firo-blue/15 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt={isEs ? "Panel de la extensión de PeakU" : "PeakU extension dashboard"}
              width={1400}
              height={900}
              className="relative w-full rounded-3xl shadow-soft"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ value }: { value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
