import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import fetch from 'cross-fetch';

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const link = from([
  new HttpLink({
    uri: 'http://myapi.test/graphql',
    credentials: 'same-origin',
    fetch,
  }),
]);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;
