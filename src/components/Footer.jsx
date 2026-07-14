import React from "react";

const Footer = ({ isArabic }) => {
  return (
    <footer
      Id="Contact"
      className="bg-gray-950 px-6 py-16 text-white md:px-12 border-t-4 border-orange-600"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex items-center flex-col md:items-start">
            <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white italic">
              {isArabic ? "أونيكس" : "  ONYX"}
            </h2>
            <p className="text-center text-sm leading-relaxed text-gray-400 md:text-left font-medium">
              {isArabic
                ? "أفضل المعدات للرياضيين الذين يبحثون عن الأفضل في الأداء والأناقة. مصممة لتجاوز حدودك."
                : "The ultimate gear for athletes who demand the best in performance and style. Engineered to push boundaries."}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-gray-500">
              {isArabic ? "اكتشف" : "Explore"}
            </h3>
            <ul className="flex flex-col gap-3 text-center md:text-left font-bold text-gray-300">
              <li>
                <a
                  href="#Products"
                  className="hover:text-orange-500 transition-colors"
                >
                  {isArabic ? "المجموعات" : "Collections"}
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="hover:text-orange-500 transition-colors"
                >
                  {isArabic ? "قصتنا" : "Our Story"}
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  {isArabic ? "تواصل معنا" : "Contact Us"}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-gray-500">
              {isArabic ? "تابعنا" : "Follow Us"}
            </h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="transform text-gray-400 transition-all hover:-translate-y-1 hover:text-orange-500"
              >
                <img
                  src="/icons8-facebook-48.png"
                  alt="Facebook"
                  className="w-8 h-8 opacity-80 hover:opacity-100 invert"
                />
              </a>
              <a
                href="#"
                className="transform text-gray-400 transition-all hover:-translate-y-1 hover:text-orange-500"
              >
                <img
                  src="/icons8-instagram-logo-94.png"
                  alt="Instagram"
                  className="w-8 h-8 opacity-80 hover:opacity-100 invert"
                />
              </a>
              <a
                href="#"
                className="transform text-gray-400 transition-all hover:-translate-y-1 hover:text-orange-500"
              >
                <img
                  src="/icons8-tiktok-logo-50.png"
                  alt="TikTok"
                  className="w-8 h-8 opacity-80 hover:opacity-100 invert"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900 pt-8 text-center text-sm font-bold text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} ONYX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
