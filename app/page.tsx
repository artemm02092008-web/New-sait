import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import { getClinicContent } from "@/lib/clinic";

// Страница полностью статическая (SSG): контент из JSON «вшивается» в HTML на этапе сборки.
export const ensureStatic = "navigation";

export default function Home() {
  const { clinic, hero, stats, about, reviews, faq } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* ХЕДЕР */}
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
        <Link href="/" className="group flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors group-hover:text-[#75C043]">
            {clinic.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#5A5A5A]">
            {clinic.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#1A1A1A] lg:flex">
          {clinic.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#75C043]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden flex-col items-end md:flex">
            <a
              href={clinic.phoneHref}
              className="text-sm font-bold transition-colors hover:text-[#75C043]"
            >
              {clinic.phone}
            </a>
            <span className="text-[10px] text-[#5A5A5A]">{clinic.hours}</span>
          </div>
          <a
            href="#contacts"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#75C043] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#65a83a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2 active:translate-y-0 active:bg-[#5a9634]"
          >
            {hero.primaryCta}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pb-12 lg:px-12">
        <div className="relative flex flex-col overflow-hidden rounded-[32px] bg-[#EEF2E6] lg:flex-row">
          <div className="z-10 flex flex-col justify-center p-8 lg:w-1/2 lg:p-16">
            <span className="mb-6 block text-[10px] uppercase tracking-widest text-[#5A5A5A]">
              {hero.eyebrow}
            </span>

            <h1 className="mb-8 text-5xl font-bold leading-[1.1] text-[#1A1A1A] lg:text-7xl">
              {hero.titleLines[0]}
              <br />
              {hero.titleLines[1]}
              <br />
              {hero.titleLines[2]}
            </h1>

            <p className="mb-10 max-w-md text-lg leading-relaxed text-[#5A5A5A]">
              {hero.lead}
            </p>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="#contacts"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#75C043] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#65a83a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2 active:translate-y-0 active:bg-[#5a9634]"
              >
                {hero.primaryCta}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#approach"
                className="border-b border-[#1A1A1A] pb-1 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#75C043] hover:text-[#75C043] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative min-h-[400px] lg:min-h-[600px] lg:w-1/2">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-xl backdrop-blur-sm lg:left-auto lg:right-8 lg:w-80">
              <Heart
                className="h-5 w-5 shrink-0 text-[#75C043]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-[#1A1A1A]">
                {hero.imageNote}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* СТАТИСТИКА */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-12 mb-12 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-[#5A5A5A]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* О КЛИНИКЕ */}
      <AboutSection data={about} />

      {/* ОТЗЫВЫ */}
      <ReviewsSection data={reviews} />

      {/* ЧАСТЫЕ ВОПРОСЫ */}
      <FaqSection data={faq} />
    </main>
  );
}
