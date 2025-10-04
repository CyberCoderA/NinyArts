import { FaHeart, FaShoppingCart } from "react-icons/fa";

function ProductCard({ image, price, title, rating }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-primary">
      {/* Image */}
      <img
        src={image}
        alt="Key Chain"
        className="w-full"
      />
      <div className="p-3 text-white">
        {/* Title and Price */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span className="text-sm">{price}</span>
        </div>

        {/* Likes and Button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <FaHeart className="text-white text-xl" />
            <span className="text-lg">{rating}</span>
          </div>
          <button className="flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-md hover:cursor-pointer hover:bg-gray-100 transition">
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
