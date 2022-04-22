import logo from './assets/images/logo-big.png';
import './App.scss';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import PageClass from './Pages/PageClass/Class'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/class' element={<PageClass/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
