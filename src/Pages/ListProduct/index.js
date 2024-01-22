import { useLocation } from 'react-router-dom';

function ListProduct() {
    const location = useLocation();
    const receivedData = location.state?.data;

    console.log(receivedData);

    return <div></div>;
}

export default ListProduct;
