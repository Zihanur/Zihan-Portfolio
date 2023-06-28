import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { AiOutlineFilePdf } from "react-icons/ai";
import { motion } from "framer-motion";

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
    <motion.button
      whileHover={{scale:1.1,textShadow:"0px 0px 4px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}}
      onClick={() => downloadPdfUrl(PDF_FILE_URL)}
      className="bg-slate-900 text-white text-2xl font-medium py-3 px-4 rounded-md flex items-center gap-2"
    >
      Download CV <AiOutlineFilePdf></AiOutlineFilePdf>
    </motion.button>
  );
};

export default DownloadCV;
