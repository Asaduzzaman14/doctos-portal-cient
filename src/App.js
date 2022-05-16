import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequirAuth from './Pages/Login/RequirAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyAppoinment from './Pages/Dashbord/MyAppoinment';
import MyReview from './Pages/Dashbord/MyReview';
import MyHIstory from './Pages/Dashbord/MyHIstory';
import Users from './Pages/Dashbord/Users';



function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/about' element={<RequirAuth>
          <About />
        </RequirAuth>}></Route>

        <Route path='/appoinment' element={<RequirAuth>
          <Appoinment />
        </RequirAuth>}></Route>

        <Route path='/dashbord' element={<RequirAuth>
          <Dashbord />
        </RequirAuth>}
        >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='myhistory' element={<MyHIstory></MyHIstory>}></Route>
          <Route path='allusers' element={<Users></Users>}></Route>

        </Route>



        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
