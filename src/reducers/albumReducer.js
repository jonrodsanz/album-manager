import cardsExamples from "../others/cardsExamples"

const albumReducer = (state = cardsExamples, action) => {
  switch(action.type){
    case 'ADD_ALBUM':
      return state.concat([action.album])
    case 'DELETE_ALBUM':
      return state.filter((album) => album.id !== action.id)
    case 'EDIT_ALBUM':
      return state.map((album) => album.id === action.id ? {...album,editing:!album.editing}: album)
    case 'UPDATE_ALBUM':
      return state.map((album) => {
        if(album.id === action.id) {
          let {newTitle, newPrice, newAuthor, newImage} = action.album
          return {
            ...album,
            title: newTitle,
            price: newPrice,
            author: newAuthor,
            image: newImage,
            editing: !album.editing
          }
        } else return album;
      })
    default:
      return state
  }
}

export default albumReducer