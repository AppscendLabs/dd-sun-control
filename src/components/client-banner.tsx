import Image from "next/image";

const CLIENTS = [
  { name: "Marriott Hotels", src: "/images/clients/marriott.png", width: 160 },
  { name: "Holiday Inn", src: "/images/clients/holiday-inn.png", width: 120 },
  { name: "Baptist Health", src: "/images/clients/baptist-health.png", width: 180 },
  { name: "Stephens Inc.", src: "/images/clients/stephens.png", width: 150 },
  { name: "Roberts-McNutt", src: "/images/clients/roberts-mcnutt.png", width: 160 },
];

export function ClientBanner() {
  return (
    <section className="bg-slate-800 py-10">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by leading businesses across Arkansas
        </p>
      </div>

      {/* Scrolling track — overflow hidden with fade edges */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-800 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-800 to-transparent" />

        {/* Duplicated logo strip for seamless loop */}
        <div className="animate-marquee flex w-max items-center gap-16 px-8">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div
              key={i}
              className="flex h-14 shrink-0 items-center justify-center"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={56}
                className="h-10 w-auto object-contain brightness-0 invert opacity-60 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
