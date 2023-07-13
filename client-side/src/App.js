import { BrowserRouter, Route, useParams, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar/Navbar';
import Home from './components/Body/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import AdminDashboard from './pages/AdminDashboard';
import Dash from './components/Body/Dash';
import logo from './logo.svg';
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import TeacersPage from './components/Body/Students/StudentForm';
import Loginn from './pages/Loginn';
import Registration from './pages/Registration';
import Identiti from './components/Body/Identiti';
import StudentPage from './components/Body/Students/StudentPage';
import EditStudent from './components/Body/Students/EditStudent';
import TeachersForm from './components/Body/Teachers/TeachersForm';
import EditTeach from './components/Body/Teachers/EditTeach';
import StudentForm from './components/Body/Students/StudentForm';


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
          <Route path='/stud_page' element={<StudentPage />} />


          <Route path='/creat_tee' element={<TeachersForm />} />
          <Route path='/edit_teac/:id' element={<EditTeach />} />
          <Route path='/edit_stud/:id' element={<EditStudent />} />


        </Routes>
      </BrowserRouter>
      {/* <ToastContainer/> */}





    </>
  );
}

export default App;
