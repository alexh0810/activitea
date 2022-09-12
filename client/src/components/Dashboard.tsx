import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import { fetchOrders, updateStatus } from "../redux/reducers/orderReducer";
import {
  deleteSingleProduct,
  editSingleProduct,
  fetchProducts,
} from "../redux/reducers/productReducer";
import { Order } from "../types/order";

const Dashboard = () => {
  const orders = useAppSelector((state) => state.orderReducer);
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = ["Preparing", "On The Way", "Delivered"];

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, []);

  const handleStatus = async (
    orderId: string,
    address: string,
    status: 0 | 1 | 2 | 3
  ) => {
    if (status < 3) {
      const updatedStatus = status + 1;
      const updatedOrder = {
        orderId,
        address,
        updatedStatus,
      };
      dispatch(updateStatus(updatedOrder));
    }
  };

  const handleEditProduct = async (productId: string) => {
    const updatedProduct = {
      productId,
    };
  };

  const handleDeleteProduct = async (productId: string) => {
    dispatch(deleteSingleProduct(productId));
  };

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
          <Table responsive="xl" borderless>
            <thead>
              <tr>
                <th>Image</th>
                <th>ID</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr>
                    <td key={product._id}>
                      <Image
                        fluid
                        className="cart__image"
                        width={100}
                        src={product.image}
                      ></Image>
                    </td>
                    <td>{product._id.slice(0, 5)}...</td>
                    <td>{product.title}</td>
                    <td>{product.prices[0]}</td>
                    <td>
                      <MdEdit onClick={() => handleEditProduct(product._id)} />
                      <AiFillDelete
                        onClick={() => handleDeleteProduct(product._id)}
                      />
                    </td>
                  </tr>
                ))}
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
              {orders &&
                orders.length > 0 &&
                orders.map((order: Order) => (
                  <tr key={order._id}>
                    <td>{order?._id.slice(0, 5)}...</td>
                    <td>{order?.customer}</td>
                    <td>{order?.total}</td>
                    <td>PAID</td>
                    <td>{status[order?.status]}</td>
                    <td>
                      <Button
                        onClick={() =>
                          handleStatus(order._id, order.address, order.status)
                        }
                        className="dashboard_btn"
                        variant="primary"
                      >
                        NEXT STAGE
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
