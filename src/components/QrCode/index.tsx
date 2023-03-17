import QRCode from "qrcode.react";
import queryString from "query-string";
import { useContext, useRef } from "react";
import { UserContext } from "../Contexts/UserContext";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

export function QrCode() {
  const { userName, linkedin, github } = useContext(UserContext);

  const qrCodeRef = useRef(null);

  // Cria a URL com os parâmetros opcionais
  const url = queryString.stringifyUrl({
    url: `${userName}`,
    query: { linkedin, github },
  });

  const handleDownloadQrCode = () => {
    const qrCode = qrCodeRef.current;

    html2canvas(qrCode)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pageWidth / 2;
        const imgHeight = imgWidth;
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        pdf.save('qrcode.pdf');
      });
  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center" style={{ width: '300px' }}>
      <div ref={qrCodeRef}>
        <QRCode
          style={{ width: "105%", height: "105%" }}
          value={url}
          includeMargin={true}
        />
      </div>
      <div className="w-48 flex items-center justify-center">
        <a href={url} target="_blank" rel="noreferrer">
          Ver URL
        </a>
      </div>

      <div className="">
        <button type='submit' onClick={handleDownloadQrCode} className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-600 disabled:bg-gray-300">
          Download QrCode
        </button>
      </div>
    </div>
  );
}
