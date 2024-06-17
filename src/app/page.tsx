'use client';

import { useState } from 'react';
import PdfForm from '@/components/pdfForm';
import PdfViewer from '@/components/pdfViewer';

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">AI PDF Maker</h1>
        <PdfForm onPdfGenerated={setPdfUrl} />
        {pdfUrl && <PdfViewer pdfUrl={pdfUrl} />}
      </div>
    </main>
  );
}