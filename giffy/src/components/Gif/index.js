import React from 'react';
import './Gif.css';

function Gif({title, id, url}) {
    return (
        <a href={`#${id}`} className='Gif'>
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </a >
    )
}

export default React.memo(Gif, (prevProps, nextProps) =>{
    return prevProps.id === nextProps.id
})