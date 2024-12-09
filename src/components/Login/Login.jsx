import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser, setUser, loginWithGoogle, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const email = form.get('email');
        const password = form.get('password');

        loginUser(email, password)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                Swal.fire({
                    title: 'Success!',
                    text: 'New review has been added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Your callback function logic here
                        console.log('Confirm button clicked!');
                        // Example: Redirect to another page
                        window.location.href = '/reviews';
                    }
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorCode = error.code;
                setLoading(false);
                toast.error(`Login failed: ${errorCode}`, {
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

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(`Login failed: ${errorCode}`, {
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

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="card bg-blue-50 shadow-md w-full py-6 sm:py-10 xl:py-20 px-0 sm:px-10 xl:px-20 shrink-0">
            <div className="card-body">
                <form onSubmit={handleLogIn}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-black text-center">Login your account</h2>
                    <hr className="w-full my-6 sm:my-8 xl:my-12" />
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Email address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email address" className="input bg-blue-100 rounded-[5px]" required value={email} onChange={handleInputChange} />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input bg-blue-100 rounded-[5px]" required />
                        <button onClick={handleShowPassword} className="btn btn-sm btn-ghost btn-circle absolute right-3 top-11">
                            {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                        </button>
                    </div>
                    <label className="label">
                        <Link to={'/auth/resetpassword'} state={{ email }} className="label-text-alt link link-hover text-gray-600">Forgot password?</Link>
                    </label>
                    <div className="form-control my-6">
                        <button className="btn border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Login</button>
                    </div>
                </form>
                <div className="w-full flex flex-col gap-4 items-center">
                    <button onClick={handleLoginWithGoogle} className="btn w-full btn-ghost border-2 border-gray-500 text-gray-500 rounded-[5px] hover:bg-blue-100 hover:border-blue-300 flex items-center gap-2">
                        <FaGoogle></FaGoogle>
                        Login with Google</button>
                    <p className="text-[#706F6F] font-semibold text-center">Don't have an account? <Link className="bg-gradient-to-r from-[#3498DB] via-[#85C1E9] to-[#3498DB] inline-block text-transparent bg-clip-text font-bold" to={`/auth/register`}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;