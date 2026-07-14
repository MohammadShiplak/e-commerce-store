import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import ProductCard from "./components/Product Card";
import Footer from "./components/Footer";

import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import { Toaster } from "react-hot-toast";
import { useApp } from "./context/AppContext";
function App() {
  const {
    isArabic,
    setIsArabic,
    cart,
    isDarkMode,
    setIsDarkMode,
    setIsCartOpen,
    addToCart,
    isCartOpen,
    updateQuantity,
    removeFromCart,
  } = useApp();

  return (
    <div
      className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-500"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Toaster position="bottom-center" />
      {/* Pass the cart array to the Header so it can count items */}
      <Header
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        isArabic={isArabic}
        setIsArabic={setIsArabic}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main>
        <Hero isArabic={isArabic} />
        {/* Pass the addToCart function to the Grid so buttons can use it */}
        <ProductGrid addToCart={addToCart} isArabic={isArabic} />
      </main>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isArabic={isArabic}
      />
      <Footer isArabic={isArabic} />
    </div>
  );
}

export default App;
