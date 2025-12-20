import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Tadamun' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-6 flex-1">
          {children}
        </main>
        <footer className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tadamun
        </footer>
      </body>
    </html>
  );
}