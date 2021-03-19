import ConstantTypes from './hotels.constants';



export const loadAllHotels = (hotels) => ({
  type: ConstantTypes.LOAD_HOTELS,
  payload: hotels
});

export const userDetails = (data) => ({
  type: ConstantTypes.USER_DETAILS,
  payload: data
});