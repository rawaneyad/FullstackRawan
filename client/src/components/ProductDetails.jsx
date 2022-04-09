import React from 'react'

function ProductDetails(props) {
    let id = props.match.params.id
  return (
    <div>Product: {id} Details</div>
  )
}

export default ProductDetails