import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ExampleTable from './components/Table/ExampleTable.js';
import AnimalTable from './components/Table/AnimalTable.js';
import ExampleChart from './components/Chart/ExampleChart.js';
import AnimalChart from './components/Chart/AnimalChart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">My Table</Link>
        <Link to="/chart">My Chart</Link>
        <Link to="/table/example">Example Table</Link>
        <Link to="/chart/example">Example Chart</Link>
      </nav>
      <Switch>
        <Route exact path="/table/example" component={ExampleTable} />
        <Route path="/table" component={AnimalTable} />
        <Route exact path="/chart/example" component={ExampleChart} />
        <Route path="/chart" component={AnimalChart} />
      </Switch>
    </div>
  );
}

export default App;
