import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; TinDev {year}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer