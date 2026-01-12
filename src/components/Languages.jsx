import SectionTitle from "./SectionTitle";
import Chip from "./Chip";

export default function Languages({ items }) {
  return (
    <section>
      <SectionTitle>V) LANGUES</SectionTitle>
      <div className="mt-3">
        <div className="flex flex-wrap gap-2">
          {items.map((x, idx) => (
            <Chip key={idx}>
              <span className="font-semibold mr-2 cv-accent">{x.l}</span>
              <span className="text-slate-700 text-[13px]">{x.n}</span>
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
