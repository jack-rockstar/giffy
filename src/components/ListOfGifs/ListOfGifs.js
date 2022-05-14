import React , {useEffect, useState}  from 'react'
import Gif from "../Gif/Gif"
import './index.css'

const style={
  minHeight:'100vh',
}
export default function ListOfGif({gifs}){

return <div className='ListOfGifs' >
      {gifs.map(singleGif => 
         <Gif 
          
           key={singleGif.id}
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
          />
        )}
    </div>
}