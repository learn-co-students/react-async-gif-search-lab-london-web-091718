import React from 'react'

const GifList = ({ gifs }) => {
    return (
        <ul>
            {gifs.map(gif => 
            <li>
                <img key={gif.id} src={gif.url} alt={gif}/>
            </li>)} 
        </ul>
    )
}



export default GifList; 