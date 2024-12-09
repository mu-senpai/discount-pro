import { useEffect, useState } from "react";
import OnSaleBrandCard from "../OnSaleBrandCard/OnSaleBrandCard";

const OnSaleBrandCards = () => {

    const [onSaleBrands, setOnSaleBrands] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setOnSaleBrands(data.filter(brand => brand.isSaleOn === true)))
        // data.filter(brand => brand.isSaleOn === true)
    }, [])

    return (
        <div className="w-[90%] lg:w-[85%] mx-auto space-y-10 sm:space-y-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-600 text-center">Brands on Sale</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    onSaleBrands.map(brand => <OnSaleBrandCard key={brand._id} brand={brand}></OnSaleBrandCard>)
                }
            </div>
        </div>
    );
};

export default OnSaleBrandCards;