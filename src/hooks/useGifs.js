import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0


export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  //recuperamos la keyword del local
  const keywordTouse = keyword || localStorage.getItem('lastKeyword') || 'Matrix'

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordTouse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        //aqui guardamos
        if (keyword) localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, keywordTouse])

  useEffect(function () {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordTouse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, keywordTouse])

  return { loading, setLoadingNextPage, gifs, setPage }

}