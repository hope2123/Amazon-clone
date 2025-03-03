import React from "react";
import Carouseleffect from '../../Componet/Carouseleffect/Carouseleffect'
import Category from '../../Componet/Catagory/Category'
import Product from '../../Componet/Product/Product'
import Layout from "../../Componet/Layout/Layout";

function Landing() {
  return (
    <Layout>
      <Carouseleffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
