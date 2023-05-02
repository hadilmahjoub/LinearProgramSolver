import {React, useEffect, useState} from "react";
import CustomCollapse from "./components/CustomCollapse";
import PL1 from "./components/pls/PL1"
import PL3 from "./components/pls/PL3";
import PL5 from "./components/pls/PL5";
import "./App.css";
import "./components/CustomCollapse.css";

import { Collapse, Table, Input } from "antd";
import PL6 from "./components/pls/PL6";
import PL2 from "./components/pls/PL2";
import PL4 from "./components/pls/PL4";
import PL7 from "./components/pls/PL7";
import PL8 from "./components/pls/PL8";
import PL9 from "./components/pls/PL9";
const { Panel } = Collapse;


const p = [
    [0, 70, 63, 56, 0, 0, 0, 0, 0, 0],
    [0, 0, 25, 19, 73, 50, 79, 0, 0, 0],
    [0, 25, 0, 29, 69, 61, 0, 0, 0, 0],
    [0, 19, 29, 0, 67, 45, 0, 0, 85, 0],
    [0, 0, 0, 0, 0, 18, 67, 69, 54, 87],
    [0, 0, 0, 0, 18, 0, 72, 52, 51, 97],
    [0, 0, 0, 0, 0, 0, 0, 17, 31, 72],
    [0, 0, 0, 0, 0, 0, 17, 0, 15, 0],
    [0, 0, 0, 0, 0, 0, 31, 15, 0, 69],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


const App = () => {

    return (
        <div className="content">
            <h1>Linear Program Solver</h1>

            <div className="container">
                <PL1/>
                <PL2/>
                <PL3/>
                <PL4/>
                <PL5/>
                <PL6/>
                <PL7/>
                <PL8/>
                <PL9/>
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
