import './App.css';
import { Switch, Route } from 'react-router-dom';
import Search from '../../container/Search/search.component';
import Reservation from '../../container/Reservation/reservation.component'


function App() {
  return (
    <div className="App-header">
      <h1>Hotel Reservation</h1>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/hotel/:id' component={Reservation} />
      </Switch>
    </div>
  );
}

export default App;
