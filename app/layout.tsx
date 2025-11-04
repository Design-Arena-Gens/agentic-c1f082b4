import './styles/globals.css';
import type { Metadata } from 'next';

const title = 'Agentic Capabilities';
const description = 'Explore the range of tasks Codex can autonomously handle for you.';

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-c1f082b4.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://agentic-c1f082b4.vercel.app',
    siteName: title,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
