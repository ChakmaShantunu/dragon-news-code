
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard/NewsDetailsCard';
import { useEffect, useState } from 'react';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {

        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);

    }, [data, id])
    console.log(data, id);
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='max-w-7xl mx-auto grid grid-cols-12 gap-5'>
                <section className='mb-5 col-span-9'>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;