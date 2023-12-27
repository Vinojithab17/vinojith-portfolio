import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Col xs={12} md={12} className="tech-icons">
      <Row style={{ paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </Row>
    </Col>
    /* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */
  );
}

export default Toolstack;
