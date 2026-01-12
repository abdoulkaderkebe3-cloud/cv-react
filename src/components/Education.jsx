import SectionTitle from "./SectionTitle";
import Interests from "./Interests";

export default function Education({ formations, certifications, interests }) {
  return (
    <section>
      <SectionTitle>II) FORMATION ET DIPLÔMES</SectionTitle>
      <p className="mt-2 text-[12px] italic text-slate-600">
        (Du plus récent au moins récent)
      </p>
      <div className="mt-3 space-y-4 p-4 bg-soft rounded-md border border-cv-sep">
        {formations.map((f, idx) => (
          <div key={idx} className="text-[13px] text-muted">
            <div className="font-semibold cv-accent">
              {f.annee} — {f.titre}
            </div>
            <div className="text-[13px] mt-1 font-medium text-slate-700">
              {f.ecole} — <span className="text-slate-600">{f.ville}</span>
            </div>
            {f.details?.length ? (
              <ul className="mt-1 list-disc pl-6 text-[12.5px] text-muted">
                {f.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
      <SectionTitle>Certifications</SectionTitle>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {certifications.map((c, idx) => (
          <div
            key={idx}
            className="p-2 bg-white/80 border border-cv-sep rounded-md text-[13px] text-muted"
          >
            {c}
          </div>
        ))}
      </div>

      {/* CENTRES D'INTÉRÊT directement sous Certifications */}
      {interests ? (
        <div className="mt-4">
          <Interests items={interests} />
        </div>
      ) : null}
    </section>
  );
}
