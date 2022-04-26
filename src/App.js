import logo from './Assets/Images/logo-big.png';
import './App.scss';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Class from './Components/Pages/Class/Class'
import Grades from './Components/Pages/Grades/Grades'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/class' element={<Class/>}/>
            <Route path='/grades' element={<Grades/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
