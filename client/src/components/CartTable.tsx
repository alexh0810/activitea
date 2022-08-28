import React, { useState } from "react";
import { Button, Container, Card, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { FaTrash } from "react-icons/fa";

import { useAppSelector } from "../hooks/appHooks";

const CartTable = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.products);
  const cart = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className="cart__container">
        <Col sm={9}>
          <Table responsive="sm" borderless>
            <thead>
              <tr>
                <th className="cart__header">Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => (
                  <tr>
                    <td>
                      <Image
                        fluid
                        className="cart__image"
                        width={150}
                        src={item.image}
                      ></Image>
                    </td>
                    <td>{item.title}</td>
                    <td>Boba</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <FaTrash />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
        <Col sm={3}>
          <Card className="total_card">
            <Card.Body className="total_card_body">
              <Card.Title className="total_card_title">CART TOTAL</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Subtotal: ${cart?.total}</ListGroup.Item>
                <ListGroup.Item>Discount: $0.00 </ListGroup.Item>
                <ListGroup.Item>Total: ${cart.total}</ListGroup.Item>
              </ListGroup>
              {open ? (
                <Button variant="danger" className="checkout_btn">
                  CASH ON DELIVERY
                </Button>
              ) : (
                <Button
                  onClick={() => setOpen(true)}
                  variant="danger"
                  className="checkout_btn"
                >
                  CHECKOUT
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartTable;
