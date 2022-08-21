import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import productImage from "../assets/imgs/milktea-1.png";

const ProductDetails = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image fluid src={productImage}></Image>
          </Col>
          <Col>
            <Container className="product__details__container">
              <Col className="product__title">
                <h2>Oolong Milk Tea</h2>
              </Col>
              <Col className="description">
                <p>Milktea made with Oolong tea from Taiwan</p>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Choose a size</option>
                  <option value="1">M</option>
                  <option value="2">L</option>
                </Form.Select>
                <p className="toppings__title">Extra toppings</p>
                <Form.Check
                  type="checkbox"
                  id="toppings_list"
                  label="Double boba (+1$)"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  id="toppings_list"
                  label="Chia seeds (+1$)"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  id="toppings_list"
                  label="Flan (+1$)"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  id="toppings_list"
                  label="Almond Jelly (+1$)"
                ></Form.Check>
                <Container>
                  <Row className="toCart__container">
                    <Col className="quantity__form__container">
                      <Form.Control
                        size="sm"
                        type="number"
                        placeholder="1"
                        min="1"
                        id="quantity_form"
                      />
                    </Col>
                    <Col sm={10} className="to__cart__container">
                      <Button variant="outline-danger" className="to_cart_btn">ADD TO CART</Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
