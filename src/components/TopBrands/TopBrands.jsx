import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setBrands(data))
    }, [])

    return (
        <div className="w-full space-y-7 sm:space-y-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-600 text-center">Top Brands</h2>
            <div className="w-[95%] sm:w-[90%] mx-auto">
                <Marquee pauseOnHover={true} speed={80}>

                    {
                        brands.map(brand => <Link to={`/brand/${brand._id}`} key={brand._id} className="inline-block mr-48"><div
                            dangerouslySetInnerHTML={{ __html: brand.brand_logo }}
                          /></Link>)
                    }

                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;