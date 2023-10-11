import React from 'react'
import { IControllers } from '../../interfaces/index'

export const Controllers: React.FC<IControllers> = ({ page, pages, prevPage, nextPage, allPages }) => {

  return (
    <div className="flex justify-center my- m-10">
      <button
        className={`h-8 flex justify-center items-center w-8 rounded border ${page === 1 && 'text-slate-300'}`}
        onClick={prevPage}
        disabled={page === 1}
      >
        {'<'}
      </button>
      {pages &&
        pages?.map((num) => (
          <p
            key={num}
            className={`h-8 flex justify-center items-center w-8 rounded border ${page === num && 'bg-slate-500 text-white'
              }`}
          >
            {num}
          </p>
        ))}
      <button
        className={`h-8 flex justify-center items-center w-8 rounded border ${page === allPages[allPages.length - 1] && 'text-slate-300'}`}
        onClick={nextPage}
        disabled={page === allPages[allPages.length - 1]}
      >
        {'>'}
      </button>
    </div>
  )
}
