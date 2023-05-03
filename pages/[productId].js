import { useRouter } from 'next/router';
import allProducts from '../allProducts.json';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;

  const product = allProducts.find((p) => p.title === productId);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />

      
      <div>
        <h1 id="header">Product Page</h1>
        {product ? (
          <>
            <img src={product.image} alt={`Preview of ${product.title}`} />
            <h3 id="product-title">{product.title}</h3>
            <p id="product-description">{product.description}</p>
            <p id="product-price">${ product.price }</p>
            <p>
                <button id="test_id" className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-url="/"
                  data-item-price={product.price}
                  >
                  Add to Cart
                  </button>
              </p>
          </>
        ) : (
          <h3 id="product-title">Product not found</h3>
        )}
      </div>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <script src="../jwCustomJS.js" />
      <div hidden id="snipcart" data-api-key="YTM0MzEzM2ItOWU3MC00N2YzLWEwYzYtM2E3ZTFiYTVkYmFkNjM4MTU4MjYyOTU0Mzg4NjYw" />
    </>
  );
}







  
      