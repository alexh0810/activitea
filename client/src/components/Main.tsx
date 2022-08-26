import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import firstBanner from "../assets/imgs/boba-banner.jpg";
import secondBanner from "../assets/imgs/boba-banner2.jpg";
import productImage from "../assets/imgs/milktea-1.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import { useEffect } from "react";
import { fetchProducts } from "../redux/reducers/productReducer";
import { Product } from "../types/product";

const Main = () => {
  const navigate = useNavigate();
  const products = useAppSelector((state: any) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={firstBanner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondBanner}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container fluid="md" className="products__container">
        <Row className="justify-content-md-center">
          <Col className="main__heading">
            <h3>Our Tea</h3>
          </Col>
        </Row>
        <Row>
          {products &&
            products.map((product: Product) => (
              <Col key={product._id} sm={4} className="product__container">
                <Image src={product.image} onClick={() => navigate(`${product._id}`)} className="product__img"></Image>
                <h4>{product.title}</h4>
                <h5>
                  ${product.prices[0]}
                </h5>
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

export default Main;
