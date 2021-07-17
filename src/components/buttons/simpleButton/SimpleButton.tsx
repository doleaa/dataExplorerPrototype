import "./SimpleButton.css";
import {COLUMN_SIZES} from "../../utils/sizes";
import {Col} from "react-bootstrap";
import React from "react";

interface SimpleButtonPropsInterface {
    buttonText: string,
    clickedHandler(): void
}

const SimpleButton = ({buttonText, clickedHandler}: SimpleButtonPropsInterface) => (
    <Col
        xs={COLUMN_SIZES.ONE_ON_A_ROW}
        sm={COLUMN_SIZES.ONE_ON_A_ROW}
        md={COLUMN_SIZES.ONE_ON_A_ROW}
        onClick={() => { clickedHandler(); }}
    >
        <Col
            xs={COLUMN_SIZES.ONE_ON_A_ROW}
            sm={COLUMN_SIZES.ONE_ON_A_ROW}
            md={COLUMN_SIZES.ONE_ON_A_ROW}
            className="SimpleButton"
        >
            {buttonText}
        </Col>
    </Col>
);

export default SimpleButton;