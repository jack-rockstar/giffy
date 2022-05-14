import React, { useCallback, useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'
import LazyTrending from 'components/TrendingSearches'
import SearchForm from 'components/searchForm'


export default function Home() {
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()


    
    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    },[pushLocation])
    


  
    return (
        <>
            <SearchForm onSubmit={handleSubmit}></SearchForm>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className='App-title'>Ultima busqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    )
}