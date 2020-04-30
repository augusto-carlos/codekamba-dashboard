import React from 'react';

import NewUser from './pages/Blog/Users/NewUser';

import NewPost from './pages/Blog/Posts/NewPost';


import Header from './components/Header';
import SideNav from './components/SideNav';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Login from './pages/Login';

import Home from './pages/Home';
import Posts from './pages/Blog/Posts';
import Projects from './pages/Projects';
import Users from './pages/Blog/Users';

function App() {

  return (
    <div className="grid-container">
      <Router>
        <Header />
        <SideNav />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/new" component={NewUser} />

            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/new" component={NewPost} />

            <Route path="/repositorios" component={Projects} />
          </Switch>
        </main>
      </Router>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
