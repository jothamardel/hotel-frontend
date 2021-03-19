import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';


const Card = (props) => (
  <div className='card_container'>
    <div className="card_initial">
      <h1>{props.name.split('')[0]}</h1>
    </div>
    <div className="card_details">
      <p>Hotel: {props.name}</p>
      <p>City: {props.city}</p>
      <p>Rooms: {props.number_of_rooms}</p>
      <p>Price: ${props.price}</p>
    </div>
    <div className="card_button">
      <button>
        <Link to={`/hotel/${props._id}`}>Make Reservation</Link>
      </button>
    </div>
  </div>
);


export default Card;