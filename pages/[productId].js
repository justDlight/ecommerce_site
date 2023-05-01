// pages/[productId].js

import { useRouter } from 'next/router';
import allProducts from '../allProducts.json';

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;

  const product = allProducts.find((p) => p.id === productId);

  return (
    <div>
      <p>Hello world!</p>
    </div>
  );
}



  
      