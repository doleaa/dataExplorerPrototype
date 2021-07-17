import {COLUMN_SIZES} from "../../utils/sizes";
import {Col, Row} from "react-bootstrap";
import React from "react";
import {SlimVerticalSpacerRow} from "../../spacers/slimVerticalSpacer/SlimVerticalSpacer";

export interface NamedColumnsColourConfig {
    columnIndex: number,

    colourDeducer(dataPoint: any): "green" | "yellow" | "red";
}

interface NamedColumnsTablePropsInterface {
    title: string,
    columnNames: string[], //can only go up to 12, or rendering will get messy
    dataRows: any[],
    colourConfigs: NamedColumnsColourConfig[],

    rowClickHandler(rowIndex: number, rowData: any): void
}

const NamedColumnsTable = ({title, columnNames, dataRows, colourConfigs, rowClickHandler}: NamedColumnsTablePropsInterface) => (
    <Col
        xs={COLUMN_SIZES.ONE_ON_A_ROW}
        sm={COLUMN_SIZES.ONE_ON_A_ROW}
        md={COLUMN_SIZES.ONE_ON_A_ROW}
        className="centered"
    >
        <Row>
            <Col
                xs={COLUMN_SIZES.ONE_ON_A_ROW}
                sm={COLUMN_SIZES.ONE_ON_A_ROW}
                md={COLUMN_SIZES.ONE_ON_A_ROW}
            >
                {title}
            </Col>
        </Row>

        <SlimVerticalSpacerRow/>

        <Row>
            {
                columnNames.map((columnName: string) => (
                    <Col>{columnName}</Col>
                ))
            }
        </Row>

        {
            dataRows.map((dataRow: any, rowIndex: number) => (
                <Row
                    className="namedColumnsDataRow"
                    onClick={() => { rowClickHandler(rowIndex, dataRow); }}
                >
                    {
                        dataRow.map((dataPoint: string, columnIndex: number) => {
                            const columnColourConfig: NamedColumnsColourConfig | undefined =
                                colourConfigs.find(config => config.columnIndex === columnIndex);
                            if (columnColourConfig !== undefined) {
                                return (
                                    <Col className={`${columnColourConfig.colourDeducer(dataPoint)}`}>
                                        {dataPoint}
                                    </Col>
                                );
                            }
                            return (<Col>{dataPoint}</Col>);
                        })
                    }
                </Row>
            ))
        }
    </Col>
);

export default NamedColumnsTable;