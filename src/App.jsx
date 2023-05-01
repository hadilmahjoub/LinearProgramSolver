import {React, useEffect, useState} from "react";
import CustomCollapse from "./components/CustomCollapse";
import PL1 from "./components/pls/PL1"
import PL3 from "./components/pls/PL3";
import PL5 from "./components/pls/PL5";
import "./App.css";
import "./components/CustomCollapse.css";

import { Collapse, Table, Input } from "antd";
import PL6 from "./components/pls/PL6";
const { Panel } = Collapse;


const App = () => {

    return (
        <div className="content">
            <h1>Linear Program Solver</h1>

            <div className="container">
                <PL1/>
                <PL3/>
                <PL5/>
                <PL6/>
                {/* {pls.map((pl, index) => (
                    <div key={index}>
                        <CustomCollapse
                            pl={pl}
                            index={index}
                            pl_model={models[index]}
                        />
                    </div>
                ))} */}
            </div>
        </div>
    );
};
export default App;
