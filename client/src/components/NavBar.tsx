import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { IoPersonCircle } from "react-icons/io5";

import logoImage from "../assets/imgs/bubble-tea.png";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/appHooks";

const NavBar = () => {
  const navigate = useNavigate();
  const quantity = useAppSelector((state) => state.persistedReducer.quantity);
  const [isAdmin, setAdmin] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container className="navbar__container">
          <Col>
            <Navbar.Brand className="nav_brand" href="/">
              ActiviTea
            </Navbar.Brand>
            <Image className="logo_img" fluid src={logoImage}></Image>
          </Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="me-auto">
                <Nav.Link className="nav__link" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="nav__link" href="/menu">
                  Menu
                </Nav.Link>
              </Nav>
            </Container>
            <Stack className="cart__container">
              { quantity > 0 && <Badge className="cart__quantity" bg="secondary">
               {quantity}
              </Badge>}
              <FaShoppingCart
                className="cart__logo"
                fontSize={28}
                onClick={() => navigate("/cart")}
              />
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
