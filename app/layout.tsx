import "./globals.css";

export const metadata = {
  title: "JAI Software Solutions - AI Automation Services",
  description: "Building intelligent systems that automate complex workflows and drive real results.",
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
