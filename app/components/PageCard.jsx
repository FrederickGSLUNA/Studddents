import Link from 'next/link'
import { CATEGORY_ICON_MAP } from '../data/CATEGORY_ICON_MAP'

function PageCard ({ nombre, descripcion, categorias, icono, alias }) {
  return (
    <Link href={alias || '/'}>
      <div className='relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md p-5 h-80 hover:shadow-2xl transition-all'>
        <div className='w-10 mb-2'>
          <img src={icono} alt={`${nombre} icono`} />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>{nombre}</h2>
          <p className='text-sm py-2'>{descripcion}</p>
          <ul className='absolute flex flex-wrap bottom-0'>
            {categorias.map(categoria => (
              <li key={categoria} className='flex gap-1 items-center bg-gray-100 rounded-lg font-bold py-1 px-2 text-sm mr-2 mb-2'>
                <span className='w-4'>
                  {CATEGORY_ICON_MAP[categoria]}
                </span>
                {categoria}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default PageCard
