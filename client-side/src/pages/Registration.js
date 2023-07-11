// import React from 'react'
import Header from '../components/Navbar/Header'
import '../indexx.css'
import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'









function Registration() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
    })



    const { firstName, lastName, email, password, cpassword } = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { admin, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || admin) {
            navigate('/admindashboard')
        }
        dispatch(reset())


    }, [admin, isError, isLoading, isSuccess, navigate, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== cpassword) {
            toast.error("password does not match")
        } else {
            const adminData = {
                firstName,
                lastName,
                email,
                password,
            }
            dispatch(register(adminData))
        }
    }


    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <div className="container">
                <Header />

                <section className="heading">
                    <h1>
                        <FaUser /> Register
                    </h1>
                    <p>Please Create An Account</p>
                </section>

                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" id='fname' name='firstName' value={firstName} placeholder='First name' onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id='lname' name='lastName' value={lastName} placeholder='Last name' onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter a valid email' onChange={onChange} />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id='cpassword' name='cpassword' value={cpassword} placeholder='Confirm password' onChange={onChange} />
                        </div>

                        <div className="form-group">
                            <button type='submit' className='btn btn-block'>
                                Register
                            </button>
                        </div>
                    </form>
                </section>

            </div>


        </>
    )
}

export default Registration