import React, {useContext} from 'react';
import GifsContext from '../../context/GifsContext';


export default function Detail ({ params }) {

    const {gifs} = useContext(GifsContext);

    return <h1>GIF con id {params.id}</h1>
}