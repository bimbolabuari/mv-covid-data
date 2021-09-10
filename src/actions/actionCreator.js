import GET_DATA from './actions';

const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export default getData;
