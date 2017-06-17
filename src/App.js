import React, { Component } from 'react';
import { connect } from "react-redux"
import { getPokemon } from "./ducks/pokemon"
import './App.css';

class App extends Component {

  constructor(){
    super(); //sets context for this

    this.state = {

    }
  }

//is mounting our data and since the function is on props from mapStateToProps we acesses the function through this.props.getPokemon getPokemon is our action creator that we imported
componentDidMount(){
  this.props.getPokemon();
}


  render() {

    //this info is coming from componentDidMount .
    const pokeMonsters = this.props.pokemon.map( (pokemon, index) => {
      return(
        <div key={index} className=""><a href="https://repl.it/languages/javascript">{pokemon.name}</a></div>
      )
    })

    return (
      <div className="App">
          <h1>Pokemon Store</h1>

            {pokeMonsters}

      </div>
    );
  }
}

//putting our new state on props so we can use it with props. 
function mapStateToProps(state){
  return {
    pokemon: state.pokemon
  }
}


export default connect(mapStateToProps, { getPokemon })(App)
