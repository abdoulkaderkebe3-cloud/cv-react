export default function SectionTitle({ children }) {
  return (
    <div className="mt-6 flex items-end gap-3">
      <span className="inline-block h-3 w-3 rounded-sm bg-cv-accent/90 translate-y-1" />
      <div>
        <h2 className="text-[14px] font-extrabold tracking-wide cv-accent uppercase">
          {children}
        </h2>
        <div className="mt-2 h-px bg-cv-sep" />
      </div>
    </div>
  );
}
