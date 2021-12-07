import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
const POPULAR_GIFS = ["Matrix", "Rick", "morty", "Panda"];

export default function Home() {
    const { keyword, setKeywiord } = useState('');
    const [path, pushLocation] = useLocation();

    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
        })
    }, [keyword]);

    const handleSubmit = evt =>{
        evt.preventDefault();
        pushLocation(`/search/${keyword}`);
        //navegar
    }

    const handleChange = evt =>{

        setKeywiord(evt.target.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Busca aquí tu gif..." onChange={handleChange} type="text" value={keyword} />
            </form>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (

                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}