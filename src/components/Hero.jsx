import React from "react";

const Hero = ({ isArabic }) => {
  return (
    <>
      <section
        Id="About"
        className="text-center px-4 pt-32 pb-16 md:pt-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-black text-orange-600 mb-4 tracking-widest uppercase text-3xl md:text-base  ">
            {isArabic ? "أطلق العنان لقدراتك" : "Unleash Your Potential"}
          </p>

          <h1 className="text-gray-900 dark:text-white font-black tracking-tighter uppercase text-5xl md:text-7xl italic mb-6">
            ONYX
          </h1>

          <p className="font-medium text-gray-600 dark:text-gray-300 mb-10 md:text-lg leading-relaxed max-w-2xl mx-auto">
            {isArabic
              ? "مصممة لمن لا يعرفون الاستسلام. ملابسنا الرياضية عالية الأداء مصممة بأحدث التقنيات لتبقيك منتعشًا ومرتاحًا وتتحرك بشكل أسرع. سواء كنت تتدرب في صالة الألعاب الرياضية أو تستعد للركض في الهواء الطلق، تجاوز حدودك  معنا "
              : "Engineered for the relentless. Our high-performance sportswear uses cutting-edge fabric technology to keep you cool, comfortable, and moving faster. Whether you're hitting the gym or training for your next outdoor run, push your limits with us ."}
          </p>

          <button className="bg-orange-600 text-white rounded-full px-12 py-4 text-center font-black uppercase tracking-wide hover:bg-orange-700 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(234,88,12,0.3)">
            {isArabic ? "تسوق الآن" : "Shop The Gear"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
