import SectionTitle from "./SectionTitle";
import Chip from "./Chip";

export default function Interests({ items }) {
  return (
    <section>
      <SectionTitle>CENTRES D’INTÉRÊT</SectionTitle>
      <div className="mt-3">
        <div className="flex flex-wrap gap-2">
          {items.map((it, idx) => (
            <Chip key={idx}>{it}</Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
