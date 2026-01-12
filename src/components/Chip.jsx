export default function Chip({ children, className = "" }) {
  return (
    <span
      className={
        "mr-2 mb-2 inline-block rounded-md px-2 py-1 text-[12px] bg-white/80 border border-cv-sep text-muted " +
        className
      }
    >
      {children}
    </span>
  );
}
