import { NextRequest, NextResponse } from 'next/server';
import { generateContent } from '@/lib/gemini';
import { generatePdf } from '@/lib/pdfGenerator';

export async function POST(req: NextRequest) {
  try {
    const { topic, pages } = await req.json();

    const content = await generateContent(topic, pages);
    const pdfBuffer = generatePdf(content);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="generated_document.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}

// Add this line to handle OPTIONS requests (for CORS if needed)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}