import SectionTitle from "./SectionTitle";

export default function CivilStatus({ items }) {
  return (
    <section>
      <SectionTitle>I) ÉTAT CIVIL</SectionTitle>
      <div className="mt-3 p-4 bg-soft rounded-md border border-cv-sep text-[13px] text-muted">
        <div className="grid gap-2">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-md px-2 py-2 hover:bg-white/60"
            >
              <div className="flex-shrink-0">
                <span className="inline-block w-24 text-right pr-3 font-semibold cv-accent">
                  {it.k}
                </span>
              </div>
              <div className="min-w-0 flex-1 text-slate-700 break-words font-medium">
                {it.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
