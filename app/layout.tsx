import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dockify</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
