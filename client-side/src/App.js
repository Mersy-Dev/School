import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Body/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import AdminDashboard from './pages/AdminDashboard';
import Dash from './components/Body/Dash';
import logo from './logo.svg';
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import TeacersPage from './components/Body/Teachers/TeacersPage';
import StudentForm from './components/Body/Students/StudentForm';
import TeachersForm from './components/Body/Teachers/TeachersForm';
import EditTeach from './components/Body/Teachers/EditTeach';
import Loginn from './pages/Loginn';
import Registration from './pages/Registration';
import Identiti from './components/Body/Identiti';

function App() {
  
  return (
    <>
    

    <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adlog' element={<Loginn />} />
        <Route path='/adreg' element={<Registration />} />
        <Route path='/users' element={<Identiti />} />



        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/dash' element={<Dash />} />
        <Route path='/teachers_page' element={<TeacersPage />} />
        <Route path='/creat_studnt' element={<StudentForm />} />
        <Route path='/creat_tee' element={<TeachersForm />} />
        <Route path='/edit_teac/:id' element={<EditTeach />} />

      </Routes>
      </BrowserRouter>
      {/* <ToastContainer/> */}




    
    </>
  );
}

export default App;
