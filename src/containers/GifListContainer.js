import React, {Component, Fragment} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const apiKey = 'dc6zaTOxFJmzC'
const API = 'http://api.giphy.com/v1/gifs/search?q='

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchData()
    }
    
    fetchData = query => {
        fetch(`${API}${query}&api_key=${apiKey}&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(({data}) => 
                this.setState({
                    gifs: data.map(gif => 
                        ({url: gif.images.original.url, id: gif.id}))
                })
            )
    }


    render() {
        return (
            <Fragment>
                <GifSearch fetchGifs={this.fetchData}/>
                <GifList gifs={this.state.gifs}/>
            </Fragment>
        )
    }
}

export default GifListContainer;