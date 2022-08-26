import React, { useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import productImage from "../assets/imgs/milktea-1.png";
import { useAppSelector } from "../hooks/appHooks";
import { isTypeNode } from "typescript";
import { isRegExp } from "util/types";

const CartTable = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.products);
  const cart = useAppSelector((state) => state.cartReducer);

  return (
    <Container>
      <Row className="cart__container">
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
      </Row>
      <Row className="total__container">
        <h3>Total ${cart.total}</h3>
      </Row>
    </Container>
  );
};

export default CartTable;
