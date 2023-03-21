import logo from './logo.svg';
import './App.css';
import Read from './Components/Read';

import Teacher from './Components/Teacher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/*<Read></Read>*/}
    {/*<Teacher></Teacher>*/}
    <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
            <Route path='/read' element={<Read/>}></Route>
            <Route path='/teacher' element={<Teacher/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
