import React from "react";
import Carouseleffect from '../../Componet/Carouseleffect/Carouseleffect'
import Catagory from '../../Componet/Catagory/Catagory'
import Product from '../../Componet/Product/Product'
import Layout from "../../Componet/Layout/Layout";

function Landing() {
  return (
    <Layout>
      <Carouseleffect />
      <Catagory />
      <Product />
    </Layout>
  );
}

export default Landing;
