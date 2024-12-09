import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from 'react-stars'
import Header from "../Header/Header";
import CouponCard from "../CouponCard/CouponCard";
import Footer from "../Footer/Footer";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

AOS.init({
    duration: 1200,
    once: true,
});

const BrandDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const selectedBrand = data.filter(brand => parseInt(brand._id) === parseInt(id));
    const brand = selectedBrand[0];

    const { brand_name, rating, coupons, shop_link } = brand;

    return (
        <div className="w-full min-[1920px]:max-w-[120rem] min-h-screen mx-auto">

            <ScrollToTop></ScrollToTop>

            <nav className='bg-[#F8F9F9]/[0.5] backdrop-blur-lg sticky top-0 z-50 mb-4 sm:mb-6 lg:mb-8'>
                <Header></Header>
            </nav>

            <section data-aos="fade-down" className='w-[90%] lg:w-[85%] mx-auto mb-10 sm:mb-16 lg:mb-24'>

                <div className="flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-between gap-2 sm:gap-0 mb-6 sm:mb-10">
                    <div
                        className="brand-logo"
                        dangerouslySetInnerHTML={{ __html: brand.brand_logo }}
                    />

                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-gray-600 text-center sm:text-left">{brand_name}</h2>
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-gray-500 text-center sm:text-left">Rating: </h3>
                            <ReactStars
                                count={5}
                                value={rating}
                                size={26}
                                half={true}
                                edit={false}
                                color2="#ffd700"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-8 sm:space-y-10 lg:space-y-14">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-600 text-center">Coupons</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            coupons.map((coupon, idx) => <CouponCard key={idx} coupon={coupon} shop_link={shop_link}></CouponCard>)
                        }
                    </div>
                </div>
            </section>

            <footer data-aos="fade-up">
                <Footer></Footer>
            </footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BrandDetails;