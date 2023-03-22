import logo from './logo.svg';
import './App.css';
import Read from './Components/Read';

import Teacher from './Components/Teacher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Addstudent from './Components/Addstudent';

function App() {
  return (
    <div className="App">
      {/*<Read></Read>*/}
    {/*<Teacher></Teacher>*/}
   <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
            <Route path='/Read' element={<Read/>}></Route>
            <Route path='/Addstudent' element={<Addstudent/>}></Route>
      </Routes>
  </BrowserRouter>
  {/*<Addstudent></Addstudent>*/}
    </div>
  );
}

export default App;
