import { ShoppingCart, Search, User, Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
const Header = ({
  cart,
  setIsCartOpen,
  isArabic,
  setIsArabic,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <header className="fixed right-0 left-0 top-0 flex items-center justify-between h-20 px-6 bg-white dark:bg-gray-950 backdrop-blur-md z-50 shadow-lg transition-colors duration-500  ">
        <div className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter italic uppercase">
          ONYX
        </div>
        <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2    ">
          <ul className="flex items-center gap-8">
            <li className="font-bold text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase tracking-wide text-sm">
              <a href="#Home">{isArabic ? "الرئيسية" : "Home"}</a>
            </li>
            <li className="font-bold text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase tracking-wide text-sm">
              <a href="#About">{isArabic ? "من نحن" : "About"}</a>
            </li>
            <li className="font-bold text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase tracking-wide text-sm">
              <a href="#Products">{isArabic ? "المنتجات" : "Gear"}</a>
            </li>
            <li className="font-bold text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase tracking-wide text-sm">
              <a href="#Contact">{isArabic ? "تواصل معنا" : "Contact"}</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-1 ">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600" />
            )}
          </button>
          <button
            className=" sm:block border-2 border-orange-600 rounded-full px-6 py-1 text-sm font-bold text-orange-600 hover:bg-amber-600 hover:text-white transition-colors uppercase tracking-wide  "
            onClick={() => {
              setIsArabic(!isArabic);
            }}
          >
            {isArabic ? "English" : "Arabic"}
          </button>
          {/*the cart wrapper*/}
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => {
              setIsCartOpen(true);
            }}
          >
            {" "}
            <ShoppingCart className="w-6 h-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors " />{" "}
            {/* THE NOTIFICATION BADGE */}
            {/* Only render the badge if cartCount is greater than 0 */}
            <span className="absolute right-0 bottom-7 left-3 h-5 w-5 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-xs">
              {totalItems}
            </span>
          </button>
          {/* 4. THE HAMBURGER BUTTON */}
          {/* md:hidden: This ensures the hamburger button disappears on laptops */}{" "}
          <button
            className="p-1 text-gray-900 dark:text-white md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
        {/* 5. MOBILE MENU DROPDOWN */}
        {/* If isMobileMenuOpen is true, render this block */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-20 w-full border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl md:hidden text-center ">
            {" "}
            <ul className=" py-8 px-6 flex flex-col gap-6   ">
              <li className="font-bold text-xl hover:text-orange-600 dark:text-white dark:hover:text-orange-500 transition-colors uppercase">
                <a
                  href="#Home"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {isArabic ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li className="font-bold text-xl hover:text-orange-600 dark:text-white dark:hover:text-orange-500 transition-colors uppercase">
                <a
                  href="#About"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {isArabic ? "من نحن" : "About"}
                </a>
              </li>
              <li className="font-bold text-xl hover:text-orange-600 dark:text-white dark:hover:text-orange-500 transition-colors uppercase">
                <a
                  href="#Products"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {isArabic ? "المنتجات" : "Gear"}
                </a>
              </li>
              <li className="font-bold text-xl hover:text-orange-600 dark:text-white dark:hover:text-orange-500 transition-colors uppercase">
                <a
                  href="#contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact
                </a>
              </li>{" "}
              <li className="font-bold text-xl hover:text-orange-600 dark:text-white dark:hover:text-orange-500 transition-colors uppercase"></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
