import './App.css';
import BookList from './components/BookList';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// call endpoint from .env 
const uri = process.env.REACT_APP_BACKEND_ENDPOINT

// setup apollo client
const cache = new InMemoryCache();
const apollo = new ApolloClient({
  uri,
  cache
})
function App() {
  return (
    <ApolloProvider client={apollo}>
      <BookList />
    </ApolloProvider>
  );
}

export default App;
