import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";

const OnSaleBrandCard = (props = {}) => {

    const { brand } = props || {};
    const {  brand_name, coupons, category } = brand;

    return (
        <div className="card bg-blue-50 w-full shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <figure className="px-6 pt-6">
                <div
                    className="brand-logo"
                    dangerouslySetInnerHTML={{ __html: brand.brand_logo }}
                />
            </figure>
            <div className="px-6 py-6 space-y-2 text-gray-500">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">{brand_name}</h2>
                <p className="flex items-center gap-2 text-base sm:text-lg">
                    <RiCoupon2Line />
                    Total Coupons: {coupons.length}</p>
                <p className="flex items-center gap-2 text-base sm:text-lg">
                    <MdOutlineCategory />
                    Category: {category}</p>
            </div>
        </div>
    );
};

export default OnSaleBrandCard;