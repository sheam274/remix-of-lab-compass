import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/site";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import { CustomButton } from "@/components/common/CustomButton";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const { index, goTo, next, previous, setPaused } = useHeroSlider({
    length: heroSlides.length,
  });

  return (
    <section
      aria-label="Laboratory highlights"
      className="relative isolate overflow-hidden bg-brand-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[520px] sm:h-[560px]">
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            aria-hidden={slideIndex !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              slideIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <img
              src={slide.image}
              alt={slide.eyebrow}
              width={1600}
              height={900}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/75 to-brand-deep/25" />
          </div>
        ))}

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8">
            {heroSlides[index] && (
              <div key={heroSlides[index].id} className="max-w-xl animate-fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-foreground/80">
                  {heroSlides[index].eyebrow}
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-foreground sm:text-4xl lg:text-5xl">
                  {heroSlides[index].title}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-brand-foreground/85 sm:text-base">
                  {heroSlides[index].description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {heroSlides[index].primaryCta && (
                    <CustomButton to={heroSlides[index].primaryCta.to} className="bg-brand-foreground text-brand-deep hover:opacity-90">
                      {heroSlides[index].primaryCta.label}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </CustomButton>
                  )}
                  {heroSlides[index].secondaryCta && (
                    <CustomButton
                      to={heroSlides[index].secondaryCta.to}
                      variant="outline"
                      className="border-brand-foreground/50 text-brand-foreground hover:bg-brand-foreground/10"
                    >
                      {heroSlides[index].secondaryCta.label}
                    </CustomButton>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show slide ${slideIndex + 1}`}
                  aria-current={slideIndex === index}
                  onClick={() => goTo(slideIndex)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    slideIndex === index
                      ? "w-10 bg-brand-foreground"
                      : "w-4 bg-brand-foreground/40 hover:bg-brand-foreground/70",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous slide"
                className="rounded-md border border-brand-foreground/30 p-2 text-brand-foreground transition-colors hover:bg-brand-foreground/15"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="rounded-md border border-brand-foreground/30 p-2 text-brand-foreground transition-colors hover:bg-brand-foreground/15"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
