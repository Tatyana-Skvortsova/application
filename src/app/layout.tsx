import './globals.css';
import localFont from 'next/font/local';

const fixelDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/FixelDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    }
  ],
  display: 'swap', // стратегия отображения
  variable: '--font-fixel-display', // опционально: CSS‑переменная
});

const fixelText = localFont({
  src: [
    {
      path: '../../public/fonts/FixelText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelText-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    }
  ],
  display: 'swap', // стратегия отображения
  variable: '--font-fixel-text', // опционально: CSS‑переменная
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fixelDisplay.variable} ${fixelText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
