import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Roboto, Fira_Code, HelveticaNowDisplay } from 'next/font/google';

import './globals.css';
import Header from './components/Header';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${firaCode.variable}  antialiased max-w-7xl w-full mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
