# AI PDF Generator

An AI-powered web application that automatically generates professional PDF documents on any topic using Google's Gemini AI. Simply enter a topic and desired page count, and the application will create a well-structured, informative document with proper formatting.

## Features

- **AI-Powered Content Generation**: Uses Google Gemini AI to generate comprehensive, well-structured content on any topic
- **Customizable Length**: Generate documents ranging from 1 to 10 pages
- **Professional Formatting**: Automatically formats content with:
  - Hierarchical headings (H1, H2, H3)
  - Bulleted lists with descriptions
  - Proper paragraph spacing
  - Page numbers
  - Clean typography and colors
- **Real-time Preview**: View the generated PDF directly in the browser
- **Modern UI**: Beautiful gradient interface built with Tailwind CSS
- **Fast Generation**: Streamlined API endpoint for quick PDF creation

## Technologies Used

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Google Generative AI (Gemini)](https://ai.google.dev/)** - Content generation
- **[jsPDF](https://github.com/parallax/jsPDF)** - PDF creation and formatting
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling and UI design
- **[React](https://react.dev/)** - UI component library

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Google Gemini API Key** (Get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shafisma/ai-pdf-gen.git
cd ai-pdf-gen
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## Usage

### Development Mode

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application for production:

```bash
npm run build
npm start
```

### Generating a PDF

1. Enter a topic in the "Topic" field (e.g., "Climate Change", "Machine Learning", "Ancient Rome")
2. Select the number of pages (1-10)
3. Click "Generate PDF"
4. Wait for the AI to generate content and create the PDF
5. View the generated PDF in the browser preview
6. Download the PDF using the browser's download button

## API Endpoints

### POST `/api/generate-pdf`

Generates a PDF document based on the provided topic and page count.

**Request Body:**
```json
{
  "topic": "string",
  "pages": number
}
```

**Response:**
- **Content-Type**: `application/pdf`
- **Content-Disposition**: `attachment; filename="generated_document.pdf"`
- Returns the generated PDF as a binary stream

**Error Response:**
```json
{
  "error": "Failed to generate PDF"
}
```

## Project Structure

```
ai-pdf-gen/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-pdf/
│   │   │       └── route.ts          # API endpoint for PDF generation
│   │   ├── page.tsx                  # Main application page
│   │   └── layout.tsx                # Root layout
│   ├── components/
│   │   ├── pdfForm.tsx               # Form component for user input
│   │   └── pdfViewer.tsx             # PDF preview component
│   └── lib/
│       ├── gemini.ts                 # Gemini AI integration
│       └── pdfGenerator.ts           # PDF creation logic
├── public/                           # Static assets
├── .env                              # Environment variables (not in repo)
├── package.json                      # Project dependencies
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── next.config.mjs                  # Next.js configuration
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key for content generation | Yes |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Google Gemini AI](https://ai.google.dev/)
- PDF generation using [jsPDF](https://github.com/parallax/jsPDF)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
