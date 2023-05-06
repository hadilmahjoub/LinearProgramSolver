import React, { useState } from "react";
import { Collapse, Table, Button, Form, Input } from "antd";
import "../CustomCollapse.css";
import { PLservice } from "../../service/plservice";

const { Panel } = Collapse;

const PL2 = () => {
    const title = "PL 2 : Mixage en production";
    const enonce =
        "Une compagnie pétrolière a 5000 barils de pétrole brut de type 1 et 10000 barils de pétrole brut de type 2. La compagnie vend du gazoline et du pétrole de chauffage, qui sont obtenus à partir du mixage des deux type de brut. Chaque baril de type 1 a un niveau de qualité 10 et celui de type 2 un niveau de qualité 5. Un baril est considérécomme gazoline s’il a un niveau de qualité minimum de 8. Il considéré comme pétrole de chauffage s’il est de qualité minimum de 6. Un baril de gazoline se vend à 25 D, alors qu’un baril de pétrole de chauffage se vend à20 D. Les frais de marketing associé à la vente d’un baril sont estimés à 0,2 D pour un baril de Gazoline et 0,1 D pour un baril de pétrole à chauffage. La demande de ces deux produits est supposée illimitée de sorte que tout ce qui est produit peut être vendu. Déterminer le mixage optimal.";

    const tableColumns1 = [
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Type 1",
            dataIndex: "type1",
            key: "type1",
        },
        {
            title: "Type 2",
            dataIndex: "type2",
            key: "type2",
        },
    ];

    const tableData1 = [
        {
            key: "1",
            type: "Quantité",
            type1: (
                <Form.Item name="form1-1" initialValue={5000}>
                    <Input type="number" />
                </Form.Item>
            ),
            type2: (
                <Form.Item name="form1-2" initialValue={10000}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
        {
            key: "2",
            type: "Qualité",
            type1: (
                <Form.Item name="form2-1" initialValue={10}>
                    <Input type="number" />
                </Form.Item>
            ),
            type2: (
                <Form.Item name="form2-2" initialValue={5}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
    ];

    const tableColumns2 = [
        {
            title: "Produit",
            dataIndex: "produit",
            key: "produit",
        },
        {
            title: "Prix de vente",
            dataIndex: "prix",
            key: "prix",
        },
        {
            title: "Frais de marketing",
            dataIndex: "frais",
            key: "frais",
        },
        {
            title: "Qualité minimale",
            dataIndex: "qualite",
            key: "qualite",
        },
    ];

    const tableData2 = [
        {
            key: "1",
            produit: "Gazoline",
            prix: (
                <Form.Item name="form3-1" initialValue={25}>
                    <Input type="number" />
                </Form.Item>
            ),
            frais: (
                <Form.Item name="form3-2" initialValue={0.2}>
                    <Input type="number" />
                </Form.Item>
            ),
            qualite: (
                <Form.Item name="form3-3" initialValue={8}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
        {
            key: "2",
            produit: "Petrole de chauffage",
            prix: (
                <Form.Item name="form4-1" initialValue={20}>
                    <Input type="number" />
                </Form.Item>
            ),
            frais: (
                <Form.Item name="form4-2" initialValue={0.1}>
                    <Input type="number" />
                </Form.Item>
            ),
            qualite: (
                <Form.Item name="form4-3" initialValue={6}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
    ];

    const tables = [
        {
            col: tableColumns1,
            data: tableData1,
        },
        {
            col: tableColumns2,
            data: tableData2,
        },
    ];

    const onFinish = async (values) => {
        const request = {
            quantite: [],
            qualite: [],
            gazoline: [],
            chauffage: [],
        };

        for (const [key, value] of Object.entries(values)) {
            if (key.includes("form1")) {
                request.quantite.push(parseFloat(value));
            }

            if (key.includes("form2")) {
                request.qualite.push(parseFloat(value));
            }

            if (key.includes("form3")) {
                request.gazoline.push(parseFloat(value));
            }

            if (key.includes("form4")) {
                request.chauffage.push(parseFloat(value));
            }
        }

        console.log(request);

        const final_result = await PLservice(request, "pl2");
        setResult(final_result.res2);
    };

    const [result, setResult] = useState(null);

    return (
        <Collapse className="collpase">
            <Panel header={title}>
                <p>{enonce}</p>
                <div className="tabs-container">
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Table
                            dataSource={tables[0].data}
                            columns={tables[0].col}
                            pagination={false}
                        />
                        <Table
                            dataSource={tables[1].data}
                            columns={tables[1].col}
                            pagination={false}
                        />

                        <div className="btns-container">
                            <Form.Item>
                                <Button htmlType="submit">Solve</Button>
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="reset">Reset</Button>
                            </Form.Item>
                        </div>

                        <div className="solution">
                            {result != null ? (
                                <div>
                                    <h2>Mixage optimal</h2>
                                    {console.log(Object.entries(result)[0])}
                                    <div>
                                        {Object.entries(result)[0][0]} :{" "}
                                        {Object.entries(result)[0][1]}
                                    </div>
                                    <div>
                                        {Object.entries(result)[2][0]} :{" "}
                                        {Object.entries(result)[2][1]}
                                    </div>

                                    <br />
                                    <h2>{Object.entries(result)[1][0]}</h2>
                                    <div>{Object.entries(result)[1][1]}</div>

                                    {/* {Object.entries(result).map(
                                        (item, index) => {
                                            return (
                                                <div key={index}>
                                                    {item[0]} : {item[1]}
                                                </div>
                                            );
                                        }
                                    )} */}
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </Form>
                </div>
            </Panel>
        </Collapse>
    );
};

export default PL2;
