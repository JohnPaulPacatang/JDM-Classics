import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/footer';

export const metadata = {
  title: 'JDM Classics',
  icon: 'src/app/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
