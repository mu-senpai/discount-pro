import { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const ProfilePage = () => {
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    if (loading) {
        return <LoadingPage></LoadingPage>;
    }

    const { displayName, email, photoURL } = user;

    return (
        <div className="min-[1920px]:max-w-[120rem] min-h-screen mx-auto">

            <ScrollToTop></ScrollToTop>

            <nav className="bg-[#F8F9F9]/[0.5] backdrop-blur-lg sticky top-0 z-50">
                <Header></Header>
            </nav>

            <section>
                <div
                    className="hero bg-[url('https://i.ibb.co/0mXxrt7/profile-Banner.webp')] bg-top h-40 sm:h-60 lg:h-80"
                    data-aos="fade-down"
                >
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#F8F9F9] font-black">
                                Welcome, {displayName}!
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto my-20 card sm:card-side bg-blue-50 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                >
                    <figure className="min-w-52 sm:min-w-72 sm:max-w-72 lg:min-w-72 lg:max-w-72 max-h-96 sm:h-72 p-5">
                        <img
                            src={photoURL || "https://i.ibb.co/VSc5ZXm/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}
                            alt={displayName}
                            className="w-full h-full rounded-full"
                        />
                    </figure>
                    <div className="p-8 flex flex-col gap-4 justify-center">
                        <h2 className="card-title text-2xl text-blue-900">{displayName}</h2>
                        <p className="text-gray-600">Email: {email}</p>
                        <Link
                            to={`/auth/updateprofile`}
                            className="btn md:btn-wide border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out mt-4"
                        >
                            Update Profile
                        </Link>
                    </div>
                </div>
            </section>

            <footer data-aos="fade-up">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ProfilePage;
