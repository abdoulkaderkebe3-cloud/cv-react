import SectionTitle from "./SectionTitle";

export default function Experience({ items }) {
  return (
    <section>
      <SectionTitle>III) EXPÉRIENCE PROFESSIONNELLE</SectionTitle>
      <p className="mt-2 text-[12px] italic text-slate-600">
        (Du plus récent au moins récent)
      </p>
      <div className="mt-3 space-y-5 p-4 bg-soft rounded-md border border-cv-sep">
        {items.map((x, idx) => (
          <div key={idx} className="text-[13px] text-muted">
            <div className="font-semibold cv-accent">
              {x.periode} — {x.poste}
            </div>
            <div className="text-[13px] mt-1 font-medium text-slate-700">
              {x.structure} — <span className="text-slate-600">{x.lieu}</span>
            </div>
            <ul className="mt-2 list-disc pl-6 text-[12.5px] text-muted">
              {x.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
