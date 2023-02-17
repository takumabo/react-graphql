import './App.css';
import Divider from '@mui/material/Divider';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// call endpoint from .env 
const uri = process.env.REACT_APP_BACKEND_ENDPOINT

// setup apollo client
const httpLink = createHttpLink({ uri })
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const cache = new InMemoryCache();
const apollo = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});
function App() {
  return (
    <ApolloProvider client={apollo}>
      <AddBook />
      <Divider sx={{ border: '1px solid red' }} />
      <BookList />
    </ApolloProvider>
  );
}

export default App;
