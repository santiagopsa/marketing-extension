"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

type NavProps = {
  locale?: "en" | "es";
};

export default function Nav({ locale = "en" }: NavProps) {
  const pathname = usePathname();
  const pathIsEs = pathname === "/es" || pathname.startsWith("/es/");
  const isEs = locale === "es" || pathIsEs;
  const isHomePath = pathname === "/" || pathname === "/es";

  const switchHref = pathIsEs
    ? pathname.replace(/^\/es/, "") || "/"
    : pathname === "/"
      ? "/es"
      : `/es${pathname}`;
  const homePath = isEs ? "/es" : "/";
  const homeHref = isHomePath ? "#top" : homePath;
  const anchorHref = (id: "join" | "quote") =>
    isHomePath ? `#${id}` : `${homePath}#${id}`;
  const guideHref = anchorHref("join");
  const handleJoinClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePath) return;
    event.preventDefault();
    const joinSection = document.getElementById("join");
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = `${homePath}#join`;
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-firo-line bg-white/85 text-firo-text backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href={homeHref} className="inline-flex items-center" aria-label="Go to main page">
          <Image
            src="/assets/brand/firo-logo.png"
            alt="PeakU"
            width={150}
            height={45}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-firo-muted md:flex">
          <a href={guideHref} onClick={handleJoinClick} className="hover:text-firo-text">{isEs ? "Activa tu prueba" : "Activate trial"}</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            className="rounded-lg px-2 py-1 text-xs text-firo-muted hover:text-firo-text"
          >
            {isEs ? "EN" : "ES"}
          </a>
          <a
            href={guideHref}
            onClick={handleJoinClick}
            className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 md:px-4"
          >
            {isEs ? "Probar ahora" : "Try now"}
          </a>
        </div>
      </div>
    </div>
  );
}
