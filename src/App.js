import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch,Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <>
    <Navbar />
    <Switch>  
      <Route exact path='/' component={Home}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/' />
    </Switch>
    </>
  )
}

export default App;
