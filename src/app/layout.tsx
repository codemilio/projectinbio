
import { Red_Hat_Display } from 'next/font/google'
import "./globals.css";

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
        className={`${redHadDisplay.className} text-content-body bg-background-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
