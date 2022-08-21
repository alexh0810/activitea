import React, { useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import productImage from "../assets/imgs/milktea-1.png";

const CartTable = () => {
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
            <tr>
              <td>
                <Image
                  fluid
                  className="cart__image"
                  width={150}
                  src={productImage}
                ></Image>
              </td>
              <td>Oolong Milktea</td>
              <td>Boba</td>
              <td>7$</td>
              <td>
                <button className="quantity__btn">
                  <AiOutlinePlus />
                </button>
                1
                <button className="quantity__btn">
                  <AiOutlineMinus />
                </button>
              </td>
              <td>7$</td>
              <td>
                <FaTrash />
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row className="total__container">
        <h3>Total: 7$ </h3>
      </Row>
    </Container>
  );
};

export default CartTable;
