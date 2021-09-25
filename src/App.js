import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="E-store">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
