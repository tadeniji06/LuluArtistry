"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import FilterTabs from "@/components/interactive/FilterTabs";
import { products } from "@/utils/portfolioData";

const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);

  const productCategories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'lashes', name: 'Lashes', count: products.filter(item => item.category === 'lashes').length },
    { id: 'nails', name: 'Nails', count: products.filter(item => item.category === 'nails').length },
    { id: 'tattoos', name: 'Tattoos', count: products.filter(item => item.category === 'tattoos').length },
    { id: 'brows', name: 'Brows', count: products.filter(item => item.category === 'brows').length },
    { id: 'tools', name: 'Tools', count: products.filter(item => item.category === 'tools').length }
  ];

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: string) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', productId);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="p-6 sm:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover premium beauty products and tools crafted for professionals 
          and beauty enthusiasts. Quality you can trust.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8">
        <FilterTabs
          filters={productCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                    favorites.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-700 hover:bg-white'
                  }`}
                >
                  <Heart 
                    size={16} 
                    className={favorites.includes(product.id) ? 'fill-current' : ''} 
                  />
                </button>
                <Link
                  href={`/product/${product.id}`}
                  className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm transition-colors"
                >
                  <Eye size={16} />
                </Link>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.featured && (
                  <span className="bg-primary-gold text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Sale
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-primary-gold uppercase tracking-wide">
                  {product.category}
                </span>
              </div>
              
              <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-primary-gold transition-colors line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product.id)}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold transition-colors ${
                  product.inStock
                    ? 'bg-primary-gold hover:bg-primary-gray text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={16} />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <ShoppingCart size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No products found
          </h3>
          <p className="text-gray-500">
            Try selecting a different category to see more products.
          </p>
        </div>
      )}

      {/* Load More Button */}
      {filteredProducts.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-primary-gold hover:bg-primary-gray text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;