/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Controls the slide-out
  const [isOpen, onClose] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("sorour-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isArabic, setIsArabic] = useState(() => {
    const savedLanguage = localStorage.getItem("language");

    return savedLanguage === "ar";
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  /*

*/
  // 1. Language Effect
  useEffect(() => {
    localStorage.setItem("language", isArabic ? "ar" : "en");
  }, [isArabic]);

  // 2. Cart Effect
  useEffect(() => {
    localStorage.setItem("sorour-cart", JSON.stringify(cart));
  }, [cart]);

  // 3. Dark Mode Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // check if the prouct already in chart
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // IF YES: Create a NEW array, find the item, and increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } // IF NO: Return a NEW array containing all old items [...]
      // PLUS the new product with a starting quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast.success(
      isArabic
        ? `تم إضافة ${product.nameAr || product.name} إلى السلة`
        : `Added ${product.name} to cart`,
      {
        style: {
          borderRadius: "10px",
          // If dark mode, background is dark gray. If light mode, background is white.
          background: isDarkMode ? "#1f2937" : "#fff",
          // If dark mode, text is white. If light mode, text is dark gray.
          color: isDarkMode ? "#fff" : "#1f2937",
        },
      },
    );
  };

  // 3. The Increase/Decrease Logic

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + amount;

          return { ...item, quantity: Math.max(1, newQuantity) };
        }

        return item;
      });
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });

    toast.error(isArabic ? "تم أزالة المنتج" : "Removed from cart", {
      style: {
        background: isDarkMode ? "#1f2937" : "#fff",
        color: isDarkMode ? "#fff" : "#1f2937",
      },
    });
  };
  const total = cart.reduce(
    (sum, item) => sum + item.price.toFixed(2) * item.quantity,
    0,
  );

  // the whatsapp function

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "962796740125";

    let message = isArabic
      ? `  أود طلب المنتجات التالية\n\n`
      : `Hello Sorour, I would like to order the following items:\n\n`;

    cart.forEach((item) => {
      const itemName = isArabic && item.nameAr ? item.nameAr : item.name;

      const itemTotal = item.price * item.quantity;

      message += `- ${itemName} (${item.quantity}) = ${itemTotal.toFixed(2)} EGP\n`;
    });

    message += isArabic
      ? `\n\nالمجموع الكلي: ${total.toFixed(2)}`
      : `\n\nTotal Price: ${total.toFixed(2)} EGP`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // 7. Open WhatsApp in a new tab!
    window.open(whatsappUrl, "_blank");
  };

  const value = {
    isArabic,
    setIsArabic,
    isDarkMode,
    setIsDarkMode,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    total,
    handleWhatsAppCheckout,
    updateQuantity,
    onClose,
    isOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
