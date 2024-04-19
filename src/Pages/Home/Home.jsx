

import ProductCard from "../Products/ProductCard";
import Banner from "./Banner/Banner";
import Products from "./FeatureProduct/Products";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          {/* <Features></Features> */}
            <Products></Products>
          <ProductCard></ProductCard>
        </div>
    );
};

export default Home;