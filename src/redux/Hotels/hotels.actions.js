import ConstantTypes from './hotels.constants';



export const loadAllHotels = (hotels) => ({
  type: ConstantTypes.LOAD_HOTELS,
  payload: hotels
});

export const userDetails = (data) => ({
  type: ConstantTypes.USER_DETAILS,
  payload: data
});

export const hideMessage = () => ({
  type: ConstantTypes.HIDE_MESSAGE
})

export const makeReservation = details => dispatch => {
  dispatch({
    type: ConstantTypes.RESERVE_HOTEL_START
  });
  console.log(process.env.REACT_APP_URL)
  fetch(`${process.env.REACT_APP_URL}reserve`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...details })
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      dispatch({
        type: ConstantTypes.RESERVE_HOTEL_FAILED,
        payload: res
      })
    })
    .then(data => dispatch({
      type: ConstantTypes.RESERVE_HOTEL_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: ConstantTypes.RESERVE_HOTEL_FAILED,
      payload: error
    }))
}