import type { Metadata,Viewport } from "next";
import "./globals.css";
import localfont from "next/font/local";
import nextConfig from '../next.config.mjs';

// Fonts Import
const MonumentGrotesk = localfont({
  src:'../public/fonts/MonumentGrotesk-Medium.woff2',
  variable: '--font-medium'  
})

const MonumentGroteskMono = localfont({
  src:'../public/fonts/MonumentGrotesk-Mono.woff2',
  variable: '--font-mono'  
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#404040' },
  ],
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MonumentGrotesk.variable} ${MonumentGroteskMono.variable}`}>{children}</body>
    </html>
  );
}
