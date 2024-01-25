import { useLocation } from 'react-router-dom';
import ProductSearchList from '../../Components/ProductSearchList/ProductSearchList';

function ListProduct() {
    const location = useLocation();
    console.log(location);
    const receivedData = location.state?.data;

    return (
        <div>
            <ProductSearchList data={receivedData} />
        </div>
    );
}

export default ListProduct;
