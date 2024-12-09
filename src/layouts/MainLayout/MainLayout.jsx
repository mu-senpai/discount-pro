import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import OnSaleBrandCards from "../../components/OnSaleBrandCards/OnSaleBrandCards";
import TopBrands from "../../components/TopBrands/TopBrands";
import CouponTipSection from "../../components/CouponTipSection/CouponTipSection";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// Initialize AOS with minimal settings
AOS.init({
  duration: 800,
  once: true,
});

const MainLayout = () => {

  const { user, loading, setLoading } = useContext(AuthContext);
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (user && !toastShown) {
      toast.info(`Welcome back, ${user.displayName || "User"}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // alert(user.displayName);
      setToastShown(true);
    }
  }, [user, toastShown, setLoading]);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="min-[1920px]:max-w-[120rem] mx-auto">

      <ScrollToTop></ScrollToTop>

      {/* Navbar with fade-down animation */}
      <nav className="bg-[#F8F9F9]/[0.5] backdrop-blur-lg sticky top-0 z-50">
        <Header></Header>
      </nav>

      <section data-aos="fade-down" className="mb-14 sm:mb-20 lg:mb-24">
        <Hero></Hero>
      </section>

      <section data-aos="fade-up" className="mb-14 sm:mb-20 lg:mb-24">
        <TopBrands></TopBrands>
      </section>

      <section data-aos="fade-down" className="mb-14 sm:mb-20 lg:mb-24">
        <CouponTipSection></CouponTipSection>
      </section>

      <section data-aos="fade-right" className="mb-14 sm:mb-20 lg:mb-24">
        <OnSaleBrandCards></OnSaleBrandCards>
      </section>


      <section data-aos="fade-up" className="mb-14 sm:mb-20 lg:mb-24">
        <FAQAccordion></FAQAccordion>
      </section>

      <footer data-aos="fade-up">
        <Footer></Footer>
      </footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
