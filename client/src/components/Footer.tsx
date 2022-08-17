import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import footerImage from "../assets/imgs/footer_banner.jpg";
import badgeImage from "../assets/imgs/badge.png";
import "../styles/components/_footer.scss";

const Footer = () => {
  return (
    <Container fluid className="footer__container">
      <Row>
        <Col lg={5}>
          <Image
            className="footer__img"
            width="800px"
            src={footerImage}
          ></Image>
        </Col>
        <Col>
          <Container className="footer__right">
            <Row className="footer__right__list">
              <Col lg={3}>
                <h3>AUTHENTIC BUBBLE TEA FROM TAIWAN SINCE 1995.</h3>
                <Image
                  fluid
                  className="badge__img"
                  width="132px"
                  src={badgeImage}
                ></Image>
              </Col>
              <Col lg={5} className="footer__right__listitems">
                <h4>FIND OUR STORES</h4>
                <ul className="address__list">
                  <li>
                    Laivurinkatu 8, Helsinki, 00507, Uusimaa. (+358) 418325052
                  </li>
                  <li>Laivurinkatu 8, Helsinki, Uusimaa. (+358) 418325052</li>
                  <li>Laivurinkatu 8, Helsinki, Uusimaa. (+358) 418325052</li>
                </ul>
              </Col>
              <Col lg={4} className="footer__right__listitems">
                <div>
                  <h4>WORKING HOURS</h4>
                  <ul className="opening_times_list">
                    <li>MONDAY - FRIDAY 10-20</li>
                    <li>WEEKENDS: 12-20</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
