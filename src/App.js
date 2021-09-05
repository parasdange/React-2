import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css';
import Navbar from './Menu/Navbar';
import { Switch,Route } from 'react-router-dom';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Services from './Pages/Services'

const App=()=>{

  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/services" component={Services}/>
    </Switch>
    
    </>
  )
}

export default App;
