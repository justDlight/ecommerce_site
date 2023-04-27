import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import { useState } from 'react';

import cataHideTillClicked from '../jwCustomJS.js';
import products from '../products.json';
import products2 from '../products2.json';
import catagories from '../catagories.json';
import products3 from '../products3.json';
import products4 from '../products4.json';
import products5 from '../products5.json';
import products6 from '../products6.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Dlight&apos;s PC Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
        

      
      
      <main className={styles.main}>

        {/*Nav bar*/}
        <div className="row" id="header-img">
          <div className="row">
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
                    {/* Search bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
                  </div>
                </div>
              </div>
            </nav>
          </div>



          {/*Title Homepage*/}
          <div className="row">
            <div className="col" id="category-col">
              {/* Search bar */}
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
                <h4 id="categories-title">Categories</h4><br/><p>Double click to expand!</p>
                {catagories.map(category => (
                  <div key={category.title}>
                    <h3 onClick={cataHideTillClicked}>{category.title}</h3>
                    <ul className="sub-cata-list">
                      {Object.keys(category['sub-cata']).map(subcat => {
                        // Check if the key contains "-url"
                        if (!subcat.includes('-url')) {
                          return (
                            <li key={subcat} className="sub-cata-item">
                              <a href={category['sub-cata'][subcat + '-url']} target="_blank">
                                {category['sub-cata'][subcat]}
                              </a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                ))}
            </div>
            <div className="col">
              <h1 className={styles.title} id="header-txt">
                justDlight&apos;s Computer Store!
              </h1>
              <h1 id="sub-header-txt" className={styles.title}>
                New and Hot!
              </h1>
            </div>
          </div>

          
          {/*Catagories THIS IS NOT USED WILL BE DELETED*/}
          <div className="row">

            {/*Products New and Hot*/}
            <div className="col" id="product-col">
              <div className={styles.grid}>
                {filteredProducts.map(product => {
                  return (
                    <div key={product.id} className={styles.card}>
                      <img src={product.image} alt={`Preview of ${product.title}`} />
                      <h3 id="product-title">{ product.title }</h3>
                      <p id="product-description">{ product.description }</p>
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
                    </div>
                  );
                })}
              </div>
            </div>


          </div>


        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <script src="../jwCustomJS.js" />
      <div hidden id="snipcart" data-api-key="YTM0MzEzM2ItOWU3MC00N2YzLWEwYzYtM2E3ZTFiYTVkYmFkNjM4MTU4MjYyOTU0Mzg4NjYw" />
    </div>
  )
}