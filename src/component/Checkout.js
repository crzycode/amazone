import React from "react";
import "../css/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout__ad" src="./images/add.png" alt="" />

        {basket?.length === 0 ? (
          <div>
            <h2>basket is empty</h2>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your Basket</h1>
            {basket.map((i) => (
              <CheckoutProduct
                id={i.id}
                title={i.title}
                price={i.price}
                rating={i.rating}
                image={i.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
