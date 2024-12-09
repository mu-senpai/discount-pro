import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {

    const location = useLocation();
    const email = location.state?.email || "";

    const { passwordReset, logoutUser } = useContext(AuthContext);

    const handlePasswordReset = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;

        passwordReset(email)
        .then(() => {
            logoutUser();
            window.location.replace('https://www.gmail.com');
        })
        .catch((error) => {
            const errorCode = error.code;
            toast.error(`Password reset failed: ${errorCode}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    }

    return (
        <div className="card bg-blue-50 shadow-md w-full py-6 sm:py-10 xl:py-20 px-0 sm:px-10 xl:px-20 shrink-0">
            <form onSubmit={handlePasswordReset} className="card-body">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-black text-center">Forgot Password</h2>
                <hr className="w-full my-6 sm:my-8 xl:my-12" />
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text text-gray-600 font-semibold">Email address</span>
                    </label>
                    <input name="email" type="email" placeholder="Enter your email address" className="input bg-blue-100 rounded-[5px]" required defaultValue={email} />
                </div>
                <div className="form-control mb-6">
                    <button className="btn border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Reset</button>
                </div>
                <p className="text-[#706F6F] font-semibold text-center">Already know your password? <Link className="bg-gradient-to-r from-[#3498DB] via-[#85C1E9] to-[#3498DB] inline-block text-transparent bg-clip-text font-bold" to={`/auth/login`}>Login</Link></p>
            </form>
        </div>
    );
};

export default ForgotPassword;