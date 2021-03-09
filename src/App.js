import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Movies from './Components/Movies/Movies';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Contact from './Components/Contact/Contact';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Movies/>
          </Route>
          <Route path='/movie/:id'>
            <MovieDetails/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='*'>
            <h3>Sorry page not found.</h3>
          </Route>
        </Switch>
        <Footer/>
      </Router>
  )
}

export default App;
