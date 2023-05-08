'use client'

import { useState, useEffect } from 'react'
import PageCard from './PageCard'

import { PAGES } from '../data/pages'
import { CATEGORY_ICON_MAP } from '../data/CATEGORY_ICON_MAP'

function PagesList () {
  const [pages] = useState(PAGES)
  const [filteredPages, setFilteredPages] = useState(PAGES)

  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPages(pages.filter(page => page.categorias.includes(selectedCategory)))
    } else {
      setFilteredPages(pages)
    }
  }, [pages, selectedCategory])

  function handleCategoryClick (categoria) {
    setSelectedCategory(categoria)
  }

  return (
    <section className='pt-10'>
      <h2 className='text-2xl font-bold text-center'>Categorias</h2>
      <div id='categorias' className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 md:px-20 px-10 pb-12 pt-5'>
        <button
          className='flex items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md p-1 w-full hover:opacity-70 font-medium h-10 whitespace-nowrap'
          onClick={() => handleCategoryClick(null)}
        >
          <span className='w-5 mr-1 opacity-70'>
            <svg className='w-full' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z' /></svg>
          </span>
          Todas
        </button>
        {Array.from(new Set(pages.flatMap(page => page.categorias))).map(categoria => (
          <button
            className='flex items-center justify-center gap-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md p-1 w-full hover:opacity-80 hover:shadow-lg transition-all font-medium h-10 whitespace-nowrap'
            key={categoria}
            onClick={() => handleCategoryClick(categoria)}
          >
            <span className='w-5 mr-1 opacity-70'>
              {CATEGORY_ICON_MAP[categoria]}
            </span>
            {categoria}
          </button>
        ))}
      </div>
      <div id='recursos' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-20 px-10 pb-20'>
        {filteredPages.map(page => (
          <PageCard key={page.nombre} {...page} />
        ))}
      </div>
    </section>
  )
}

export default PagesList
