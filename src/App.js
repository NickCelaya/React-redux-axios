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

componentDidMount(){
  this.props.getPokemon();
}


  render() {

    //this info is coming from mapStateToProps putting pokemon on props.
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


function mapStateToProps(state){
  return {
    pokemon: state.pokemon
  }
}


export default connect(mapStateToProps, { getPokemon })(App)
