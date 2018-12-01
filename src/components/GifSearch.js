import React from 'react'

class GifSearch extends React.Component {

    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.fetchGifs(this.state.query)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:</label>
                <br></br>
                <input 
                    type='text' 
                    value={this.state.query}
                    onChange={this.handleChange}>
                </input>
                <br></br>
                <input type='submit' value='Find Gifs'></input>
            </form>
        )
    }
}

export default GifSearch;