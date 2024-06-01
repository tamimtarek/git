import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center bg-black bg-opacity-20 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora assumenda cupiditate atque placeat eum magnam veniam sunt minima necessitatibus? Odit, omnis assumenda? Quis earum iusto provident aut voluptatibus debitis consequatur reiciendis, doloremque, asperiores perferendis, distinctio iste nesciunt in alias voluptate.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-black text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;