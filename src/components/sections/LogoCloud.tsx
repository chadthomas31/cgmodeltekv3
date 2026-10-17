import Image from "next/image";

export function LogoCloud({ logos = [] as { src: string; alt: string }[] }) {
  const demo = logos.length
    ? logos
    : [
        { src: "/logos/demo1.svg", alt: "Demo Co" },
        { src: "/logos/demo2.svg", alt: "Precision Labs" },
        { src: "/logos/demo3.svg", alt: "AeroTech" },
        { src: "/logos/demo4.svg", alt: "MedAxis" },
        { src: "/logos/demo5.svg", alt: "VoltGen" },
      ];
  return (
    <section aria-label="Trusted by" className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-sm font-semibold text-muted-foreground">
          Trusted by teams like
        </div>
        <div className="grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-5">
          {demo.map((l) => (
            <div
              key={l.alt}
              className="flex h-12 items-center justify-center rounded-md border bg-muted/40"
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={120}
                height={24}
                className="h-6 w-auto opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
