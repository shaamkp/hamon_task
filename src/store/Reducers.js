const initialState = {
  totalItems: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
