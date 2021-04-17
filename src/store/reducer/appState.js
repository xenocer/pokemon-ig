const initState = {
  suggestionBoxOpen: false,
} ;
export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_SUGGEST_BOX':
      return {
        suggestionBoxOpen: payload
      }
    default:
      return state
  }
}
