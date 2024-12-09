import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const BrandsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    // Fetch brand data
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start min-[1920px]:max-w-[120rem] mx-auto">

      <ScrollToTop></ScrollToTop>

      <nav className="bg-[#F8F9F9]/[0.5] backdrop-blur-lg sticky top-0 z-50 mb-4 sm:mb-8 lg:mb-16">
        <Header></Header>
      </nav>

      {/* Main Section */}
      <section className="w-[90%] lg:w-[85%] mx-auto flex-grow" data-aos="fade-down">
        <h2 className="text-4xl font-black text-gray-600 mb-6 sm:mb-10">
          All Brands
        </h2>

        <input
          type="text"
          placeholder="Search for brands"
          className="input bg-blue-100/[0.8] border-2 border-blue-300 w-full mb-10 sm:mb-14"
          onChange={handleSearch}
        />

        <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-16 lg:mb-24">
          {brands
            .filter((brand) =>
              brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
        </div>
      </section>

      {/* Footer with AOS Animation */}
      <footer data-aos="fade-up">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default BrandsPage;
