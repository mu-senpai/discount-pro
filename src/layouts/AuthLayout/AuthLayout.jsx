import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

AOS.init({
    duration: 1200,
    once: true,
});

const AuthLayout = () => {
    return (
        <div className="w-full min-h-screen min-[1920px]:max-w-[120rem] mx-auto">

            <ScrollToTop></ScrollToTop>

            <div className="w-full h-full mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
                <nav className="bg-[#F8F9F9]/[0.5] backdrop-blur-lg sticky top-0 z-50">
                    <Header></Header>
                </nav>
                <section data-aos="zoom-in" className="w-[90%] sm:w-[75%] lg:w-[50%] mx-auto">
                    <Outlet></Outlet>
                </section>
                <ToastContainer></ToastContainer>
                <footer data-aos="fade-up">
                    <Footer></Footer>
                </footer>
            </div>
        </div>
    );
};

export default AuthLayout;
