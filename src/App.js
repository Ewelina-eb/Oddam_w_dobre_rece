import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Normalize from 'react-normalize';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import LogOut from './components/LogOut/LogOut';

const App = () => (
    <>
      <Normalize />
      <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/logowanie" component={LogIn}></Route>
                <Route path="/rejestracja" component={Register}></Route>
                <Route path="/wylogowano" component={LogOut}></Route>
            </Switch>
        </HashRouter>
    </>
  );

export default App;
