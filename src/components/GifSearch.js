import React from 'react'

class GifSearch extends React.Component {
    
    state = {
        query: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getGifs(this.state.query)
    }

    handleChange = event => {
        this.setState({ query: event.target.value })
    }

    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Search Gifs
                    <input type='text' value={this.state.query} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default GifSearch

