import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer class='border-b border-gray-200 bg-white/50 backdrop-blur-xl'>
      <div class='w-full mx-auto p-4 md:py-8'>
        <div class='sm:flex sm:items-center sm:justify-between'>
          <Link href='/' class='flex items-center mb-4 sm:mb-0'>
            <Image width={32} height={32} src='/logo.svg' class='h-8 mr-3' alt='Studddents Logo' />
            <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Studddents</span>
          </Link>
          <ul class='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' class='mr-4 hover:underline md:mr-6 '>Acerca</a>
            </li>
            <li>
              <a href='#' class='mr-4 hover:underline md:mr-6'>Privacy Policy</a>
            </li>
            <li>
              <a href='#' class='mr-4 hover:underline md:mr-6 '>Licensing</a>
            </li>
            <li>
              <a href='#' class='hover:underline'>Contacto</a>
            </li>
          </ul>
        </div>
        <hr class='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <span class='block text-sm text-gray-500 sm:text-center'>© 2023 <a href='/' class='hover:underline'>Studddents</a>. All Rights Reserved.</span>
      </div>
    </footer>

  )
}

export default Footer
