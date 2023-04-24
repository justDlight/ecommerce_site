import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';

import cataHideTillClicked from '../jwCustomJS.js';
import catagories from '../catagories.json';
import products16 from '../products16.json';

export default function Home() {
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
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/*Title Homepage & catagories*/}
          <div className="row">
            <div className="col" id="category-col">
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
              GeForce RTX 3070 GPUs
              </h1>
            </div>
          </div>

          
          {/*Catagories*/}
          <div className="row">


            {/*Display cables and adapters*/}
            <div className="col" id="product-col">
              <div className={styles.grid}>
                {products16.map(products16 => {
                  return (
                    <div key={products16.id} className={styles.card}>
                      <img src={products16.image} alt={`Preview of ${products16.title}`} />
                      <h3 id="product-title">{ products16.title }</h3>
                      <p id="product-description">{ products16.description }</p>
                      <p id="product-price">${ products16.price }</p>
                      <p>
                        <button id="test_id" className="snipcart-add-item"
                          data-item-id={products16.id}
                          data-item-image={products16.image}
                          data-item-name={products16.title}
                          data-item-url="/"
                          data-item-price={products16.price}
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