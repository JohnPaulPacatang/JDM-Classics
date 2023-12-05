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
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
