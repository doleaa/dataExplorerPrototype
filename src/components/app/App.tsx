import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {setTestString, testDefaultInitialState, TestStateInterface} from "../../redux/test";
import {OverallStateInterface} from "../../redux/store";
import {COLUMN_SIZES} from "../utils/sizes";
import SimpleButton from "../buttons/simpleButton/SimpleButton";

const App = () => {
  const dispatch = useDispatch();
  const testState = useSelector((state: OverallStateInterface): TestStateInterface => state.test);

  const [changesCounter, setChangesCounter] = useState(0);
  useEffect(
      () => {
        if (testState.testString !== testDefaultInitialState.testString) {
          setChangesCounter(changesCounter + 1);
        }
      },
      [testState]
  );

  const testButtonClickedHandler = (): void => {
    dispatch(setTestString("SOME CHANGED TEST STRING"));
  };

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
              <div>{`${testState.testString} - CHANGED (${changesCounter}) TIMES`}</div>
            </Col>
            <SimpleButton
             buttonText={"Change"}
             clickedHandler={testButtonClickedHandler}
            />
          </Row>
        </Container>
        <p>
          Edit <code>src/App.tsx</code> for further spinception
        </p>
      </body>
    </div>
  );
};

export default App;
