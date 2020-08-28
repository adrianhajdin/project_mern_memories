import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';

import Posts from './components/Posts/Posts';

const App = () => (
  <Container maxWidth="lg">
    <AppBar style={{ borderRadius: 15, margin: '30px 0' }} position="static" color="inherit">
      <Typography style={{ color: 'rgba(0,183,255, 1)' }} variant="h2" align="center">Memories</Typography>
    </AppBar>
    <Posts />
  </Container>
);

export default App;
