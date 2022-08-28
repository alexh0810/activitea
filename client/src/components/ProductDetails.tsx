import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useAppDispatch } from "../hooks/appHooks";
import { addProductToCart } from "../redux/reducers/cartReducer";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useProduct(productId);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    if (product) {
      setPrice(product.prices[e.target.value]);
    }
  };

  const handleClick = () => {
    dispatch(addProductToCart({ ...product, price, quantity }));
  };

  return (
    <div>
      <Container>
        <Row>
            <Col>
              <Image fluid src={product?.image}></Image>
            </Col>
            <Col>
              <Container className="product__details__container">
                <Col className="product__title">
                  <h2>{product?.title}</h2>
                </Col>
                <Col className="description">
                  <p>{product?.description}</p>
                </Col>
                <Col>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={handleChange}
                  >
                    <option>Choose a size</option>
                    {product &&
                      product.size.map((size, index) => (
                        <option key={index} value={index}>
                          {size}
                        </option>
                      ))}
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
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                      </Col>
                      <Col sm={10} className="to__cart__container">
                        <Button
                          variant="outline-danger"
                          className="to_cart_btn"
                          onClick={handleClick}
                        >
                          ADD TO CART
                        </Button>
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
