import React from "react";

import Route from './Route';

import { BrowserRouter, Switch } from 'react-router-dom';

import Header from '../components/Header';
import SideNav from '../components/SideNav';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Posts from '../pages/Blog/Posts';
import NewPost from '../pages/Blog/Posts/NewPost';
import Users from '../pages/Blog/Users';
import NewUser from '../pages/Blog/Users/NewUser';
import Categories from '../pages/Blog/Categories';
import NewCategory from '../pages/Blog/Categories/NewCategory';
import NotFound from '../pages/NotFound';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated() ? (
//                 <Component {...props} />
//             ) : (
//                     <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//                 )
//         }
//     />
// );

const Routes = () => (
    <div className="grid-container">
        <BrowserRouter>
            <Header />
            <SideNav />
            <main className="main">
                <Switch>
                    <Route path="/Login" exact component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/users" exact component={Users} />
                    <Route path="/users/new" component={NewUser} />

                    <Route path="/posts" exact component={Posts} isPrivate />
                    <Route path="/posts/new" component={NewPost} />

                    <Route path="/categories" exact component={Categories} />
                    <Route path="/categories/new" component={NewCategory} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
        </BrowserRouter>
        <footer className="footer"></footer>
    </div>
)

export default Routes;
