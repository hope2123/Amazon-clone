import React, { useContext, useState, useEffect } from "react";
import './Order.css'
import Layout from '../../Componet/Layout/Layout'
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Componet/DataProvider/DataProvider";
import ProductCard from "../../Componet/Product/ProductCard";
import moment from 'moment'
function Order() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
      .doc(user.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot)
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,            // Fetch the document ID correctly
            created: doc.data().created,  // Fetch the 'created' field from the document's data
            amount: doc.data().amount,    // Fetch the 'amount' field (as you are logging)
            data: doc.data(),      // Optional: include the whole document's data
          }))
        );
      });
    } 
    else {
      setOrders([]);
    }
  }, []);

  return (
    
    <Layout>
<section className="header__order_container">
        <div className="orders__container">
          <h2 style={{margin:"20px"}}>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>you don't have orders yet.</div>
          )}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <div style={{display:"flex", flexWrap:"wrap",fontWeight:"500", borderBottom:"1px solid black"}}>
                  <p>Order ID: <span style={{color:"var(--primary-shade)"}}>{eachOrder?.id}</span></p>
                  <p>Total Amount: <span style={{color:"var(--primary-shade)"}}>${eachOrder?.amount?.toLocaleString()}</span></p>
                  <p>Purchased Date: <span style={{color:"var(--primary-shade)"}}>{moment(eachOrder?.created * 1000).format('dddd, MMM DD, YYYY h:mm A')}</span></p>
                  </div>

                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flex={true} product={order}  key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Order