import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Normalize from 'react-normalize';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

const App = () => (
    <>
      <Normalize />
      <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/logowanie" component={LogIn}></Route>
                <Route path="/rejestracja" component={Register}></Route>
            </Switch>
        </HashRouter>
    </>
  );

export default App;
