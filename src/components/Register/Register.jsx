import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

const Register = () => {

    const { createUser, setUser, setNamePhotoToUserProfile, loginWithGoogle, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleRegister = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        const isChecked = event.target.terms.checked;

        if (!isChecked) {
            toast.error('Registration failed: Please accept our terms & conditions to get your registered.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Registration failed: Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        createUser(name, photo, email, password)
        .then((result) => {
            setUser(result.user);
            setNamePhotoToUserProfile(name, photo)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                setLoading(false);
                toast.error(`Registration failed: ${errorCode}`, {
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
        })
        .catch((error) => {
            const errorCode = error.code;
            setLoading(false);
            toast.error(`Registration failed: ${errorCode}`, {
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

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwordRegex.test(password);
    };

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then((result) => {
            setUser(result.user);
            setLoading(false);
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

    return (
        <div className="card bg-blue-50 shadow-md w-full py-6 sm:py-10 xl:py-20 px-0 sm:px-10 xl:px-20 shrink-0">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-black text-center">Register your account</h2>
                    <hr className="w-full my-6 sm:my-8 xl:my-12" />
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input bg-blue-100 rounded-[5px]" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo url" className="input bg-blue-100 rounded-[5px]" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Email address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email address" className="input bg-blue-100 rounded-[5px]" required />
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
                    <div className="form-control">
                        <label className="label justify-start gap-3 cursor-pointer">
                            <input type="checkbox" name="terms" className="checkbox" />
                            <span className="label-text text-gray-600">Accept our terms & condition</span>
                        </label>
                    </div>
                    <div className="form-control mt-2 mb-6">
                        <button className="btn border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Register</button>
                    </div>
                </form>
                <div className="w-full flex flex-col gap-4 items-center">
                    <button onClick={handleLoginWithGoogle} className="btn w-full btn-ghost border-2 border-gray-500 text-gray-500 rounded-[5px] hover:bg-blue-100 hover:border-blue-300 flex items-center gap-2">
                        <FaGoogle></FaGoogle>
                        Login with Google</button>
                    <p className="text-[#706F6F] font-semibold text-center">Already have an account? <Link className="bg-gradient-to-r from-[#3498DB] via-[#85C1E9] to-[#3498DB] inline-block text-transparent bg-clip-text font-bold" to={`/auth/login`}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;