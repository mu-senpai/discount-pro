import CopyToClipboard from "react-copy-to-clipboard";
import { IoIosTimer } from "react-icons/io";
import { RiCoupon2Line } from "react-icons/ri";
import { toast } from "react-toastify";

const CouponCard = (props = {}) => {

    const { coupon, shop_link } = props || {};
    const { coupon_code, description, expiry_date, condition, coupon_type } = coupon;

    return (
        <div className="card w-full bg-blue-50 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="card-body gap-3">
                <h2 className="h-16 text-2xl font-bold text-blue-950 text-center">{description}</h2>
                <div className="px-3 py-6 bg-blue-100 rounded-xl my-3">
                    <h2 className="text-center text-4xl font-black text-blue-900">{coupon_code}</h2>
                </div>
                <p className="flex items-center gap-1 text-gray-500 font-semibold">
                    <IoIosTimer size={20} />
                    Expired Date: {expiry_date}</p>
                <p className="flex items-center gap-1 text-gray-500 font-semibold">
                    <RiCoupon2Line size={20} />
                    Type: {coupon_type}</p>
                <p className="text-gray-600 font-medium text-xs">N.B: {condition}</p>
                <div className="w-full card-actions justify-between items-center mt-2">
                    <CopyToClipboard text={coupon_code} onCopy={() => {
                        toast.success('Coupon has copied to the clipboard!', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }}>    
                        <button className="w-[48%] btn border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Copy Code</button>
                    </CopyToClipboard>
                    <a href={shop_link} target="_blank" className="w-[48%] btn border-none bg-gradient-to-l from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out rounded-[5px]">Use Now</a>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;