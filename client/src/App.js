import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, split } from "@apollo/client";
import {Navigation, Footer} from './Components';

const httpLink = createHttpLink({
  uri: "/graphql"
})

const getToken = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function App() {
  const client = new ApolloClient({
    link: getToken.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          <Footer/>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
