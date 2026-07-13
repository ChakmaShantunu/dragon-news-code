

const categories = [
    "National",
    "International",
    "Sports",
    "Entertainment",
    "Culture",
    "Politics",
    "Health",
    "Technology",
];

const LeftAside = () => {
    return (
        <aside>
            <h2 className="text-xl font-bold mb-4">All Category</h2>

            <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="btn btn-base-200 justify-start w-full"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default LeftAside;