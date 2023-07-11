import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import '../../index.css'
import { logout, reset } from '../../features/auth/authSlice'



function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { admin } = useSelector((state) => state.auth)


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <Link to='/'>Home Page</Link>
                </div>
                <ul>
                    {admin ? (<li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                    ) : (
                        <>
                            <li>
                                <Link to='/adlog'>
                                    <FaSignInAlt /> Login
                                </Link>
                            </li>

                            <li>
                                <Link to='/adreg'>
                                    <FaUser /> Register
                                </Link>
                            </li>

                        </>)
                    }

                </ul >

            </header >
        </>
    )
}

export default Header