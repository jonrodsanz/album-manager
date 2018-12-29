import cardsExamples from "../others/cardsExamples"

const albumReducer = (state = cardsExamples, action) => {
  switch(action.type){
    case 'ADD_ALBUM':
      return state.concat([action.album])
    case 'DELETE_ALBUM':
      console.log(action.id)
      return state.filter((album) => album.id !== action.id)
    default:
      return state
  }
}

export default albumReducer