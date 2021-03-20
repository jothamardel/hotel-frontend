import ConstantTypes from './hotels.constants';

const INITIAL_STATE = {
  available_hotels: [],
  user: null,
  pending: false,
  message: '',
  error: ''
}


const hotelReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantTypes.RESERVE_HOTEL_START:
      return {
        ...state,
        pending: true,
        message: '',
        error: ''
      }
    case ConstantTypes.RESERVE_HOTEL_SUCCESS:
      return {
        ...state,
        pending: false,
        message: action.payload,
        error: ''
      }
    case ConstantTypes.RESERVE_HOTEL_FAILED:
      return {
        ...state,
        pending: false,
        message: '',
        error: action.payload
      }
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