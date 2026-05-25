import "./globals.css";

export const metadata = {
  title: "Jai Software Solutions",
  description: "AI Automation Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
