
import { Link, NavLink, useNavigate } from 'react-router';
import userPerson from "../../assets/userPerson.png"
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const navigate = useNavigate();

    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("You logged out");
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <div className='flex items-center justify-between gap-12 pt-12'>
            <div className=''>{user && user.email}</div>
            <div className='nav space-x-2 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img src={userPerson} alt="" />
                {/* <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link> */}
                {user ? <button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button> : <Link to="/auth/login" className=' btn btn-primary px-8'>Login</Link>}
            </div>
        </div >
    );
};

export default Navbar;