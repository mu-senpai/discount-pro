import { useState, useEffect } from "react";

const CouponTipSection = () => {
  const tips = [
    "Always check the expiration date on coupons to avoid surprises.",
    "Combine store sales with coupons for maximum savings.",
    "Subscribe to your favorite stores' newsletters for exclusive coupons.",
    "Look for free shipping codes to save extra on your order.",
    "Plan purchases around seasonal sales and coupon availability.",
  ];

  const [currentTip, setCurrentTip] = useState(tips[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        // Update the tip after fade-out is complete
        setCurrentTip((prevTip) => {
          const currentIndex = tips.indexOf(prevTip);
          return tips[(currentIndex + 1) % tips.length];
        });
        setFade(false); // Trigger fade-in
      }, 500); // Duration of fade-out
    }, 5000); // Change tip every 5 seconds

    return () => clearInterval(interval); // Clean up interval
  }, [tips]);

  return (
    <section className="text-center bg-blue-50 space-y-4 py-8 px-4 sm:px-10 rounded-lg mb-10 sm:mb-20 lg:mb-24">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-600 text-center">Savings Tip of the Day</h2>
      {/* <h2 className="text-2xl font-bold text-gray-700 mb-4">Savings Tip of the Day</h2> */}
      <p
        className={`text-gray-600 text-base sm:text-lg lg:text-xl transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentTip}
      </p>
    </section>
  );
};

export default CouponTipSection;
