import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Donation from './Components/Pages/Donation';
import Events from './Components/Pages/Events';
import Blogs from './Components/Pages/Blogs';
import Login from './Components/Pages/Login';
import Admin from './Components/Pages/Admin';
import Header from './Components/Pages/Header';
import Register from './Components/Pages/Register';
import NotFound from './Components/Pages/NotFound';
import ProtectedRoute from './Components/Pages/ProtectedRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={
          <ProtectedRoute>
            <Events></Events>
          </ProtectedRoute>
        }></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
