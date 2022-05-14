import React from 'react'
import { Link } from 'wouter'
import './Gif.css'


function Gif({ title, id, url }) {
    return (
        <div className='Gif'>
            <Link className='Gif-link' to={`/gif/${id}`} >
                <h4>{title}</h4>
                <img loading='lazy' id={id} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif , (prevProps, nextProps) => prevProps.id === nextProps.id)