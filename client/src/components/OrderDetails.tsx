import React from "react";
import { Button, Container, Card, Table, Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { MdOutlinePayment, MdOutlineHomeWork } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { TbBike } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const OrderDetails = () => {
  return (
    <Container>
      <Row className="order__container">
        <Col sm={9}>
          <Table responsive="sm" borderless>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345</td>
                <td>Harry Potter</td>
                <td>Kalevankatu 12a, 778899, HELSINKI</td>
                <td>Total: $16</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Container className="status_container">
              <Stack className="status_stack">
                <MdOutlinePayment className="status__icon" />
                <span className="status__text">Payment</span>
                <TiTick className="status__icon" />
              </Stack>
              <Stack className="status_stack">
                <BsCupStraw className="status__icon" />
                <span>Preparing</span>
                <TiTick className="status__icon" />
              </Stack>
              <Stack className="status_stack">
                <TbBike className="status__icon" />
                <span>Preparing</span>
                <TiTick className="status__icon" />
              </Stack>
              <Stack className="status_stack">
                <MdOutlineHomeWork className="status__icon" />
                <span>Preparing</span>
                <TiTick className="status__icon" />
              </Stack>
            </Container>
          </Row>
        </Col>
        <Col sm={3}>
          <Card className="total_card">
            <Card.Body className="total_card_body">
              <Card.Title className="total_card_title">CART TOTAL</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Subtotal: $</ListGroup.Item>
                <ListGroup.Item>Discount: $0.00 </ListGroup.Item>
                <ListGroup.Item>Total: $</ListGroup.Item>
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
