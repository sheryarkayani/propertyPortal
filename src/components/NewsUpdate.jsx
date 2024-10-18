import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    image: "/blogimg1.jpg",
    title: "Real Estate Investment Strategies in 2024",
    description: "Discover top strategies to boost your investment in real estate for the upcoming year.",
    date: "January 10, 2024",
  },
  {
    id: 2,
    image: "/blogimg2.gif",
    title: "How to Choose the Perfect Home",
    description: "A guide to help you choose the best home suited for your lifestyle and budget.",
    date: "February 5, 2024",
  },
  {
    id: 3,
    image: "/blogimg3.jpg",
    title: "Top Real Estate Trends to Watch",
    description: "Stay ahead of the curve with the latest trends shaping the real estate market.",
    date: "March 2, 2024",
  },
];

export default function BlogCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Index of the currently active blog

  const scrollLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative bg-white py-16 overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-600 animate-fadeIn">
        Our Latest Blogs
      </h2>

      <div className="flex justify-center space-x-6 px-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 relative ${
              index === activeIndex ? "scale-[1.05]" : "opacity-80"
            }`}
          >
            <div className="relative group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg transition-all duration-300"
              />
              <span className="absolute bottom-2 left-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">
                {blog.date}
              </span>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-medium font-serif text-green-600 mb-2">
                {blog.title}
              </div>
              <div className="text-sm font-serif text-gray-800">
                {blog.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollLeft}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollRight}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
