import PageList from './components/PagesList'

export default function Home () {
  return (
    <main className='w-screen min-h-screen pt-16'>
      <section className='flex justify-center md:pt-16 pt-12'>
        <h1 className='animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-transparent text-center px-5 md:text-5xl text-4xl font-bold max-w-4xl'>
          Encuentra los mejores recursos para estudiantes en un solo lugar
        </h1>
      </section>
      <section className='flex justify-center pt-6'>
        <button className='rounded-lg border-2 border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black'>
          Proponer recurso
        </button>
      </section>
      <section id='pages'>
        <PageList />
      </section>
    </main>
  )
}
