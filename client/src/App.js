import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/pages/:page" exact component={Home} />
        <Route path="/search/:searchQuery" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
