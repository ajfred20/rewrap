import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rewrap",
  description: "Seamlessly Integrate Tailwind CSS to your React projects",
  icons: {
    icon: "/rewrap.svg",
  },
  openGraph: {
    title: "Rewrapped - Tailwind CSS Integration",
    description: "Seamlessly Integrate Tailwind CSS to your React projects",
    url: "https://rewrap.vercel.app",
    siteName: "Rewrap",
    images: [
      {
        url: "/rewrap.png",
        width: 1200,
        height: 630,
        alt: "Rewrap - Tailwind CSS Integration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewrap - Tailwind CSS Integration",
    description: "Seamlessly Integrate Tailwind CSS to your React projects",
    creator: "@iamajfred_",
    images: ["/rewrap.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
