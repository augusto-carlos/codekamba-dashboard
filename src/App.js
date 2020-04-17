import React from 'react';

import Posts from './pages/Blog/Posts';

import Header from './components/Header';
import SideNav from './components/SideNav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

import Users from './pages/Users';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <div className="grid-container">
      <Router>
        <Header />
        <SideNav />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/usuarios" component={Users} />
            
            <Route path="/posts" component={Posts} />
            
            <Route path="/repositorios" component={Projects} />
          </Switch>
        </main>
        <footer class="footer"></footer>
      </Router>
    </div>
  );
}

export default App;
