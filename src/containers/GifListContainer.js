import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.getGifs()
    }

    getGifs = async ( query = 'cat') => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=` +  `${query}` + `&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        const data = await response.json()
        const gifs = data.data.map(gif => gif.images.original.url)
        console.log(gifs)
        console.log(this)
        this.setState({ gifs })
    }

    render() {
        return(
        <div>
            <GifSearch getGifs={this.getGifs} />
            <GifList gifs={this.state.gifs} />
        </div>
        )
    }

}

export default GifListContainer