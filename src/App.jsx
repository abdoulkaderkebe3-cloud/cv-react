import PrintBar from "./components/PrintBar";
import CvPage from "./components/CvPage";
import { cvData } from "./components/data/cvData";

export default function App() {
  return (
    <div className="min-h-screen bg-white  py-6 print:bg-white print:py-0">
      <PrintBar />
      <CvPage data={cvData} />
    </div>
  );
}