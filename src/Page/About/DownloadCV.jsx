import { saveAs } from 'file-saver';
import { motion } from "framer-motion";
import { AiOutlineFilePdf } from 'react-icons/ai';

const pdfUrl = "http://localhost:5173/zihan-resume.pdf";

const DownloadCV = () => {

  const downloadPdf = () => {
    fetch(pdfUrl)
    .then((response) => response.blob())
    .then((blob) => {
      saveAs(blob, 'Zihanur_Resume.pdf');
    })
    .catch((error) => {
      console.error('Error downloading the PDF:', error);
    });
  };
  
  return (
    <motion.button
      whileHover={{scale:1.1,textShadow:"0px 0px 4px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}}
      onClick={downloadPdf}
      className="bg-slate-900 text-white text-2xl font-medium py-3 px-4 rounded-md flex items-center gap-2"
    >
      Download CV <AiOutlineFilePdf></AiOutlineFilePdf>
    </motion.button>
  );
};

export default DownloadCV;
