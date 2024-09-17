import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '../components/commons/header';
import './globals.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'COMIEADEPA',
  description: 'COMIEADEPA Convenção Estadual das Assembleias de Deus no Pará',
  icons: {
    icon: 'icons/brasao-comieadepa.svg',
    shortcut: 'icons//brasao-comieadepa.svg',
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
        <Header />
        <div className="main-content">{children}</div>{' '}
      </body>
    </html>
  );
}
