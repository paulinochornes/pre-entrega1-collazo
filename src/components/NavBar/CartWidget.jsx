import React from 'react';
import imgCartShop from "../../assets/cartshop.png"

const CartWidget = () => {
  const cartItemCount = 5

  return (
    <div className="cart-widget">
      <img className='cart' src={imgCartShop} />
      <span className="cart-notification">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;