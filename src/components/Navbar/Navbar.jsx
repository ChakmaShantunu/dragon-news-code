
import { Link, NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {

    return (
        <div className='flex items-center justify-between gap-12 pt-12'>
            <div className=''></div>
            <div className='nav space-x-2 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img src={user} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;