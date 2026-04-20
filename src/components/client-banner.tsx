import Image from "next/image";

const CLIENTS = [
  { name: "Marriott Hotels", src: "/images/clients/marriott.png", width: 160, imgClass: "h-14 w-auto" },
  { name: "Holiday Inn", src: "/images/clients/holiday-inn.png", width: 120, imgClass: "h-14 w-auto" },
  { name: "Baptist Health", src: "/images/clients/baptist-health.png", width: 180, imgClass: "h-8 w-auto" },
  { name: "Stephens Inc.", src: "/images/clients/stephens.png", width: 150, imgClass: "h-8 w-auto" },
  { name: "Roberts-McNutt", src: "/images/clients/roberts-mcnutt.png", width: 160, imgClass: "h-12 w-auto" },
];

export function ClientBanner() {
  return (
    <section className="bg-slate-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-800 px-6 py-5">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Trusted by leading businesses across Arkansas
          </p>

          {/* Scrolling track with edge fades */}
          <div className="relative overflow-hidden" style={{ transform: "translateZ(0)" }}>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-800 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-800 to-transparent" />

            <div className="animate-marquee flex w-max items-center gap-14">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div key={i} className="flex h-14 shrink-0 items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={56}
                    className={`${client.imgClass} object-contain brightness-0 invert opacity-50 transition-opacity duration-300 hover:opacity-90`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
