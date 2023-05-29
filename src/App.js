import React from 'react';
import {ApolloProvider} from '@apollo/client'
import Hotel from './components/Hotel'

import client from './client.js'
function App() {
  return (
    <ApolloProvider client={client}>
      <Hotel  />
    </ApolloProvider>
  );
}

export default App;
