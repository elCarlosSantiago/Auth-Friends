import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components.js/NavBar';
import LoginPage from './components.js/LoginPage';
import Friends from './components.js/Friends';
import PrivateRoute from './components.js/PrivateRotue';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/friends" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
