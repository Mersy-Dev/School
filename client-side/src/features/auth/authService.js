import axios from 'axios';


const API_URL = 'http://localhost:5500/users/sign'
const API_URLL = 'http://localhost:5500/users/login'




//Reguster Admin

const register = async(adminData) =>{
    const response = await axios.post(API_URL, adminData)

    if (response.data){
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

// Admin login

const login = async(adminData) =>{
    const response = await axios.post(API_URLL, adminData)

    if (response.data){
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

// logout admin

const logout = () => {
    localStorage.removeItem('admin')

}










const authService = {
    register,
     login, 
    logout
}

export default authService  