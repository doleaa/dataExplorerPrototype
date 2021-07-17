import React from 'react';
import './SlimVerticalSpacer.css';
import {COLUMN_SIZES} from "../../utils/sizes";
import {Col, Row} from "react-bootstrap";


export const SlimVerticalSpacer = () => (
    <Col
        xs={COLUMN_SIZES.ONE_ON_A_ROW}
        sm={COLUMN_SIZES.ONE_ON_A_ROW}
        md={COLUMN_SIZES.ONE_ON_A_ROW}
        className="slimverticalspacer"
    />
);

export const SlimVerticalSpacerRow = () => (
    <Row>
        <SlimVerticalSpacer/>
    </Row>
);
