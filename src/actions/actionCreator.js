import * as actions from './actions';

export const getData = () => ({
  type: actions.GET_DATA,
});

export const setData = (payload) => ({
  type: actions.SET_DATA,
  payload,
});
