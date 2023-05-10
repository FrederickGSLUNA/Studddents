import { PAGES } from '../data/pages'
import BodyRecurso from '../components/BodyRecurso'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Recurso ({ params }) {
  const { alias } = params

  function buscarPagina (alias, pages) {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].alias === alias) {
        return pages[i]
      }
    }
    redirect('/')
  }

  const recurso = buscarPagina(alias, PAGES)

  return (
    <section className='pt-20 min-h-screen md:pt-16'>
      <Link className='mb-2' href='/'>
        <svg className='w-8 fill-gray-600 ml-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z' /></svg>
      </Link>
      <div id='title' className='flex items-center justify-center'>
        <Image width={56} height={56} className='w-14 mr-2' src={recurso.icono} alt={`${recurso.nombre} icon`} />
        <h1 className='text-center text-4xl font-medium'>{recurso.nombre}</h1>
      </div>
      <div id='body' className='flex justify-center px-8'>
        <div id='text' className='max-w-5xl'>
          <BodyRecurso content={recurso.articulo} />
        </div>
      </div>
      <div className='flex items-center justify-center pb-36'>
        <Link className='rounded-lg border-2 border-black bg-black p-1.5 px-4 text-xl text-white transition-all hover:bg-white hover:text-black' href={recurso.link} target='_blank'>Ir a {recurso.nombre}</Link>
      </div>
    </section>
  )
}
