import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

import productImage from "../assets/imgs/milktea-1.png";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import { fetchOrders } from "../redux/reducers/orderReducer";

const Dashboard = () => {
  const orders = useAppSelector((state) => state.orderReducer);
  useEffect(() => {
    fetchOrders();
  }, [orders]);

  console.log(orders);

  return (
    <Container className="dashboard_container">
      <Row>
        <Col className="dashboard_title">
          <h2>Products</h2>
        </Col>
        <Col className="dashboard_title">
          <h2>Order</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive="sm" borderless>
            <thead>
              <tr>
                <th>Image</th>
                <th>ID</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    fluid
                    className="cart__image"
                    width={100}
                    src={productImage}
                  ></Image>
                </td>
                <td>1234</td>
                <td>Gongcha milktea</td>
                <td>$8</td>
                <td>
                  <Button className="dashboard_btn" variant="primary">
                    EDIT
                  </Button>
                  <Button className="dashboard_btn" variant="danger">
                    DELETE
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table responsive="sm" borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234</td>
                <td>Jon Snow</td>
                <td>$8</td>
                <td>PAID</td>
                <td>PREPARING</td>
                <td>
                  <Button className="dashboard_btn" variant="primary">
                    NEXT STAGE
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
