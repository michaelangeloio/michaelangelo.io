import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'
import Sidebar from './components/sidebar';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['200', '400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://michaelangelo.io'),
  title: {
    default: 'Michael Angelo Rivera',
    template: '%s | Michael Angelo Rivera',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Michael Angelo Rivera',
    description: 'Developer, writer, and creator.',
    url: 'https://michaelangelo.io',
    siteName: 'Michael Angelo Rivera',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Michael Angelo Rivera',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        poppins.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
