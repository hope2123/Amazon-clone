import React, { useContext } from "react";
import './Cart.css'
import Layout from "../../Componet/Layout/Layout";
import { DataContext } from "../../Componet/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { Link } from "react-router";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProductCard from "../../Componet/Product/ProductCard";
import Currency from "../../Componet/Currency/Currency";
function Cart() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item?.price * item?.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className="container">
        <div className="cart__container">
              <h2>Hello</h2>
              <h3>Your shopping basket </h3>
              <hr />
              {
                 basket?.length == 0 ? (
                  <p>Oops ! No item in your cart</p>
                ) : (
                  basket?.map((item, i) => {
           return <section className="cart_product">
<ProductCard
                    key={i}
                     product={item}
                      renderDesc={true}
                         renderAdd={false}
                          flex={true}/>
<div className="btn_container">
                    <button
                      className="btn"
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={25} />
                    </button>
                    <span>{item?.amount}</span>
                    <button
                      className="btn"
                      onClick={() => decrement(item?.id)}
                    >
                      <IoIosArrowDown size={25} />
                    </button>
                  </div>
           </section> 
                  })
                )
              }
            </div>
            <div>
            {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <Currency amount={total} />
            </div>
            <span>
              <input type="checkbox" id="giftCheckBox" />
              <label htmlFor="giftCheckBox">
                <small>This order contains a gift</small>t
              </label>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
        </div>


      </section>
    </Layout>
  );
}

export default Cart;
