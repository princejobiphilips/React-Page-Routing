import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import BookTicket from './Components/BookTicket';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Trains from './Components/Trains'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path ="/book" element={<BookTicket/>} ></Route>
        <Route path ="/login" element={<Login/>}></Route>
        <Route path ="/signup" element={<Signup/>}></Route>
        <Route path ="/trains" element={<Trains/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
