import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products);

  useEffect(() => {

    dispatch(getProducts());

    // fetch('https://fakestoreapi.com/products')
    // .then(data => data.json())
    // .then(result => getProducts(result))
  }, []);

  if(status === "loading") {
    return <p>Loading....</p>;
  }
  if(status === "error") {
    return <Alert key="danger" variant="danger">Error</Alert>;
  }

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Price: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background:"white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  );
}

export default Product;