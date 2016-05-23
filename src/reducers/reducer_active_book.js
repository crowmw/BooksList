//State argument nie jest state aplikacji ale state za ktory
//odpowidzialny jest ten reducer
export default function(state, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload

    default:
      return null;
  }
}
