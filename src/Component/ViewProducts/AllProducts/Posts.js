import React from 'react';
import Product from '../Product/Product';
import {PRODUCT_PER_PAGE} from './utils/constants'

const Posts = ({products, page,onAddToCart }) => {

  return (
    <div>
      {/* selectedProducts */}
      {products.map((prod) =>{
        <div key={prod.id} className="col-md-3 col-sm-12 mb-2 mr-5">
          <Product product={prod}  onAddToCart={onAddToCart} />
        </div>
 
      })}
      
      
    </div>
 
  );
};

export default Posts;