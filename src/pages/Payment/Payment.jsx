import React, { useContext, useState } from "react";
import Layout from "../../Componet/Layout/Layout";
import ProductCard from "../../Componet/Product/ProductCard";
import styles from "./payment.module.css";
import { DataContext } from "../../Componet/DataProvider/DataProvider";
import Currency from "../../Componet/Currency/Currency";
// for stripe checkout
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);

  //stripe hooks for checkout / payment confirmation
  const stripe = useStripe();
  const elements = useElements();

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((allocator, item) => {
    return item.price * item.amount + allocator;
  }, 0);

  // controls card inputs while typing
  const handleChange = (e) => {
    console.log(e?.error?.message);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <Layout>
      <div className={styles.payment__header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard product={item} flex={true} key={i} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.payment__card__container}>
            <div className={styles.payment__details}>
            <form>
               {/* error */}
            {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange}/>

                {/* price */}
                <div className={styles.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <Currency amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                      Pay Now  
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;