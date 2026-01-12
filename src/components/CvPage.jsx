import Header from "./Header";
import Profile from "./Profil";
import CivilStatus from "./CivilStatus";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Languages from "./Languages";
import Interests from "./Interests";

export default function CvPage({ data }) {
  return (
    <main className="mx-auto max-w-[900px] px-3 pb-10 print:px-0 bg-soft p-6 rounded-lg print:rounded-none print:p-0">
      {/* Page A4 */}
      <section className="page mx-auto w-full max-w-[820px]  bg-white p-8 shadow-sm print:p-0">
        <Header data={data} />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <Profile text={data.profil} />
            <Experience items={data.experiences} />
            <Education
              formations={data.formations}
              certifications={data.certifications}
              interests={data.interets}
            />
          </div>

          <aside className="md:col-span-1 space-y-4 ">
            <CivilStatus items={data.etatCivil} />
            <Skills competences={data.competences} />
            <div className="card p-3">
              <Languages items={data.langues} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
