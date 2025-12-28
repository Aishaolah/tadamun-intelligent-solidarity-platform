import './globals.css';

export const metadata = {
  title: 'TADAMUN Platform',
  description: 'Intelligent solidarity platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
