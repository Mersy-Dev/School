import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Body/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import AdminDashboard from './components/Body/AdminDashboard';
import Dash from './components/Body/Dash';
import logo from './logo.svg';
import './App.css';
import TeacersPage from './components/Body/Teachers/TeacersPage';
import StudentForm from './components/Body/Students/StudentForm';
import TeachersForm from './components/Body/Teachers/TeachersForm';
import EditTeach from './components/Body/Teachers/EditTeach';

function App() {
  
  return (
    <>
    

  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/dash' element={<Dash />} />
        <Route path='/teachers_page' element={<TeacersPage />} />
        <Route path='/creat_studnt' element={<StudentForm />} />
        <Route path='/creat_tee' element={<TeachersForm />} />
        <Route path='/edit_teac/:id' element={<EditTeach />} />



        












      </Routes>
    
    </>
  );
}

export default App;
