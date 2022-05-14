import React, {useState, useEffect} from "react";
import getTrendingTerms from "services/getTrending";
import Category from "components/Category";

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])
    useEffect(function (){
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name={'Los mas buscados'} options={trends}></Category>
}