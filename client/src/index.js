import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Cookies from 'js-cookie';
import { AuthContext } from './context/auth';
import Router from './routes';
import * as serviceWorker from './serviceWorker';

const authToken = Cookies.get('token');

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: authToken ? authToken : ''
      }
    });
  }
});

const App = () => {
  return (
    <AuthContext.Provider value={{ authToken }}>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
