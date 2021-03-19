import ConstantTypes from './hotels.constants';

const INITIAL_STATE = {
  available_hotels: [],
  user: null
}


const hotelReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantTypes.LOAD_HOTELS:
      return {
        ...state,
        available_hotels: action.payload
      }

    case ConstantTypes.USER_DETAILS:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
}


export default hotelReducer;