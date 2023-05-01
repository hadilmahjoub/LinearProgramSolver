import React from "react";
import { Collapse, Table, Button, Form, Input } from "antd";
import "../CustomCollapse.css";

const { Panel } = Collapse;

const PL6 = () => {
    const title = "PL 6 : Distribution de produit";
    const enonce =
        "L’entreprise TOMO produit des conserves de tomates dans trois usines A, B et C de capacité de production annuelle respective de 200, 300 et 100 tonnes. Elle a deux clients E et F dont les demandes annuelles sont respectivement de 400 et 180 tonnes. L’entreprise dispose de deux dépôts D1, D2 par lesquels peut transiter les marchandises. Les coûts de productions sont identiques pour les trois usines. Les possibilités de transport ainsi que les coûts de transport par tonne sont donnés par le tableau suivant. La quantité pouvant être transporté entre deux nœuds quelconques ne peut dépasser les 200 tonnes. Représenter graphiquement le modèle logistique de l’entreprise. Développer un système permettant de déterminer la politique optimale de transport et de transbordement. Les cases vides indiquent une impossibilité de transport.";

    const tableColumns1 = [
        {
            title: "Transport",
            dataIndex: "transport",
            key: "transport",
        },
        {
            title: "A",
            dataIndex: "a",
            key: "a",
        },
        {
            title: "B",
            dataIndex: "b",
            key: "b",
        },
        {
            title: "C",
            dataIndex: "c",
            key: "c",
        },
        {
            title: "D1",
            dataIndex: "d1",
            key: "d1",
        },
        {
            title: "E",
            dataIndex: "e",
            key: "e",
        },
        {
            title: "F",
            dataIndex: "f",
            key: "f",
        },
    ];

    const tableData1 = [
        {
            key: "1",
            transport: "A",
            a: "-",
            b: (
                <Form.Item name="form1-B" initialValue={5}>
                    <Input />
                </Form.Item>
            ),
            c: (
                <Form.Item name="form1-C" initialValue={3}>
                    <Input />
                </Form.Item>
            ),
            d1: (
                <Form.Item name="form1-D1" initialValue={5}>
                    <Input />
                </Form.Item>
            ),
            d2: (
                <Form.Item name="form1-D2" initialValue={5}>
                    <Input />
                </Form.Item>
            ),
            e: (
                <Form.Item name="form1-E" initialValue={20}>
                    <Input />
                </Form.Item>
            ),
            f: (
                <Form.Item name="form1-F" initialValue={20}>
                    <Input />
                </Form.Item>
            ),
        },
        {
            key: "2",
            transport: "B",
            a: (
                <Form.Item name="form2-A" initialValue={9}>
                    <Input />
                </Form.Item>
            ),
            b: "-",
            c: (
                <Form.Item name="form2-C" initialValue={9}>
                    <Input />
                </Form.Item>
            ),
            d1: (
                <Form.Item name="form2-D1" initialValue={1}>
                    <Input />
                </Form.Item>
            ),
            d2: (
                <Form.Item name="form2-D2" initialValue={1}>
                    <Input />
                </Form.Item>
            ),
            e: (
                <Form.Item name="form2-E" initialValue={8}>
                    <Input />
                </Form.Item>
            ),
            f: (
                <Form.Item name="form2-F" initialValue={15}>
                    <Input />
                </Form.Item>
            ),
        },
        {
            key: "3",
            transport: "C",
            a: (
                <Form.Item name="form3-A" initialValue={0.4}>
                    <Input />
                </Form.Item>
            ),
            b: (
                <Form.Item name="form3-B" initialValue={8}>
                    <Input />
                </Form.Item>
            ),
            c: "-",
            d1: (
                <Form.Item name="form3-D1" initialValue={1}>
                    <Input />
                </Form.Item>
            ),
            d2: (
                <Form.Item name="form3-D2" initialValue={0.5}>
                    <Input />
                </Form.Item>
            ),
            e: (
                <Form.Item name="form3-E" initialValue={10}>
                    <Input />
                </Form.Item>
            ),
            f: (
                <Form.Item name="form3-F" initialValue={12}>
                    <Input />
                </Form.Item>
            ),
        },
        {
            key: "4",
            transport: "D1",
            a: "-",
            b: "-",
            c: "-",
            d1: "-",
            d2: (
                <Form.Item name="form4-D2" initialValue={1.2}>
                    <Input />
                </Form.Item>
            ),
            e: (
                <Form.Item name="form4-E" initialValue={2}>
                    <Input />
                </Form.Item>
            ),
            f: (
                <Form.Item name="form4-F" initialValue={12}>
                    <Input />
                </Form.Item>
            ),
        },
        {
            key: "5",
            transport: "D2",
            a: "-",
            b: "-",
            c: "-",
            d1: (
                <Form.Item name="form5-D1" initialValue={0.8}>
                    <Input />
                </Form.Item>
            ),
            d2: "-",
            e: (
                <Form.Item name="form5-E" initialValue={2}>
                    <Input />
                </Form.Item>
            ),
            f: (
                <Form.Item name="form5-F" initialValue={12}>
                    <Input />
                </Form.Item>
            ),
        },
        {
            key: "5",
            transport: "E",
            a: "-",
            b: "-",
            c: "-",
            d1: "-",
            d2: "-",
            e: "-",
            f: (
                <Form.Item name="form6-F" initialValue={1}>
                    <Input />
                </Form.Item>
            ),
        },
        {
            key: "6",
            transport: "F",
            a: "-",
            b: "-",
            c: "-",
            d1: "-",
            d2: "-",
            e: (
                <Form.Item name="form7-F" initialValue={7}>
                    <Input />
                </Form.Item>
            ),
            f: "-",
        },
    ];

    const tables = [
        {
            col: tableColumns1,
            data: tableData1,
        },
    ];

    const onFinish = (values) => {
        const request = {
            rowA: [],
            rowB: [],
            rowC: [],
            rowD1: [],
            rowD2: [],
            rowE: [],
            rowF: [],
        };

        for (const [key, value] of Object.entries(values)) {
            if (key.includes("form1")) {
                request.rowA.push(value);
            }

            if (key.includes("form2")) {
                request.rowB.push(value);
            }

            if (key.includes("form3")) {
                request.rowC.push(value);
            }
            if (key.includes("form4")) {
                request.rowD1.push(value);
            }

            if (key.includes("form5")) {
                request.rowD2.push(value);
            }

            if (key.includes("form6")) {
                request.rowE.push(value);
            }

            if (key.includes("form7")) {
                request.rowF.push(value);
            }
        }

        console.log(request);
    };

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
                        <div className="btns-container">
                            <Form.Item>
                                <Button htmlType="submit">Solve</Button>
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="reset">Reset</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Panel>
        </Collapse>
    );
};

export default PL6;
