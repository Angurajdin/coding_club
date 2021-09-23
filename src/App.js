import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LoginSignup from './LoginSignup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginSignup/>
        </Route>
        <Route exact path="/forgetpassword">
          <h1>Forget Password Page</h1>
        </Route>
        <Route path="*">
          <h2>404, Page not found</h2>
          <Link to="/">Back to Home Page</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
