import React from "react";

// 1. Accept the props from the parent
const ProductCard = ({ product, addToCart, isArabic }) => {
  return (
    <article
      Id="Products"
      className="group flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all hover:-translate-y-2 hover:shadow-2xl "
    >
      <figure className="aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 relative ">
        {/* Use the dynamic image from the product data */}
        <img
          src={product.image || "/hero.png"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 "
        />
        <div className="absolute left-4 top-4 bg-orange-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider  ">
          {isArabic ? "جديد" : "New"}
        </div>
      </figure>

      <div className="p-4 flex flex-col items-start">
        {/* Use the dynamic name from the product data */}
        <h2 className="text-lg font-black text-gray-900 dark:text-white mb-1 uppercase">
          {isArabic && product.nameAr ? product.nameAr : product.name}
        </h2>

        {/* Use the dynamic price from the product data */}
        <p className="text-sm font-bold text-orange-600 mb-4">
          {isArabic
            ? `${product.price.toFixed(2)} د.أ`
            : `${product.price.toFixed(2)} JOD`}
        </p>

        {/* 2. THE FIX: The onClick event safely calls the function passed from the Grid */}
        <button
          className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-sm font-black uppercase  tracking-wider hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-colors"
          onClick={() => addToCart(product)}
        >
          {isArabic ? "أضف إلى السلة" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
