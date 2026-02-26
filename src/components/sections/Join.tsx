"use client";

import Container from "../ui/Container";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  const handleSubmit = () => {
    if (typeof window === "undefined") return;
    const gtag = window.gtag;
    if (typeof gtag !== "function") return;

    gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: "join_form_submit",
      value: 1,
    });

    if (adsConversionLabel) {
      gtag("event", "conversion", {
        send_to: `AW-837109052/${adsConversionLabel}`,
      });
    }
  };

  return (
    <section id="join" className="bg-firo-bg py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Activa tu prueba sin costo de la extensión de PeakU"
                  : "Activate your free PeakU extension trial"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Déjanos tu nombre y WhatsApp para activar tu prueba. Te contactamos para acompañarte en la configuración de tu primera vacante."
                  : "Share your name and WhatsApp to activate your trial. We will contact you to guide your first opening setup."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/luisa@peaku.co"
                method="POST"
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="PeakU Prueba sin costo extensión LinkedIn" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="santiago@peaku.co" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="whatsapp">
                    {isEs ? "Número de WhatsApp" : "WhatsApp number"}
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "+57 300 000 0000" : "+1 (555) 000-0000"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  {isEs ? "👉 Quiero activar mi prueba sin costo" : "👉 Activate my free trial"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Solo usamos tu contacto para activar tu prueba y acompañar tu configuración inicial. Sin spam."
              : "No spam. We only use your WhatsApp to activate your trial and support your initial setup."}
          </div>
        </div>
      </Container>
    </section>
  );
}
