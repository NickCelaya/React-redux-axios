import axios from "axios"

const GET_POKE = "GET_POKE";

const initialState = {
  pokemon: []
}


export function getPokemon(){
console.log("Nick I fired");
const pokeData = axios.get("http://pokeapi.co/api/v2/pokemon")
.then(response => {
  console.log(response);
  return response.data.results;
})
  return {
    type: GET_POKE,
    payload: pokeData
  }
}




function reducer(state = initialState, action){
  switch (action.type){
    case GET_POKE + "_FULFILLED":
    return Object.assign({}, state, {pokemon: action.payload});
    default:
    return state;
  }
}


export default reducer;
