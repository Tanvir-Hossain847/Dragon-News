import { BsEyeFill, BsStarFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { LuBookMarked } from "react-icons/lu";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    id,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="w-11/12 mx-auto space-y-3 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <LuBookMarked className="w-6 h-6 cursor-pointer hover:text-blue-500" />
          <FiShare2 className="w-6 h-6 cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-5 font-bold text-gray-900 text-lg leading-snug">
        {title}
      </h2>

      {/* Image */}
      <div className="px-5 py-3">
        <img
          src={thumbnail_url}
          alt="News"
          className="w-full h-3/6 object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="px-5 text-sm text-gray-600 leading-relaxed">
        {details.slice(0, 220)}...
        <Link to={`/news/${id}`} className="text-orange-500 font-medium cursor-pointer">
          {" "}
          Read More
        </Link>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 px-5 py-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t mt-2 text-sm text-gray-500">
        <div className="flex items-center text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <BsStarFill key={i} className="w-5 h-5 fill-current" />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)} ({rating.badge})
          </span>
        </div>
        <div className="flex items-center gap-1">
          <BsEyeFill className="w-5 h-5" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;