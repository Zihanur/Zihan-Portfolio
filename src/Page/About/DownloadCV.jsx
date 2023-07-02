import { motion } from "framer-motion";
import { AiOutlineFilePdf } from "react-icons/ai";

const link = "https://drive.google.com/uc?export=download&id=1pvWn_vNhk588ezX-ZKmpqadZsWgSdeg9"
const DownloadCV = () => {
  const handleDownload = () =>{
    window.open(link, "_blank")
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 4px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      onClick={handleDownload}
      className="bg-slate-900 text-white text-2xl font-medium py-3 px-4 rounded-md flex items-center gap-2"
    >
      Download CV <AiOutlineFilePdf></AiOutlineFilePdf>
    </motion.button>
  );
};

export default DownloadCV;
