import React from "react";
import { Collapse, Table, Input, Button } from "antd";
const { Panel } = Collapse;
import "./CustomCollapse.css";

const CustomCollapse = (props) => {
    const { pl, index, pl_model } = props;

    console.log(pl_model[0][0].col);
    console.log(pl_model[0][0].data);
    console.log(pl_model[1][0].col);
    console.log(pl_model[1][0].data);

    //todo TABLES and VALUES -----------------------------------

    return (
        <Collapse className="collpase" defaultActiveKey={["0"]}>
            <Panel header={pl.title} key={index}>
                <p>{pl.enonce}</p>
                <div className="tabs-container">
                    {/* {pls_model[index].map((tab) => (
                        <Table
                            dataSource={tab.data}
                            columns={tab.col}
                            pagination={false}
                        />
                    ))} */}
                </div>
                <div className="btns-container">
                    <Button>Default</Button>
                    <Button>Clear</Button>
                    <Button>Solve</Button>
                </div>
            </Panel>
        </Collapse>
    );
};

export default CustomCollapse;
