import SectionTitle from "./SectionTitle";

export default function Profile({ text }) {
  return (
    <section>
      <SectionTitle>PROFIL / OBJECTIF</SectionTitle>
      <div className="mt-3 p-4 bg-soft rounded-md border border-cv-sep text-[13px] leading-5 text-muted">
        {text}
      </div>
    </section>
  );
}
