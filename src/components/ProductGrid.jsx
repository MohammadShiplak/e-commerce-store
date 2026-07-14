import React from "react";
import ProductCard from "./Product Card";

const ProductGrid = ({ addToCart, isArabic }) => {
  // 1. Your list of dynamic products!
  const products = [
    {
      id: 2,
      name: "Vapor-Dry Runner",
      nameAr: "حذاء فيبور-دراي للجري",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 5,
      name: "Onyx Gym Bag",
      nameAr: "حقيبة جيم أونيكس",
      price: 34,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Aero-Fit Tech Tee",
      nameAr: "تيشيرت ايرو-فيت التقني",
      price: 76,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 9,
      name: "Impact 2-in-1 Shorts",
      nameAr: "شورت إمباكت المزدوج",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 13,
      name: "Tempo Track Jacket",
      nameAr: "سترة تيمبو الرياضية",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 15,
      name: "All-Weather 1/4 Zip",
      nameAr: "سترة بسحاب ربعي",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 16,
      name: "Pulse Wireless Earbuds",
      nameAr: "سماعات نبض اللاسلكية",
      price: 34,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 20,
      name: "Iron-Grip Dumbbell 10kg",
      nameAr: "دمبل قبضة حديدية 10 كجم",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 24,
      name: "Swift Mesh Cap",
      nameAr: "قبعة سويفت مش",
      price: 43,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 27,
      name: "Focus Lifting Belt",
      nameAr: "حزام رفع الأثقال فوكس",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    },
  ];
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      {/* 2. Section Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white italic">
          {isArabic ? "أحدث الإصدارات" : "Latest Drops"}
        </h2>
      </div>

      {/* 3. THE GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* 4. Loop through the products array and create one Card for each item */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            isArabic={isArabic}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
