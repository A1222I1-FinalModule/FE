import Banner from '../../Components/Banner';
import NewProducts from '../../Components/NewProducts';
import Products from '../../Components/Products';
import SellingProducts from '../../Components/SellingProducts/SellingProducts';

function Home() {
    return (
        <div>
            <Banner />
            <Products />
            <SellingProducts />
            <NewProducts />
        </div>
    );
}

export default Home;
