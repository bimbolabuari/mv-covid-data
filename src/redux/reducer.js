import * as actions from '../actions/actions';

const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA:
      return state;
    case actions.SET_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default Reducer;
