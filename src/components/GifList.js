import React from 'react'

const GifList = props => {
    console.log(props)
    return (
        <ul>
            {props.gifs.map( gif => 
                <li>
                    <img src={gif}/>
                </li> 
            )}
        </ul>
    )

}

export default GifList