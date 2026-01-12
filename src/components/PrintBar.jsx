export default function PrintBar() {
  return (
    <div className="no-print mx-auto mb-4 flex max-w-[900px] items-center justify-end gap-2">
      <button
        onClick={() => window.print()}
        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold  text-slate-900 hover:bg-slate-50"
      >
        Imprimer / Export PDF
      </button>
    </div>
  );
}
