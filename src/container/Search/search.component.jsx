import React from 'react';
import Card from '../../components/Card/card.component';
import './search.styles.css';



class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "",
      arrival_date: '',
      departure_date: '',
      number_of_rooms: 0,
      available_hotel: []
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { arrival_date } = this.state;
    if (!arrival_date) return;
    fetch(`${process.env.REACT_APP_URL}search-hotel`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...this.state,
        arrival_date: Number(this.state.arrival_date.split('-').reduce((total, value) => total + value)),
        departure_date: Number(this.state.departure_date.split('-').reduce((total, value) => total + value))
      })
    })
      .then(res => res.json())
      .then(hotels => this.setState({ available_hotel: hotels }))
      .catch(console.log)
  }




  render() {
    return (
      <div >
        <form onSubmit={this.onFormSubmit} className="container">
          <div className="search_container">

            <div className="">
              <label htmlFor="city">Select City</label>
              <select name='city' onChange={this.onInputChange}>
                <option value="">Select city</option>
                <option value="city 1">City 1</option>
                <option value="city 2">City 2</option>
                <option value="city 3">City 3</option>
                <option value="city 4">City 4</option>
                <option value="city 5">City 5</option>
                <option value="city 6">City 6</option>
                <option value="city 7">City 7</option>
                <option value="city 8">City 8</option>
                <option value="city 9">City 9</option>
                <option value="city 10">City 10</option>
              </select>
            </div>

            <div>
              <label htmlFor="arrival_date">Arrival Date</label>
              <input type='date' name="arrival_date" onChange={this.onInputChange} />
            </div>

            <div>
              <label htmlFor="departure_date">Departure Date</label>
              <input type='date' name="departure_date" onChange={this.onInputChange} />
            </div>

            <div>
              <label htmlFor="number_of_rooms">Number of room(s)</label>
              <input type='number' name="number_of_rooms" onChange={this.onInputChange} />
            </div>
          </div>

          <div className="search_button">
            <button type="submit">Search</button>
          </div>
        </form>

        <div className="hotels">
          {
            !this.state.available_hotel.length ? null :
              this.state.available_hotel.map(hotel => <Card key={hotel._id} {...hotel} />)
          }
        </div>

      </div>
    );
  }
}

export default Search;