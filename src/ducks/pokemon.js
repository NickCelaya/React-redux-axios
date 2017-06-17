//imports
import axios from "axios"


//string constants that get are used in the reducer
const GET_POKE = "GET_POKE";

// state/initialState
const initialState = {
  pokemon: []
}


//action creator...being exported, however since it is not on (export default) the function has to imported using object destructoring
export function getPokemon(){
console.log("Nick I fired");
const pokeData = axios.get("http://pokeapi.co/api/v2/pokemon")
.then(response => {
  // console.log(response);
  return response.data.results;
})
  return {
    type: GET_POKE,
    payload: pokeData
  }
}



//reducer
function reducer(state = initialState, action){
  switch (action.type){
    case GET_POKE + "_FULFILLED":
    return Object.assign({}, state, {pokemon: action.payload}); //taking initialState and adding the action payload which contains our axios response object with data to the key pokemon on the initialState and creating new state with our data. object.assign creats the copy of intital state and adds the action.payload (data) to intial state key pokemon. essentially creating a new intial state object. 
    default:
    return state;
  }
}


//exporting default only one function can be on export default. Since reducer is on default there is no object destructoring needed when import reducer.
export default reducer;
