import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";


// Aca va la metadata. Tambien podes
export const metadata = {
  title: "Entropy",
  description: "See our projects.",
  openGraph: {
    title: "Entropy",
    description: "Entropy",
    images: [
      {
        // imagen que aparece cuando compartis la página
        url: "/images/",
        width: 1280,
        height: 1280,
      },
    ],
    type: "website",
    locale: "EN_en",
    siteName: "Entropy"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
