import React from "react";
import { Collapse, Table, Button, Form, Input } from "antd";
import "../CustomCollapse.css";

const { Panel } = Collapse;

const PL4 = () => {
    const title = "PL 4 : Gestion de la production";
    const enonce =
        "Pendant les quatre prochains mois l’entreprise ChausseTous doit satisfaire à temps les demandes en chaussures de ses clients. La demande est de 3000 paires pour le premier mois, 5000 pour le second, 2000 pour le troisième et 1000 pour le quatrième mois. Au début du premier mois, on a 500 paires en stock et on dispose de 100 ouvriers. Un ouvrier est payé 1500 D par mois. Un ouvrier travaille 160 heures par mois avant de considérer les heures supplémentaires. Un ouvrier peut faire un maximum de 20 heures supplémentaires par mois et est payé 13 D par heure. Une paire de chaussure prend 4 heures de travail de l’ouvrier et 15 D de matière première. Au début d’un mois donné on peut recruter ou licencier des ouvriers. Les frais de recrutement d’un ouvrier sont estimés à 1600 D, les frais de licenciement sont estimés à 2000 D. A la fin d’un mois donné, on estime à 3 D les coûts de stockage d’une paire de chaussure. La demande d’un mois est satisfaite de la production du mois et du stock au début du mois. Déterminer le planning optimal de production ainsi que la politique optimale de gestion des ouvriers.";

    const tableColumns1 = [
        {
            title: "Mois",
            dataIndex: "mois",
            key: "mois",
        },
        {
            title: "Demande",
            dataIndex: "demande",
            key: "demande",
        },
        {
            title: "Stock Initial",
            dataIndex: "stock_initial",
            key: "stock_initial",
        },
        {
            title: "Coute de stockage",
            dataIndex: "stock_cout",
            key: "stock_cout",
        },
    ];

    const tableData1 = [
        {
            key: "1",
            mois: 1,
            demande: (
                <Form.Item name="form1-demande1" initialValue={3000}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_initial: (
                <Form.Item name="form2-stock1" initialValue={500}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_cout: (
                <Form.Item name="form3-cout1" initialValue={3}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
        {
            key: "2",
            mois: 2,
            demande: (
                <Form.Item name="form1-demande2" initialValue={5000}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_initial: (
                <Form.Item name="form2-stock2" initialValue={0}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_cout: (
                <Form.Item name="form3-cout2" initialValue={0}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
        {
            key: "3",
            mois: 3,
            demande: (
                <Form.Item name="form1-demande3" initialValue={2000}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_initial: (
                <Form.Item name="form2-stock3" initialValue={0}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_cout: (
                <Form.Item name="form3-cout3" initialValue={0}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
        {
            key: "4",
            mois: 4,
            demande: (
                <Form.Item name="form1-demande4" initialValue={1000}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_initial: (
                <Form.Item name="form2-stock4" initialValue={0}>
                    <Input type="number" />
                </Form.Item>
            ),
            stock_cout: (
                <Form.Item name="form3-cout4" initialValue={0}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
    ];
    const tableColumns2 = [
        {
            title: "Ressources",
            dataIndex: "ressources",
            key: "ressources",
        },
        {
            title: "Disponibilité",
            dataIndex: "dispo",
            key: "dispo",
        },
        {
            title: "Cout unitaire",
            dataIndex: "cout_unitaire",
            key: "cout_unitaire",
        },
    ];

    const tableData2 = [
        {
            key: "1",
            ressources: "Ouvriers",
            dispo: (
                <Form.Item name="form5-1" initialValue={100}>
                    <Input type="number" />
                </Form.Item>
            ),
            cout_unitaire: (
                <Form.Item name="form5-2" initialValue={1500}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
        {
            key: "2",
            ressources: "Heures supplémentaires",
            dispo: (
                <Form.Item name="form6-1" initialValue={20}>
                    <Input type="number" />
                </Form.Item>
            ),
            cout_unitaire: (
                <Form.Item name="form6-2" initialValue={13}>
                    <Input type="number" />
                </Form.Item>
            ),
        },
    ];

    const tableColumns3 = [
        {
            title: "Produit",
            dataIndex: "produit",
            key: "produit",
        },
        {
            title: "Temps de production",
            dataIndex: "production",
            key: "production",
        },
        {
            title: "Cout de la matiere premiere",
            dataIndex: "cout_matiere_premiere",
            key: "cout_matiere_premiere",
        },
    ];

    const tableData3 = [
        {
            key: "1",
            produit: "Paire de chaussures",
            production: (
                <Form.Item name="form7-1" initialValue={4}>
                    <Input type="number" />
                </Form.Item>
            ),
            cout_matiere_premiere: (
                <Form.Item name="form7-2" initialValue={15}>
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
        {
            col: tableColumns3,
            data: tableData3,
        },
    ];

    const onFinish = (values) => {
        const request = {
            mois: [1, 2, 3, 4],
            demande: [],
            stock_initial: [],
            stock_cout: [],
            ouvriers: [],
            heures_supp: [],
            produit: [],
        };

        for (const [key, value] of Object.entries(values)) {
            if (key.includes("form1")) {
                request.demande.push(value);
            }

            if (key.includes("form2")) {
                request.stock_initial.push(value);
            }

            if (key.includes("form3")) {
                request.stock_cout.push(value);
            }

            if (key.includes("form4")) {
                request.stock_initial.push(value);
            }
            if (key.includes("form5")) {
                request.ouvriers.push(value);
            }

            if (key.includes("form6")) {
                request.heures_supp.push(value);
            }

            if (key.includes("form7")) {
                request.produit.push(value);
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
                        <Table
                            dataSource={tables[1].data}
                            columns={tables[1].col}
                            pagination={false}
                        />
                        <Table
                            dataSource={tables[2].data}
                            columns={tables[2].col}
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

export default PL4;
