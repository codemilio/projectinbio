
import { Red_Hat_Display } from 'next/font/google'
import "./globals.css";
import { Navbar } from '@/components/commons/navbar';
import { Dialog } from '@/components/commons/dialog';

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
        className={`${redHadDisplay.className} text-content-body bg-background-primary antialiased relative`}
      >
        <div className='max-w-7xl mx-auto'>
          <Dialog.Provider>
            {/* <Navbar /> */}
            {children}
          </Dialog.Provider>
        </div>
      </body>
    </html>
  );
}
