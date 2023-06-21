import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { AiOutlineFilePdf } from "react-icons/ai";

// Register fonts with pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const PDF_FILE_URL = "http://localhost:5173/zihan-resume.pdf";

const DownloadCV = () => {

  const downloadPdfUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  
  return (
    <button
      onClick={() => downloadPdfUrl(PDF_FILE_URL)}
      className="bg-slate-900 hover:bg-slate-800 text-white text-2xl font-medium py-3 px-4 rounded-md flex items-center gap-2"
    >
      Download CV <AiOutlineFilePdf></AiOutlineFilePdf>
    </button>
  );
};

export default DownloadCV;
