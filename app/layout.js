import { Inter } from 'next/font/google'
import './ui/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact Details',
  description: 'Contact Details-Customer Care Service Phone Number, Toll Free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <ToastContainer />
      </body>
    </html>
  )
}
