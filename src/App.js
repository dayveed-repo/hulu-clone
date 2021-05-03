import './App.css';
import Header from './Header.js';
import Nav from './Nav';
import Results from './Results';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieInfo from './MovieInfo';
import { useSelector } from 'react-redux';

function App() {

  const SelectedMovie = useSelector(state => state.SelectedMovie)
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          
          <Switch>
              <Route exact path="/">
                <Nav />
                <Results />
              </Route>

              <Route path={`/${SelectedMovie}`} >
                <MovieInfo />
              </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
