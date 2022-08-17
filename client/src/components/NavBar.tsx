import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import "../styles/components/_navbar.scss";
import logoImage from "../assets/imgs/bubble-tea.png";
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container className="navbar__container">
          <Col>
            <Navbar.Brand className="nav_brand" href="#home">
              ActiviTea
            </Navbar.Brand>
            <Image className="logo_img" fluid src={logoImage}></Image>
          </Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="me-auto">
                <Nav.Link className="nav__link" href="#features">
                  Home
                </Nav.Link>
                <Nav.Link className="nav__link" href="#pricing">
                  Menu
                </Nav.Link>
                <Nav.Link className="nav__link" href="#pricing">
                  About
                </Nav.Link>
                <Nav.Link className="nav__link" href="#pricing">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
            <Stack className="cart__container">
              <Badge className="cart__quantity" bg="secondary">
                2
              </Badge>
              <FaShoppingCart className="cart__logo" fontSize={28} />
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
