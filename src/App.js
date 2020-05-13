import React from 'react';

import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import Header from './components/Header';
import SideNav from './components/SideNav';

import Home from './pages/Home';
import Posts from './pages/Blog/Posts';
import NewPost from './pages/Blog/Posts/NewPost';
import Users from './pages/Blog/Users';
import NewUser from './pages/Blog/Users/NewUser';
import Categories from './pages/Blog/Categories';
import NewCategory from './pages/Blog/Categories/NewCategory';

function App() {

  return (
    <div className="grid-container">
      <BrowserRouter>
        <Header />
        <SideNav />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/new" component={NewUser} />

            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/new" component={NewPost} />

            <Route path="/categories" exact component={Categories} />
            <Route path="/categories/new" component={NewCategory} />
          </Switch>
        </main>
      </BrowserRouter>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
