import './App.css';
import { Switch, Route } from 'react-router-dom';
import Search from '../../container/Search/search.component';

function App() {
  return (
    <div className="App-header">
      <Switch>
        <Route exact path='/' component={Search} />
      </Switch>
    </div>
  );
}

export default App;
