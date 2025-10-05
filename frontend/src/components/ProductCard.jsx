import { FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";

function ProductCard({ image, price, title, added, onToggleCart }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-primary">
      {/* Image */}
      <img
        src={image}
        alt="Ite,"
        className="w-full"
      />
      <div className="p-3 text-white">
        {/* Title and Price */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span className="text-sm">{price}</span>
        </div>

        {/* Likes and Button */}
        <div className="flex justify-end items-center">
          <button
            onClick={onToggleCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:cursor-pointer transition ${
              added ? 'bg-primary text-white border border-white' : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            {added ? <FaTimes /> : <FaShoppingCart />}
            <span>{added ? 'Remove from Cart' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;