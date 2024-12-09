import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {

    const { setNamePhotoToUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;

        setNamePhotoToUserProfile(name, photo)
        .then(result => {
            setUser(result);
            navigate('/profile');
        })
        .catch((error) => {
            const errorCode = error.code;
            toast.error(`Profile update failed: ${errorCode}`, {
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
                <form onSubmit={handleUpdate}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-black text-center">Update Your Profile</h2>
                    <hr className="w-full my-6 sm:my-8 xl:my-12" />
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input bg-blue-100 rounded-[5px]" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-gray-600 font-semibold">Photo URL</span>
                        </label>
                        <input name="photo" type='text' placeholder="Enter your photo url" className="input bg-blue-100 rounded-[5px]" required />
                    </div>
                    <div className="form-control my-6">
                        <button className="btn border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;