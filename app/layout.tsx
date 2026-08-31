import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aastha Trivedi — Senior Data Engineer',
  description:
    'Portfolio of Aastha Trivedi, a Senior Data Engineer building reliable data platforms at scale.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000/',
  ),
  openGraph: {
    title: 'Aastha Trivedi — Senior Data Engineer',
    description: 'Building reliable data systems at scale.',
    type: 'website',
    images: ['og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aastha Trivedi — Senior Data Engineer',
    description: 'Building reliable data systems at scale.',
    images: ['og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
