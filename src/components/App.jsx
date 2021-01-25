import React, { Component } from 'react';

import { Route, Redirect } from "react-router-dom";

import Header from './Header'
import Layout from './Layout'


class App extends Component {
    render() {
        return (
            <div className="project">
                <Header />
                <Route path="/"><Redirect to="/" /></Route>
                <Layout />
            </div>
        );
    }
}

export default App;
