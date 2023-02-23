import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'
import Clock from './Clock'
import DeleteAll from './deleteAll';


function Welcome(props){
    return <h1>Welcome, {props.name}</h1>
  }

class App extends Component {
    state = {
        characters : [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    }
    

    // create simple function here to remove character
    removeCharacter = (index) => {
        //now that we've defined this.state, we can use 
        const { characters } = this.state

        // we can use setState to update the state 
        this.setState({
            // remove character at passed in index by returning 
            // a new list excluding that character
            characters: characters.filter((_, i) => {
                return i !== index
            }),
        })
    }

    // create method to add a character
    addCharacter = (character) => {
        //now that we've defined this.state, we can use
        const { characters } = this.state

        // we can use setState to update the state
        this.setState({
            // add character to the end of the list
            characters: [...characters, character],
        })
    }


    // create method to remove all characters by returning an empty list
    removeAllCharacters = () => {

        // we can use setState to update the state
        this.setState({
            // set the state to an empty list
            characters: [],
        })
    }



    render() {

        // make sure return only returns one html element!  
        // we are passing the characters from state
        // and the removeCharacter function that we wrote
        // so table can use it later on 
        return (
          <div className="container"> 
            <Welcome name="Enzo"/>
            <Clock />
            <p>Add a character with a name and a job to the table.</p>
            <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}  /> 
            <Form addCharacter={this.addCharacter} />
            <DeleteAll removeAllCharacters={this.removeAllCharacters} />
            
          </div>
        )
      }
}

export default App