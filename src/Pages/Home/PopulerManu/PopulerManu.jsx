import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopulerManu = () => {
    const [menu] = useMenu();
    const populer = menu.filter(item => item.category === "popular");
    console.log(populer);
    return (
        <section className="flex flex-col items-center space-y-4">
            <SectionTitle
            subHeading="From Our Menu"
            heading="Populer Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    populer.map(item => <MenuItem key={item._id} item={item}
                    
                    ></MenuItem>)
                }
            </div>
                <button className="btn btn-outline border-0 border-b-4 border-black ">View Full Menu</button>
        </section>
    );
};

export default PopulerManu;