import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import ProductDetails from "../Components/ProductDetails";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const productURL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await axios.get(productURL);
      setProduct(response.data);
      setLoading(false);
    };

    fetchProduct();
  }, []);

  return (
    <div>{loading ? <Loading /> : <ProductDetails product={product} />}</div>
  );
}
