import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Orderreview from '../src/components/Orderreview/Orderreview';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound'
import Placeorder from './components/Placeorder/Placeorder';
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/orderreview" component={Orderreview} />
          <Route exact path="/placeorder" component={Placeorder}/>
          <Route exact path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
