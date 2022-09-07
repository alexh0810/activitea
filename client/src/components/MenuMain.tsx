import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import firstBanner from "../assets/imgs/boba-banner.jpg";
import secondBanner from "../assets/imgs/boba-banner2.jpg";
import productImage from "../assets/imgs/milktea-1.png";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import { fetchProducts } from "../redux/reducers/productReducer";
import { Product } from "../types/product";

const MenuMain = () => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="main__heading">
            <h3>Our Tea</h3>
          </Col>
        </Row>
        <Row>
          {products.map((product: Product) => (
            <Col key={product._id} sm={4} className="product__container">
              <Image
                src={product.image}
                onClick={() => navigate(`/${product._id}`)}
                className="product__img"
              ></Image>
              <h4>{product.title}</h4>
              <h5>${product.prices[0]}</h5>
              <Button variant="outline-danger" className="add_to_cart_btn">
                ADD TO CART
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuMain;
