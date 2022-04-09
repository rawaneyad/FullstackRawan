import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
            <li>
                <Link to='/product/1'>Product1</Link>
            </li>
            <li>
                <Link to='/product/2'>Product2</Link>
            </li>
            <li>
                <Link to='/product/3'>Product3</Link>
            </li>
        </ul>
    </div>
  );
}

export default Products;
