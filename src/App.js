import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Orderreview from '../src/components/Orderreview/Orderreview';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound'
import Placeorder from './components/Placeorder/Placeorder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Authprovider from './Context/Authprovider';
import Privateroute from './Privateroute/Privateroute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="app container-fluid">
      <Authprovider>
          <Router>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Shop} />
                <Privateroute exact path="/inventory">
                  <Inventory></Inventory>
                  </Privateroute>
                <Route exact path="/orderreview" component={Orderreview} />
                <Privateroute exact path="/placeorder" >
                  <Placeorder></Placeorder>
                </Privateroute>
                <Privateroute exact path="/shipping">
                  <Shipping></Shipping>
                </Privateroute>
                <Route exact path="/login">
                  <Login></Login>
                  </Route>
                <Route exact path="/register" component={Register} />
                <Route exact path="*" component={Notfound} />
              </Switch>
              <Footer></Footer>
            </Router>
      </Authprovider>
    </div>
  );
}

export default App;
