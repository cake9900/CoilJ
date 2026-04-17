import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Холодов Евгений | FullStack Developer',
  description: 'Портфолио FullStack-разработчика. Проекты на React, Next.js и TypeScript.',
  keywords: ['frontend', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Глеб Алексеевич' }],
  openGraph: {
    title: 'Холодок | FullStack Developer',
    description: 'Портфолио FullStack-разработчика',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
