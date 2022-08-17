import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import firstBanner from "../assets/imgs/boba-banner.jpg";
import secondBanner from "../assets/imgs/boba-banner2.jpg";
import productImage from "../assets/imgs/milktea-1.png";
import "../styles/components/_main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
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
          <Col sm={4} className="product__container">
            <Image src={productImage} className="product__img"></Image>
            <h4>Oloong milk tea</h4>
            <h5>7$</h5>
            <Button className="add_to_cart_btn">ADD TO CART</Button>
          </Col>
          <Col sm={4} className="product__container">
            <Image src={productImage} className="product__img"></Image>
            <h4>Oloong milk tea</h4>
            <h5>7$</h5>
            <Button className="add_to_cart_btn">ADD TO CART</Button>
          </Col>
          <Col sm={4} className="product__container">
            <Image
              onClick={() => navigate("/:productId")}
              src={productImage}
              className="product__img"
            ></Image>
            <h4>Oloong milk tea</h4>
            <h5>7$</h5>
            <Button className="add_to_cart_btn">ADD TO CART</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
