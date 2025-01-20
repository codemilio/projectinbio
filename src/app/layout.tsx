
import { Red_Hat_Display } from 'next/font/google'
import "./globals.css";
import { Navbar } from '@/components/Navbar';

const redHadDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHadDisplay.className} text-content-body bg-background-primary antialiased max-w-7xl mx-auto relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
