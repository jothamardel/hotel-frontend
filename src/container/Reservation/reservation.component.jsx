import React from 'react';
import { connect } from 'react-redux';
import './reservation.styles.css';


class Reservation extends React.Component {
  render() {

    let viewHotel = {}

    console.log(this.props.match.url.split('/')[2]);

    this.props.hotels.map(item => item._id === this.props.match.url.split('/')[2] ? viewHotel = { ...item } : null)
    console.log(viewHotel)
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
            <input type="text" name="hotel_id" placeholder={!viewHotel._id ? "hotel_id" : `${viewHotel.name}`} disabled />
          </div>
          <div className="reserve">
            <label htmlFor="arrival_date"></label>
            <input type="text" name="arrival_date" placeholder={!this.props.user.arrival_date ? "Arrival Date" : `${this.props.user.arrival_date}`} disabled />
          </div>
          <div className="reserve">
            <label htmlFor="departure_date"></label>
            <input type="text" name="departure_date" placeholder={!this.props.user.departure_date ? "Departure Date" : `${this.props.user.departure_date}`} disabled />
          </div>
          <div className="reserve">
            <label htmlFor="number_of_rooms"></label>
            <input type="text" name="number_of_rooms" placeholder={!this.props.user.number_of_rooms ? "Number of rooms" : `${this.props.user.number_of_rooms}`} disabled />
          </div>
          <div className="reserve">
            <button type='submit'>Reserve</button>
          </div>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  hotels: state.hotels.available_hotels,
  user: state.hotels.user
});



export default connect(mapStateToProps)(Reservation);