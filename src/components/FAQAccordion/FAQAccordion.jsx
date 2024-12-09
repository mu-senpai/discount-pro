const FAQAccordion = () => {
    return (
      <section className="w-[90%] lg:w-[85%] mx-auto space-y-8 sm:space-y-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-600 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {/* Question 1 */}
          <div className="collapse collapse-arrow border-l-4 border-blue-300 bg-blue-50 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-base sm:text-lg font-medium text-gray-800">
              What is a coupon code?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 text-sm sm:text-base">
                A coupon code is a series of letters or numbers that you can use during checkout to
                get a discount on your purchase.
              </p>
            </div>
          </div>
  
          {/* Question 2 */}
          <div className="collapse collapse-arrow border-l-4 border-blue-300 bg-blue-50 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-base sm:text-lg font-medium text-gray-800">
              How do I use a coupon code?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 text-sm sm:text-base">
                Copy the code, paste it in the coupon or promo code field at checkout, and click
                "Apply."
              </p>
            </div>
          </div>
  
          {/* Add more FAQs */}
          <div className="collapse collapse-arrow border-l-4 border-blue-300 bg-blue-50 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-base sm:text-lg font-medium text-gray-800">
              Can I use multiple coupon codes at once?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 text-sm sm:text-base">
                Most stores allow only one coupon code per order, but some may let you combine
                discounts.
              </p>
            </div>
          </div>
  
          <div className="collapse collapse-arrow border-l-4 border-blue-300 bg-blue-50 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-base sm:text-lg font-medium text-gray-800">
              Do coupon codes expire?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 text-sm sm:text-base">
                Yes, all coupon codes have an expiry date. Make sure to use them before they expire.
              </p>
            </div>
          </div>
  
          <div className="collapse collapse-arrow border-l-4 border-blue-300 bg-blue-50 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-base sm:text-lg font-medium text-gray-800">
              Are there any conditions for using coupon codes?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 text-sm sm:text-base">
                Conditions vary. Some may require a minimum purchase, while others might apply only to
                specific categories.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQAccordion;
  