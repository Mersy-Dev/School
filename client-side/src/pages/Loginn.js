// import React from 'react'
import Header from '../components/Navbar/Header'
import '../indexx.css'
import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa';
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../../src/components/Spinner'








function Loginn() {
    const [formData, setFormData] = useState({

        email: "",
        password: "",

    })



    const { email, password } = formData

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
        const adminData = {
            email,
            password,
        }

        dispatch(login(adminData))
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
                        <FaSignInAlt /> Login
                    </h1>
                    <p>Admin Login</p>
                </section>

                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter a valid email' onChange={onChange} />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <button type='submit' className='btn btn-block'>
                                Login
                            </button>
                        </div>
                    </form>
                </section>

            </div>


        </>
    )
}

export default Loginn