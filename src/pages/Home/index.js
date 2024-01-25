import Banner from '../../Components/Banner';
import Products from '../../Components/Products';
import ProductGender from '../../Components/ProductGender';

function Home() {
    return (
        <div>
            <Banner />
            <Products />
            <ProductGender category={'1'} />
            <ProductGender category={'2'} />
        </div>
    );
}

export default Home;
