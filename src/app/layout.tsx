import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[YourBrandName] — Social Commerce Marketplace",
  description:
    "Discover shops you'll love. A social marketplace for small sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-surface font-body text-on-surface">{children}</body>
    </html>
  );
}
