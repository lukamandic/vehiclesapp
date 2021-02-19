import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

export const link = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ? 'https://vehiclesbackend.structika.com' : 'http://localhost:3900'
});
console.log(process.env.NODE_ENV)
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
<ApolloProvider client={client}>
	<App />
</ApolloProvider>, 
document.querySelector('#root'));

