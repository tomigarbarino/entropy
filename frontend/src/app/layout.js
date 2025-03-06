
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";


export const metadata = {
  title: "Entropy",
  description: "See our projects.",
  openGraph: {
    title: "Entropy",
    description: "Entropy",
    images: [
      {
        url: "/images/ENTROPY_LOGO-12.png ",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/entropy_fav.gif" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
