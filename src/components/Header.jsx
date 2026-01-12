import photo from "../assets/kebe.jpg";

function ContactLine({ label, value, href }) {
  if (!value) return null;
  return (
    <a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className="flex items-center gap-2 text-[12px] text-muted hover:text-slate-900 link-muted"
    >
      <span className="font-semibold cv-accent">{label}:</span>
      <span className="break-all">{value}</span>
    </a>
  );
}

export default function Header({ data }) {
  const fullName = `${data.nom} ${data.prenom}`;
  const subtitle = data.profil ? data.profil.split(".")[0] : null;
  return (
    <header className="flex items-start justify-between gap-6">
      <div className="w-full">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-extrabold tracking-tight cv-accent">
            {fullName}
          </h1>
          {subtitle ? (
            <span className="ml-2 rounded-md px-3 py-1 text-sm font-medium bg-white/90 border border-cv-sep text-muted">
              {subtitle}
            </span>
          ) : null}
        </div>
        <div className="mt-2 h-px w-full bg-cv-sep" />

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <ContactLine label="Lieu" value={`${data.ville}, ${data.pays}`} />
          <ContactLine label="Téléphone" value={data.tel} />
          <ContactLine
            label="Email"
            value={data.email}
            href={`mailto:${data.email}`}
          />
          <ContactLine
            label="Portfolio"
            value={data.portfolio}
            href={data.portfolio}
          />
          {data.linkedin ? (
            <ContactLine
              label="LinkedIn"
              value={data.linkedin}
              href={data.linkedin}
            />
          ) : null}
        </div>
      </div>

      <div className="shrink-0 print-hide">
        <div className="h-[120px] w-[100px] border-2 border-cv-sep bg-soft relative overflow-hidden rounded-md">
          <img
            src={photo}
            alt="photo du kader"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
