

import Banner from "./Banner/Banner";
import ProductCard from "./Products/ProductCard";
import Products from "./Products/Products";


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