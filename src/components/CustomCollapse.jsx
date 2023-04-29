import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
import "./CustomCollapse.css";

const CustomCollapse = (props) => {
    const { pl, index } = props;
    console.log(index, pl);
    return (
        <Collapse className="collpase" defaultActiveKey={["0"]}>
            <Panel header= {pl.title} key={index}>
                <p>{pl.enonce}</p>
            </Panel>
        </Collapse>
        
    );
};

export default CustomCollapse;
