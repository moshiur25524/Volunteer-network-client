import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Donation from './Components/Pages/Donation';
import Events from './Components/Pages/Events';
import Blogs from './Components/Pages/Blogs';
import Login from './Login';
import Admin from './Components/Pages/Admin';
import Header from './Components/Pages/Header';
import Register from './Components/Pages/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/donation' element={<Donation></Donation>}></Route>
          <Route path='/events' element={<Events></Events>}></Route>
          <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/Admin' element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
