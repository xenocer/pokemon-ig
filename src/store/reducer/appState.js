const initState = {
  suggestionBoxOpen: false,
  hasMoreData: true
} ;
export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_SUGGEST_BOX':
      return {
        ...state,
        suggestionBoxOpen: payload
      }
    case 'SET_HAS_MORE_DATA':
      return {
        ...state,
        hasMoreData: payload
      }
    default:
      return state
  }
}
