import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerManu from "../PopulerManu/PopulerManu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
        <Helmet>
            <title>Bistro Boss | Home</title>
        </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerManu></PopulerManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;