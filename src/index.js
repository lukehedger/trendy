import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import App from './App';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}
    req.options.headers.authorization = `Bearer ceab737f90d7ca46ba202d762baf0aded07a45a1`;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
