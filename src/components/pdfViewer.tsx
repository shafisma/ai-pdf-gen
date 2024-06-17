interface PdfViewerProps {
    pdfUrl: string;
  }
  
  export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Generated PDF</h2>
        <iframe src={pdfUrl} className="w-full h-[600px] border border-gray-300 rounded" />
      </div>
    );
  }