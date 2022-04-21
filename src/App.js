import logo from './assets/images/logo-big.png';
import './App.scss';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import PageClass from './Pages/PageClass/Class'
import Login from './Pages/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/class' element={<PageClass/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
