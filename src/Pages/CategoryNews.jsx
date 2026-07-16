import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";


const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(typeof (id), data);

    useEffect(() => {
        const filteredNews = data.filter(news => news.category_id == id);
        console.log(id, filteredNews);
    }, [data, id])
    return (
        <div>
            <h2>Category News {id}</h2>
        </div>
    );
};

export default CategoryNews;