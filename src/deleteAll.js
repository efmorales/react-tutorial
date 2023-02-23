// create a component button that will empty the table
import React, { Component } from 'react'

class DeleteAll extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.removeAllCharacters()}>Delete All</button>
            </div>
        )
    }
}

export default DeleteAll
