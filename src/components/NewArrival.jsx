import React, { useState, useEffect } from "react";
import { products as allProducts } from "../assets/asset.js";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./productCardSkeleton";

function NewArrival() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sortedProducts = [...allProducts].sort((a, b) => b.date - a.date);
      const latest = sortedProducts.slice(0, 8);
      const formattedProducts = latest.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image[0],
      }));
      setProducts(formattedProducts);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Latest Arrivals</h2>
      <div className="overflow-x-scroll overflow-y-hidden flex gap-8 py-4">
        {isLoading
          ? [...Array(8)].map((_, index) => <ProductCardSkeleton key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
}

export default NewArrival;
