import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[YourBrandName] — Social Commerce Marketplace",
  description: "Discover shops you'll love. A social marketplace for small sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">{children}</body>
    </html>
  );
}
