import React, { useState } from "react";
import { Button, Container, Card, Table, Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { MdOutlinePayment, MdOutlineHomeWork } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { TbBike } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

import { useGetOrder } from "../hooks/useGetOrder";

const OrderDetails = ({ orderId }: any) => {
  const order = useGetOrder(orderId.orderId);
  const status = order?.status;
  console.log(status);

  const statusClass = (index: number) => {
    if (status != null && status != undefined) {
      if (index - status < 1) {
        return "done";
      }
      if (index - status === 1) {
        return "inProgress";
      }
      if (index - status > 1) {
        return "undone";
      }
    }
  };

  return (
    <Container>
      <Row className="order__container">
        <Col sm={9}>
          <Table responsive="sm" borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order?._id}</td>
                <td>{order?.customer}</td>
                <td>{order?.address}</td>
                <td>${order?.total}</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Container className="status_container">
              <Stack className={statusClass(0)}>
                <MdOutlinePayment className="status__icon" />
                <span className="status__text">Payment</span>
                <TiTick className="checkedIcon" />
              </Stack>
              <Stack className={statusClass(1)}>
                <BsCupStraw className="status__icon" />
                <span>Preparing</span>
                <TiTick className="checkedIcon" />
              </Stack>
              <Stack className={statusClass(2)}>
                <TbBike className="status__icon" />
                <span>On the way</span>
                <TiTick className="checkedIcon" />
              </Stack>
              <Stack className={statusClass(3)}>
                <MdOutlineHomeWork className="status__icon" />
                <span>Delivered</span>
                <TiTick className="checkedIcon" />
              </Stack>
            </Container>
          </Row>
        </Col>
        <Col sm={3}>
          <Card className="total_card">
            <Card.Body className="total_card_body">
              <Card.Title className="total_card_title">CART TOTAL</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Subtotal: ${order?.total}</ListGroup.Item>
                <ListGroup.Item>Discount: $0.00 </ListGroup.Item>
                <ListGroup.Item>Total: ${order?.total}</ListGroup.Item>
              </ListGroup>
              <Button disabled variant="danger" className="checkout_btn">
                PAID
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;
