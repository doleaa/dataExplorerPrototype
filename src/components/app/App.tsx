import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {TestStateInterface} from "../../redux/test";
import {OverallStateInterface} from "../../redux/store";
import {COLUMN_SIZES} from "../utils/sizes";

function App() {
  const testState = useSelector((state: OverallStateInterface): TestStateInterface => state.test);

  return (
    <div className="App">
      <header className="App-header">
        <div>dfsafdsdjsfhldskfhdlskh</div>
      </header>
      <body>
        <Container>
          <Row>
            <Col xs={COLUMN_SIZES.ONE_ON_A_ROW} sm={COLUMN_SIZES.ONE_ON_A_ROW} md={COLUMN_SIZES.ONE_ON_A_ROW}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={COLUMN_SIZES.TWO_ON_A_ROW} sm={COLUMN_SIZES.TWO_ON_A_ROW} md={COLUMN_SIZES.TWO_ON_A_ROW}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={COLUMN_SIZES.TWO_ON_A_ROW} sm={COLUMN_SIZES.TWO_ON_A_ROW} md={COLUMN_SIZES.TWO_ON_A_ROW}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={COLUMN_SIZES.THREE_ON_A_ROW} sm={COLUMN_SIZES.THREE_ON_A_ROW} md={COLUMN_SIZES.THREE_ON_A_ROW}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={COLUMN_SIZES.THREE_ON_A_ROW} sm={COLUMN_SIZES.THREE_ON_A_ROW} md={COLUMN_SIZES.THREE_ON_A_ROW}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={COLUMN_SIZES.THREE_ON_A_ROW} sm={COLUMN_SIZES.THREE_ON_A_ROW} md={COLUMN_SIZES.THREE_ON_A_ROW}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={COLUMN_SIZES.ONE_ON_A_ROW} sm={COLUMN_SIZES.ONE_ON_A_ROW} md={COLUMN_SIZES.ONE_ON_A_ROW}>
              <div>{testState.testString}</div>
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
