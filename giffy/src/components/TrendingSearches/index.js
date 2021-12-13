import React, { useState, useEffect } from "react";
import getTrendingTerms from '../../services/geTrendingTermsService';
import Category from "../Category";
import useNearScreen from "../../hooks/useNearScreen";

function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends);

    }, [])

    return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending() {

    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });


    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div>
}