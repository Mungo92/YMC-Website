import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yass Valley Men's Shed",
  description:
    "A welcoming community space where men gather, share skills, and build mateship through woodworking, metalworking, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-warm-900 bg-warm-50">{children}</body>
    </html>
  );
}
