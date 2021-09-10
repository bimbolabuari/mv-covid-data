import GET_DATA from '../actions/actions';

const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default Reducer;
