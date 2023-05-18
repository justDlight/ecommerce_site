import React, { useState } from 'react';
import { useRouter } from 'next/router';
import allProducts from '../allProducts.json';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;

  const product = allProducts.find((p) => p.title === productId);

  const [overviewVisible, setOverviewVisible] = useState(false);
  const [specsVisible, setSpecsVisible] = useState(false);
  const [warrantyVisible, setWarrantyVisible] = useState(false);

  const toggleOverview = () => {
    setOverviewVisible(!overviewVisible);
  };

  const toggleSpecs = () => {
    setSpecsVisible(!specsVisible);
  };

  const toggleWarranty = () => {
    setWarrantyVisible(!warrantyVisible);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />





      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active" id="nav-link-2" aria-current="page" href="https://ecommerce-site-ten-henna.vercel.app/">Home</a>
                    <a className="nav-link" id="nav-link-3" href="#">....</a>
                    <a className="nav-link" id="nav-link-4" href="#">....</a>
                    <p className="nav-link">
                      <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
                        <img src="https://lightintime.com/img/ecommerce_img/icons8-shopping-cart-64.png"></img><span className="snipcart-total-price">$0.00</span>
                      </a>
                    </p>
                    
                  </div>
                </div>
              </div>
            </nav>





      <div>
        <h1 id="product-page-header">Product Page</h1>
        {product ? (
          <>
            <h3 id="product-title">{product.title}</h3>
            <p id="product-description">{product.description}</p>
            <p id="product-price">${product.price}</p>
            <img id="product-image" src={product.image} alt={`Preview of ${product.title}`} />
            <p>
              <button
                id="test_id"
                className="snipcart-add-item"
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
      <div>
        <div>
          <h4 id="overview" onClick={toggleOverview}>Overview</h4>
          {overviewVisible && <p id="overview-filler" ref={overviewRef}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Elementum tempus egestas sed sed risus pretium quam vulputate. Elementum sagittis vitae et leo duis ut. Vestibulum sed arcu non odio. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Ac odio tempor orci dapibus ultrices in. Cursus eget nunc scelerisque viverra mauris in. Sollicitudin tempor id eu nisl nunc. Est velit egestas dui id ornare arcu odio ut sem. Diam donec adipiscing tristique risus nec feugiat in fermentum. Arcu felis bibendum ut tristique. Eget sit amet tellus cras adipiscing enim eu turpis. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet risus nullam eget felis. Adipiscing elit ut aliquam purus sit amet. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Quam adipiscing vitae proin sagittis nisl. In pellentesque massa placerat duis ultricies lacus.</p>}
        </div>

        <div>
          <h4 id="specs" onClick={toggleSpecs}>Specifications</h4>
          {specsVisible && <p id="specs-filler" ref={specsRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi. Velit euismod in pellentesque massa. Vivamus at augue eget arcu dictum varius duis at consectetur. Pharetra et ultrices neque ornare. Quisque id diam vel quam elementum. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Sed lectus vestibulum mattis ullamcorper velit. Nibh tellus molestie nunc non blandit massa enim nec. Facilisi cras fermentum odio eu feugiat pretium. Rutrum quisque non tellus orci ac auctor augue.
          Malesuada proin libero nunc consequat interdum varius sit amet. Integer feugiat scelerisque varius morbi enim nunc faucibus. Purus semper eget duis at tellus at urna. Amet justo donec enim diam vulputate ut pharetra sit amet. Ultricies leo integer malesuada nunc vel risus commodo. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Amet justo donec enim diam. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Non odio euismod lacinia at quis risus sed vulputate odio. Amet nisl purus in mollis nunc sed id. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Enim neque volutpat ac tincidunt vitae semper quis lectus. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Mollis aliquam ut porttitor leo a diam sollicitudin.</p>}
        </div>

        <div>
          <h4 id="warranty" onClick={toggleWarranty}>Warranty & Returns</h4>
          {warrantyVisible && <p id="warranty-filler" ref={warrantyRef}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque gravida in. Eget nullam non nisi est. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Convallis tellus id interdum velit laoreet id. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Quisque egestas diam in arcu. Erat velit scelerisque in dictum. Sed velit dignissim sodales ut eu sem. Dignissim cras tincidunt lobortis feugiat vivamus at. Convallis posuere morbi leo urna molestie at elementum. Risus nec feugiat in fermentum posuere. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. In fermentum et sollicitudin ac orci phasellus egestas tellus. Vitae auctor eu augue ut lectus arcu bibendum. Enim eu turpis egestas pretium aenean.
          Venenatis urna cursus eget nunc scelerisque viverra mauris in. Pretium nibh ipsum consequat nisl. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Tortor posuere ac ut consequat. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Aliquam nulla facilisi cras fermentum odio eu feugiat. Pharetra magna ac placerat vestibulum lectus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Odio morbi quis commodo odio aenean sed adipiscing diam. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Varius morbi enim nunc faucibus a pellentesque sit amet. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Aliquam ut porttitor leo a diam sollicitudin. Quis auctor elit sed vulputate mi sit. Eu turpis egestas pretium aenean. Eget nulla facilisi etiam dignissim diam quis. Quisque sagittis purus sit amet. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.</p>}
        </div>
      </div>

      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <script src="../jwCustomJS.js" />
      <div hidden id="snipcart" data-api-key="YTM0MzEzM2ItOWU3MC00N2YzLWEwYzYtM2E3ZTFiYTVkYmFkNjM4MTU4MjYyOTU0Mzg4NjYw" />
    </>
  );
}







  
      