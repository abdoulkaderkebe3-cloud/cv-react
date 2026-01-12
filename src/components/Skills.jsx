import SectionTitle from "./SectionTitle";

export default function Skills({ competences }) {
  return (
    <section>
      <SectionTitle>IV) COMPÉTENCES</SectionTitle>
      <div className="mt-3 space-y-4 text-[13px]">
        <div className="p-4 bg-soft rounded-md border border-cv-sep">
          <div className="font-semibold cv-accent">Compétences techniques</div>
          <div className="mt-2 flex flex-wrap items-center">
            {competences.techniques.map((c, idx) => (
              <span
                key={idx}
                className="mr-2 mb-2 inline-block rounded-md px-2 py-1 text-[12px] bg-white/80 border border-cv-sep text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-soft rounded-md border border-cv-sep">
          <div className="font-semibold cv-accent">Atouts</div>
          <div className="mt-2 flex flex-wrap items-center">
            {competences.atouts.map((a, idx) => (
              <span
                key={idx}
                className="mr-2 mb-2 inline-block rounded-md px-2 py-1 text-[12px] bg-white/80 border border-cv-sep text-muted"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
