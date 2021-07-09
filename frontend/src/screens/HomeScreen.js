import './HomeScreen.css';
import Product from '../components/Product';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {

    const dispatch = useDispatch();
    
    const getProducts = useSelector((state) => state.getProducts);

    const {products, loading, error} = getProducts;

    useEffect( () => {
        dispatch(listProducts());
    }, [dispatch] );

    return  <div className="homescreen"> 
    <h2 className = "homescreen__title">Latest Products</h2>
    
    <div className = "homescreen__products">
        {loading ? <h2>Loading...</h2>  : error ? <h2>{error}</h2> 
        : products.map((product)=>
            <Product key={product._id} 
            productId={product._id}
            name = {product.name}
            price = {product.price}
            description = {product.description}
            imageUrl = {product.imageUrl}
            /> //map函数就是lambada函数，传进去函数
        )}
    </div>
</div>;
    
};

export default HomeScreen