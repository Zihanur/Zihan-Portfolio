import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AiOutlineFilePdf } from "react-icons/ai";

// Register fonts with pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const DownloadCV = () => {
  const generatePdf = () => {
    // Define your PDF content here
    const docDefinition = {
      content: [
        'Hello, this is a PDF download!',
        // ... Add more content to the PDF
      ],
    };

    // Create and download the PDF
    pdfMake.createPdf(docDefinition).download('my-pdf-download.pdf');
  };
  return (
    <button onClick={generatePdf} className="bg-slate-900 hover:bg-slate-800 text-white text-2xl font-medium py-3 px-4 rounded-md flex items-center gap-2">
      Download CV <AiOutlineFilePdf></AiOutlineFilePdf>
    </button>
  );
};

export default DownloadCV;