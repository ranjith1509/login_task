import React from 'react';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Landingpage from './Landingpage';




function App() {
  return (
<Router>
  <Routes>
     <Route exact path='/' element={<Home />} />    
 <Route path="/landing" element={<Landingpage /> }/>
 </Routes>
 </Router>
    

     )
}

export default App;
