import { Card } from './components/Card'
import { useEffect, useState } from 'react'
import { arrayRange } from './helpers'
import { ICharacter } from './interfaces'
import { Controllers } from './components/Controllers'

export default function Home() {
  const [data, setData] = useState([])
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number[]>([])
  const [allPages, setAllPages] = useState<number[]>([])

  const getCharacters = async () => {
    // Get data from the service according to page parameter.
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await res.json()
    if (page === 1) {
      const pagesArr: number[] = arrayRange(page, data.info.pages, 1)
      setAllPages(pagesArr)
      setPages(pagesArr.slice(0, 5))
    }
    setData(data.results)
  }

  useEffect(() => {
    getCharacters()
  }, [page])

  const prevPage = () => {
    setPage((cur) => cur - 1)
    // Check if the current page is the first to load the prev 5 pages.
    if (page === pages[0]) {
      const pagesArr: number[] = allPages.slice(page - 6, page - 1)
      setPages(pagesArr)
    }
  }

  const nextPage = () => {
    setPage((cur) => cur + 1)
    // Check if the current page is the last to load the next 5 pages.
    if (page === pages[pages.length - 1]) {
      const pagesArr: number[] = allPages.slice(page, page + 5)
      setPages(pagesArr)
    }
  }

  return (
    <div className="m-96">
      <div className="grid grid-cols-5 gap-4 rounded border border-current p-10  ">
        {data && data.map((character: ICharacter) => <Card key={character.id} character={character} />)}
      </div>
      <Controllers page={page} pages={pages} prevPage={prevPage} nextPage={nextPage} allPages={allPages} />
    </div>
  )
}
