// src/lib/pdfGenerator.ts
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function generatePdf(content: string): Buffer {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;

  let yPosition = margin;
  let currentPage = 1;

  const addNewPageIfNeeded = () => {
    if (yPosition > pageHeight - margin) {
      doc.addPage();
      currentPage++;
      yPosition = margin;
    }
  };

  const addPageNumber = () => {
    doc.setFontSize(10);
    doc.setTextColor(127, 140, 141); // Light gray color
    doc.text(`Page ${currentPage}`, pageWidth - margin, pageHeight - 10);
  };

  // Split content into lines
  const lines = content.split('\n');

  lines.forEach((line) => {
    addNewPageIfNeeded();

    if (line.startsWith('# ')) {
      // Main title
      doc.setFontSize(24);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(44, 62, 80); // Dark blue color
      doc.text(line.substring(2), pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;
    } else if (line.startsWith('## ')) {
      // Section heading
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(52, 73, 94); // Dark gray color
      doc.text(line.substring(3), margin, yPosition);
      yPosition += 15;
    } else if (line.startsWith('### ')) {
      // Subsection heading
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(52, 73, 94); // Dark gray color
      doc.text(line.substring(4), margin, yPosition);
      yPosition += 10;
    } else if (line.trim().startsWith('-')) {
      // List item
      const itemParts = line.trim().substring(1).split(':');
      if (itemParts.length === 2) {
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(52, 73, 94); // Dark gray color
        doc.text(itemParts[0].trim(), margin + 5, yPosition);
        
        doc.setFont(undefined, 'normal');
        const descriptionText = doc.splitTextToSize(itemParts[1].trim(), pageWidth - 2 * margin - 70);
        doc.text(descriptionText, margin + 70, yPosition);
        
        yPosition += Math.max(7, descriptionText.length * 7);
      } else {
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(52, 73, 94); // Dark gray color
        doc.text('•', margin, yPosition);
        const itemText = doc.splitTextToSize(line.trim().substring(1), pageWidth - 2 * margin - 10);
        doc.text(itemText, margin + 10, yPosition);
        yPosition += itemText.length * 7;
      }
      yPosition += 5;
    } else if (line.trim() === '') {
      // Empty line
      yPosition += 5;
    } else {
      // Regular paragraph
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(52, 73, 94); // Dark gray color
      const splitText = doc.splitTextToSize(line, pageWidth - 2 * margin);
      doc.text(splitText, margin, yPosition);
      yPosition += splitText.length * 7; // Approximate line height
    }

    addPageNumber();
  });

  // Get the PDF as a Buffer
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

  return pdfBuffer;
}