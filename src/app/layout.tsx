import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import '../styles/global.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-host-grotesk'
});

export const metadata: Metadata = {
  title: 'Nutrail — AI food diary',
  description:
    'Log a meal with a picture, a voice note or a few words, and get the foods back with calories and macros.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={hostGrotesk.variable} lang='en'>
      <body className='bg-lime-900 font-sans text-gray-100 antialiased'>{children}</body>
    </html>
  );
}
