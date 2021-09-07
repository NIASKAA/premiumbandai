import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import { Provider } from "react-redux";
import { setContext } from '@apollo/client/link/context';
import {Navigation, Footer} from './Components';
import {Home, HighGrade, RealGrade, MasterGrade, PerfectGrade, SDGrade, Converges, Login, SignUp, Profile} from './Pages'
import store from './utils/state/store';

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
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navigation />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path="/hg" component={HighGrade}/>
                <Route exact path="/mg" component={MasterGrade}/>
                <Route exact path="/rg" component={RealGrade}/>
                <Route exact path="/pg" component={PerfectGrade}/>
                <Route exact path="/sd" component={SDGrade}/>
                <Route path="/converges/:id" component={Converges}/>
              </Switch>
            <Footer/>
          </Router>
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
