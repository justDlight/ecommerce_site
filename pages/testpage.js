import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';

import cataHideTillClicked from '../jwCustomJS.js';
import allProducts from '../allProducts.json';
import catagories from '../catagories.json';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredallProducts = allProducts.filter(product =>
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
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search allProducts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {/*Nav bar*/}
        <div className="row" id="header-img">
            
          
          {/*Catagories THIS IS NOT USED WILL BE DELETED*/}
          <div className="row">

            {/*allProducts New and Hot*/}
            <div className="col" id="product-col">
              <div className={styles.grid}>
              {filteredallProducts.map(product => {
              return (
                <div key={product.id} className={styles.card}>
                  <img src={product.image} alt={`Preview of ${product.title}`} />
                  <h3 id="product-title">
                    <a href={`/${product.title}`}>{ product.title }</a>
                  </h3>
                  <p id="product-description">{ product.description }</p>
                  <p id="product-price">${ product.price }</p>
                  <p>
                    <button id="test_id" className="snipcart-add-item"
                      data-item-id={product.id}
                      data-item-image={product.image}
                      data-item-name={product.title}
                      data-item-url={`/products/${product.id}`}
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