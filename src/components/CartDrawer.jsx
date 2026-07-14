import React from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useApp } from "../context/AppContext";

const CartDrawer = ({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  isArabic,
}) => {
  const { handleWhatsAppCheckout } = useApp();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      <aside
        className={`fixed ${isArabic ? "left-0" : "right-0"} top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : isArabic ? "-translate-x-full" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900 dark:text-white italic">
            {isArabic ? "عربة التسوق" : "Your Gear"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[calc(100vh-250px)]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 font-bold mt-20 uppercase tracking-widest">
              {isArabic ? "عربة التسوق فارغة" : "Your cart is empty"}
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-gray-50 dark:bg-gray-900 p-2 pr-4 rounded-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover bg-gray-200 dark:bg-gray-800 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-black text-sm uppercase text-gray-900 dark:text-white">
                    {isArabic && item.nameAr ? item.nameAr : item.name}
                  </h3>
                  <p className="text-orange-600 font-bold text-sm">
                    JOD {item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="font-bold text-sm dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="flex justify-between mb-4">
            <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-sm">
              {isArabic ? "المجموع الفرعي" : "Subtotal"}
            </span>
            <span className="text-xl font-black text-gray-900 dark:text-white">
              EGP {total.toLocaleString()}
            </span>
          </div>
          <button
            className="w-full bg-orange-600 text-white py-4 rounded-md font-black uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-lg disabled:opacity-50"
            onClick={handleWhatsAppCheckout}
            disabled={cart.length === 0}
          >
            {isArabic ? "إتمام الطلب عبر واتساب" : "Checkout via WhatsApp"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
