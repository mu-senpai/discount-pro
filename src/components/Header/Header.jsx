import { useContext } from "react";
import { FaHome, FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    const links = <>
        <li><NavLink className={({ isActive }) => `btn btn-ghost btn-sm flex items-center gap-1 ${isActive ? 'text-[#3498DB] font-black' : 'text-gray-600 font-semibold'} `} to={`/`}>
            <FaHome></FaHome>
            Home</NavLink></li>
        <li><NavLink className={({ isActive }) => `btn btn-ghost btn-sm flex items-center gap-1 ${isActive ? 'text-[#3498DB] font-black' : 'text-gray-600 font-semibold'} `} to={`/brands`}>
            <FaShoppingBag></FaShoppingBag>
            Brands</NavLink></li>
    </>

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
    }

    return (
        <div className="w-full bg-transparent">
            <div className="navbar bg-transparent w-[95%] mx-auto sm:py-5">

                <div className="navbar-start">
                    <Link to={`/`} className="bg-gradient-to-r from-[#3498DB] via-[#85C1E9] to-[#3498DB] inline-block text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl font-black">Discount Pro</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                        {
                            user && <li><NavLink className={({ isActive }) => `btn btn-ghost btn-sm flex items-center gap-1 ${isActive ? 'text-[#3498DB] font-black' : 'text-gray-600 font-semibold'} `} to={`/profile`}>
                            <FaRegUserCircle />
                            My Profile</NavLink></li>
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        !(location.pathname.includes('/auth')) &&
                        (user ? <button onClick={handleLogout} className="btn border-none hidden sm:flex bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out">Logout</button>
                            : <Link to={`/auth/login`} className="btn hidden sm:flex border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out">Login / Register</Link>)
                    }
                    { 
                        !(location.pathname.includes('/auth')) && user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL || "https://i.ibb.co/VSc5ZXm/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"} />
                                </div>
                            </div>
                            <p
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-64 py-2 px-4 shadow z-20">
                                User Email: {user?.email}
                            </p>
                        </div>
                    }
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <HiOutlineMenuAlt3 size={20} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20">
                            {links}
                            {
                                user && <li><NavLink className={({ isActive }) => `btn btn-ghost btn-sm flex items-center gap-1 ${isActive ? 'text-[#3498DB] font-black' : 'text-gray-600 font-semibold'} `} to={`/profile`}>
                                <FaRegUserCircle />
                                My Profile</NavLink></li>
                            }
                            {
                                !(location.pathname.includes('/auth')) &&
                                (user ? <button onClick={logoutUser} className="btn btn-sm sm:hidden border-none bg-blue-400 text-white shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out">Logout</button>
                                    : <Link to={`/auth/login`} className="btn btn-sm sm:hidden border-none bg-blue-400 text-white shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out">Login / Register</Link>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;