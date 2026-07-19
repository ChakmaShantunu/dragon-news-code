
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>

            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;