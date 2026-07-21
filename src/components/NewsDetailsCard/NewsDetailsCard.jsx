import React from 'react';
import { useNavigate } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    const navigate = useNavigate();
    return (
        <div>

            {/* Header Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">Dragon News</h2>

            {/* Card Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

                {/* Featured Image */}
                <div className="mb-6">
                    <img
                        src={news.image_url}
                        alt="News Preview"
                        className="w-full h-auto rounded-md object-cover"
                    />
                </div>

                {/* News Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                    {news.title}
                </h1>

                {/* Meta / Date & Description */}
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    {news.details}
                </p>

                {/* Action Button */}
                <div>
                    <button
                        onClick={() => navigate(-1)} // ৩. onClick ইভেন্টে navigate(-1) ব্যবহার করুন
                        className="inline-flex items-center bg-[#D83256] hover:bg-[#c2284b] text-white text-sm font-medium px-5 py-2.5 rounded transition-colors duration-200 cursor-pointer"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        All news in this category
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsCard;