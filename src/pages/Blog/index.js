import React from 'react';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';

const Blog = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <SideNav />
                <div className="content">
                    <h2>Blog</h2>
                </div>

            </div>
        </div>
    );
}

export default Blog;
