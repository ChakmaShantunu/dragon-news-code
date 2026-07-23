
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div className='max-w-7xl mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>

                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-4 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">

                    {state == "loading" ? < Loading /> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-4 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;