import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TheMap from './pages/TheMap';
import Actualite from './pages/Actualite';
import Admin from './pages/Admin';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={TheMap} />
        <Route path="/actualite" component={Actualite} />
        <Route path="/admin" component={Admin} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
