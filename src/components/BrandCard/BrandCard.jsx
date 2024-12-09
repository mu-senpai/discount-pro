import ReactStars from 'react-stars'
import { Link } from "react-router-dom";

const BrandCard = (props = {}) => {

    const { brand } = props || {};
    const { brand_name, description, rating, isSaleOn, _id } = brand;

    return (
        <div className="card items-center sm:card-side bg-blue-50 w-full shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div
                className="p-4 sm:p-6 lg:p-8"
                dangerouslySetInnerHTML={{ __html: brand.brand_logo }}
            />
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-4 justify-center">
                <h2 className="card-title text-2xl text-blue-900">{brand_name}</h2>
                <p className="text-gray-600">{description}</p>
                <ReactStars
                    count={5}
                    value={rating}
                    size={34}
                    half={true}
                    edit={false}
                    color2="#ffd700"
                />
                <div className="flex items-center gap-4">
                    <Link to={`/brand/${_id}`} className="btn md:btn-wide border-none bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out">View Coupons</Link>
                    {isSaleOn && (
                        <p className="text-lg text-blue-500 font-semibold animate-bounce">Sale is on!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandCard;