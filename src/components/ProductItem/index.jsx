import React from 'react'

const ProductItem = (props) => {
  const {
    cover,
    name,
    price,
    discount
  } = props;
  return (
    <div className="best-p1">
    <img src={cover} alt="img" />
    {discount}
    <div className="best-p1-txt">
      <div className="name-of-p">
        <p className="product-name">{name}</p>
      </div>
      <div className="rating">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bx-star" />
        <i className="bx bx-star" />
      </div>
      <div className="price">
        <strong>${price}</strong>
        <div className="colors">
          <i className="bx bxs-circle red" />
          <i className="bx bxs-circle blue" />
          <i className="bx bxs-circle white" />
        </div>
      </div>
      <div className="buy-now">
        <button>
          <p href="https://codepen.io/sanketbodke/full/mdprZOq">
            Buy Now
          </p>
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductItem