import logo from './assets/images/logo-big.png';
import './App.scss';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Home from './components/Pages/Home/Home'
import Class from './components/Pages/Class/Class'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/class' element={<Class/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
