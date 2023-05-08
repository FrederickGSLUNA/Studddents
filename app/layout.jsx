import NavBar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import cx from 'classnames'
import { sfPro, inter } from './fonts'

export const metadata = {
  title: 'Studddents | Los mejores recursos para estudiantes en un solo lugar',
  description: 'Encuentra los mejores recursos para estudiantes en un solo lugar'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className='fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 -z-10' />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
