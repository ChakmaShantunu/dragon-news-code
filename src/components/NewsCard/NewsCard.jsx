import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {

    const [showFull, setShowFull] = useState(false);
    return (
        <div className="card bg-base-100 shadow-md p-5 rounded-xl">
            {/* Author */}
            <div className="flex justify-between items-center bg-base-200 p-5">

                {/* Left */}
                <div className="flex items-center gap-5">
                    <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={news.author.img}
                        alt=""
                    />

                    <div>
                        <h3 className="font-bold">{news.author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(news.author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 text-2xl text-gray-500">
                    <CiBookmark className="cursor-pointer" />
                    <CiShare2 className="cursor-pointer" />
                </div>

            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold my-6 leading-snug">
                {news.title}
            </h2>

            {/* Thumbnail */}
            <img
                className="w-full rounded-lg"
                src={news.image_url}
                alt=""
            />

            {/* Details */}
            <div className="mt-6 text-gray-600">
                <p>
                    <span className="font-semibold">Wednesday, August 24, 2022</span>
                    {" | "}
                    Tags: {news.tags.join(", ")}
                </p>

                <p className={`mt-4 ${showFull ? "" : "line-clamp-4"}`}>
                    {news.details}
                </p>
                {/* <button onClick={() => setShowFull(!showFull)} className="text-orange-500 font-semibold cursor-pointer">
                    {" "}
                    {showFull ? "Show less" : "Read More"}
                </button> */}
                <Link to={`/newsDetails/${news.id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-orange-500 font-semibold cursor-pointer">Read More</Link>
            </div>

            {/* Footer */}
            <div className="border-t mt-6 pt-5 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <div className="text-orange-400 flex">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <span className="font-semibold">4.9</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{news.total_view}</span>
                </div>

            </div>
        </div >
    );
};

export default NewsCard;