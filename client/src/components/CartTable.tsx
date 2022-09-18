import React, { useState } from "react";
import { Button, Container, Card, Form, Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { FaTrash } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import OrderModal from "./OrderModal";
import {
  decreaseItem,
  deleteItemFromCart,
  increaseItem,
} from "../redux/reducers/cartReducer";

const CartTable = () => {
  const cartItems = useAppSelector((state) => state.persistedReducer.products);
  const cart = useAppSelector((state) => state.persistedReducer);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
    setCash(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container>
      {cartItems.length > 0 ? (
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
                    <tr key={item._id}>
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
                      <td className="quantity_container">
                        <Button
                          variant="outline-dark"
                          className="quantity_btn"
                          onClick={() => dispatch(increaseItem(item._id))}
                        >
                          <AiOutlinePlus fontSize={16} />
                        </Button>
                        {item.quantity}
                        <Button
                          variant="outline-dark"
                          className="quantity_btn"
                          onClick={() => dispatch(decreaseItem(item._id))}
                        >
                          <AiOutlineMinus fontSize={16} />
                        </Button>
                      </td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <FaTrash
                          onClick={() => dispatch(deleteItemFromCart(item._id))}
                        />
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
                  <Button
                    variant="danger"
                    className="checkout_btn"
                    onClick={handleOpenModal}
                  >
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
      ) : (
        <Row className="empty_cart_container">
          <Stack gap={2} className="empty_cart_content">
            <HiOutlineShoppingCart fontSize={50} className="cart_icon" />
            <h2>Oops. This cart's empty!</h2>
          </Stack>
        </Row>
      )}
      {cash && (
        <OrderModal total={cart.total} show={show} handleClose={handleClose} />
      )}
    </Container>
  );
};

export default CartTable;
