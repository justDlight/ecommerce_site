import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import products from '../products.json';

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
        <h1 className={styles.title}>
          justDlight&apos;s Computer Store!
        </h1>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Cart:</strong> <img src="https://lightintime.com/img/ecommerce_img/icons8-shopping-cart-64.png"></img><span className="snipcart-total-price">$0.00</span>
          </a>
        </p>

        <h1 className={styles.title}>
          New and Hot!
        </h1>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p>{ product.description }</p>
                <p>${ product.price }</p>
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
      </main>
      <footer className={styles.footer}>
      </footer>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="YTM0MzEzM2ItOWU3MC00N2YzLWEwYzYtM2E3ZTFiYTVkYmFkNjM4MTU4MjYyOTU0Mzg4NjYw" />
    </div>
  )
}