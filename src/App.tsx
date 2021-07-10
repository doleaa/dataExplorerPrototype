import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';

function App() {
  const threeOnARowSize: number = 4;
  const twoOnARowSize: number = 6;
  const oneOnARowSize: number = 12;
  return (
    <div className="App">
      <header className="App-header">
        <div>dfsafdsdjsfhldskfhdlskh</div>
      </header>
      <body>
        <Container>
          <Row>
            <Col xs={oneOnARowSize} sm={oneOnARowSize} md={oneOnARowSize}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={twoOnARowSize} sm={twoOnARowSize} md={twoOnARowSize}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={twoOnARowSize} sm={twoOnARowSize} md={twoOnARowSize}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={threeOnARowSize} sm={threeOnARowSize} md={threeOnARowSize}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={threeOnARowSize} sm={threeOnARowSize} md={threeOnARowSize}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={threeOnARowSize} sm={threeOnARowSize} md={threeOnARowSize}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>
        <p>
          Edit <code>src/App.tsx</code> for further spinception
        </p>
      </body>
    </div>
  );
}

export default App;
