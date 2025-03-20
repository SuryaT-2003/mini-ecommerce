import { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams(); // Removed setSearchParams as it's not used

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
            .then(res => res.json())
            .then(res => setProducts(res.products))
            .catch(error => console.error("Error fetching products:", error));
    }, [searchParams]);

    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}
