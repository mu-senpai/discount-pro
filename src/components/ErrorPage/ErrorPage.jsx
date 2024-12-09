import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
            <MdError size={70} />
            <h2 className="text-4xl text-blue-950 font-black text-center">404: Page Not Found!</h2>
            <Link to={`/`} className="btn border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;