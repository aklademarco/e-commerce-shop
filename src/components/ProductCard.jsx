import React from "react";
import { FiEye, FiShoppingCart } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="min-w-52 w-52 sm:min-w-68 sm:w-68">
      <div className="relative">
        <a className="block" href="#">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="aspect-14/16 hover:shadow-lg transition-all duration-700 ease-in-out object-cover w-full rounded-2xl"
            />
          </div>
        </a>

        <div className="absolute right-2 top-2 flex flex-col gap-1">
          <div className=" relative inline-block group">
            <button
              aria-label="Quick view"
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center  hover: cursor-pointer text-gray-700"
            >
              <FiEye />
            </button>
            <span
              id="tooltip-add"
              role="tooltip"
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              {" "}
              View Details{" "}
            </span>
          </div>

          <div className="relative inline-block group">
            <button
              aria-label="Add to cart"
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center hover: cursor-pointer justify-center text-gray-700"
            >
              <FiShoppingCart />
            </button>
            <span
              id="tooltip-add"
              role="tooltip"
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-purple-900"
            >
              {" "}
              Add to cart{" "}
            </span>
          </div>
        </div>

        <div className="py-4 px-3 text-sm md:text-lg flex justify-between items-start">
          <div className="pr-2 overflow-hidden">
            <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
              {product.name || "Untitled"}
            </h3>
          </div>
          <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">
            GHS{product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
