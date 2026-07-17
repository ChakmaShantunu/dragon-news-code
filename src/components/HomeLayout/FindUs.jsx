import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
    <div>
        <h2 className="text-xl font-bold mb-4 mt-12">Find Us On</h2>

        <div className="border rounded-lg overflow-hidden">

            <a
                href="#"
                className="flex items-center gap-4 px-5 py-4 border-b hover:bg-gray-100 transition"
            >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
                    <FaFacebookF />
                </div>

                <span className="font-medium text-gray-600">
                    Facebook
                </span>
            </a>

            <a
                href="#"
                className="flex items-center gap-4 px-5 py-4 border-b hover:bg-gray-100 transition"
            >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sky-500">
                    <FaTwitter />
                </div>

                <span className="font-medium text-gray-600">
                    Twitter
                </span>
            </a>

            <a
                href="#"
                className="flex items-center gap-4 px-5 py-4 hover:bg-gray-100 transition"
            >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-pink-500">
                    <FaInstagram />
                </div>

                <span className="font-medium text-gray-600">
                    Instagram
                </span>
            </a>

        </div>
    </div>
    );
};

export default FindUs;