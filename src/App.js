import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Normalize from 'react-normalize';
import Home from './components/Home';

const App = () => (
    <>
      <Normalize />
      <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </HashRouter>
    </>
  );

export default App;
