import React, { useState, useEffect } from "react";
import { products as allProducts } from "../assets/asset.js";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./productCardSkeleton";

function NewArrival() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/v1/products/product`);
        if (!res.ok) throw new Error("Network response was not ok");
        const payload = await res.json();

        // api returns { success, count, data: [...] }
        const sourceArray = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
          ? payload.data
          : [];

        const formatted = sourceArray
          .map((p, i) => ({
            id: p.id ?? p._id ?? `${p.name ?? "prod"}-${i}`,
            name: p.name ?? p.title ?? "Untitled",
            price: Number(p.price) || 0,
            imageUrl:
              (Array.isArray(p.images) && p.images[0]) ||
              (Array.isArray(p.image) && p.image[0]) ||
              p.imageUrl ||
              p.thumbnail ||
              (allProducts[0] && allProducts[0].image[0]) ||
              "",
          }))
          .slice(0, 8);

        if (mounted) {
          setProducts(formatted);
        }
      } catch (err) {
        console.log(
          "Failed to fetch products, falling back to local data:",
          err
        );
        const sortedProducts = [...allProducts].sort((a, b) => b.date - a.date);
        const latest = sortedProducts.slice(0, 8);
        const formattedProducts = latest.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.image[0],
        }));
        if (mounted) {
          setProducts(formattedProducts);
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    const timer = setTimeout(loadProducts, 200);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Latest Arrivals</h2>
      <div className="overflow-x-scroll overflow-y-hidden flex gap-8 py-4">
        {isLoading
          ? [...Array(8)].map((_, index) => <ProductCardSkeleton key={index} />)
          : products.map((product, idx) => (
              <ProductCard key={product.id ?? idx} product={product} />
            ))}
      </div>
    </section>
  );
}

export default NewArrival;
