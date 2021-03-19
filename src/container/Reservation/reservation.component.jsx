import React from 'react';
import './reservation.styles.css';


class Reservation extends React.Component {
  render() {
    return (
      <div className="reserve_container">
        <form action="">
          <div className="reserve">
            <label htmlFor="first_name"></label>
            <input type="text" name="first_name" placeholder="First Name" />
          </div>
          <div className="reserve">
            <label htmlFor="last_name"></label>
            <input type="text" name="last_name" placeholder="Last Name" />
          </div>
          <div className="reserve">
            <label htmlFor="phone"></label>
            <input type="text" name="phone" placeholder="Phone No." />
          </div>
          <div className="reserve">
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="reserve">
            <label htmlFor="hotel_id"></label>
            <input type="text" name="hotel_id" placeholder="hotel_id" />
          </div>
          <div className="reserve">
            <label htmlFor="arrival_date"></label>
            <input type="text" name="arrival_date" placeholder="Arrival Date" />
          </div>
          <div className="reserve">
            <label htmlFor="departure_date"></label>
            <input type="text" name="departure_date" placeholder="Departure Date" />
          </div>
          <div className="reserve">
            <button type='submit'>Reserve</button>
          </div>
        </form>

      </div>
    );
  }
}


export default Reservation;