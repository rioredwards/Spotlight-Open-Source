import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ExampleTable from './components/ExampleTable/ExampleTable.js';
import AnimalTable from './components/AnimalTable/AnimalTable.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/example/table" component={ExampleTable} />
        <Route path="/table" component={AnimalTable} />
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
