import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useCreateOrder } from "../hooks/useCreateOrder";

const OrderModal = ({ total, show, handleClose }: any) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    useCreateOrder({ customer, address, total, status: 0 });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You'll pay ${total} after delivery!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
          ></Form.Control>
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text"></Form.Control>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="modal__footer__container">
          <Button variant="danger" className="order_btn" onClick={handleClick}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderModal;
