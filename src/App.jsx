import React from "react";
import CustomCollapse from "./components/CustomCollapse";
import "./App.css";
import "./components/CustomCollapse.css";

import { Collapse } from "antd";
const { Panel } = Collapse;

const App = () => {
    const pls = [
        {
            title: "PL 1 : Gestion optimale d’une zone agricole",
            enonce: "L’Etat tunisien veut mettre en valeur une zone agricole de 1000 hectares ou cinq cultures sont à priori possibles : le blé, l’orge, le mais, la betterave à sucre et le tournesol. Les disponibilités des différents facteurs de production sont comme suit : Main d’œuvre : 3000 ouvriers agricoles. Eau d’irrigation : 25000000 m3. Heures machine : 24000 Heures machine",
            model: "Lorem ipsum dolor, \n sit amet consectetur adipisicing elit. \n Fugiat obcaecati accusantium animi\n consequuntur illo vel, \n id quod consectetur soluta atque.",
        },
        {
            title: "PL 2 : Mixage en production",
            enonce: "Une compagnie pétrolière a 5000 barils de pétrole brut de type 1 et 10000 barils de pétrole brut de type 2. La compagnie vend du gazoline et du pétrole de chauffage, qui sont obtenus à partir du mixage des deux type de brut. Chaque baril de type 1 a un niveau de qualité 10 et celui de type 2 un niveau de qualité 5. Un baril est considérécomme gazoline s’il a un niveau de qualité minimum de 8. Il considéré comme pétrole de chauffage s’il est de qualité minimum de 6. Un baril de gazoline se vend à 25 D, alors qu’un baril de pétrole de chauffage se vend à20 D. Les frais de marketing associé à la vente d’un baril sont estimés à 0,2 D pour un baril de Gazoline et 0,1 D pour un baril de pétrole à chauffage. La demande de ces deux produits est supposée illimitée de sorte que tout ce qui est produit peut être vendu. Déterminer le mixage optimal.",
            model: "Lorem ipsum dolor, \n sit amet consectetur adipisicing elit. \n Fugiat obcaecati accusantium animi\n consequuntur illo vel, \n id quod consectetur soluta atque.",
        },
        {
            title: "PL 3 : Planification des besoins en ressources humaines",
            enonce: "Un bureau de poste a des besoins en personnel lors des sept jours de la semaine, donnés par le tableau suivant :Jour Lundi Mardi Mercredi Jeudi Vendredi Samedi Dimanche Minimun requis 17 13 15 19 14 16 11.Déterminer la planification permettant de satisfaire les besoins du bureau en recourant au minimun d’employés tout en sachant que chaque employé doit travailler pendant cinq jours consécutifs avant de prendre deux jours de congé.",
            model: "Lorem ipsum dolor, \n sit amet consectetur adipisicing elit. \n Fugiat obcaecati accusantium animi\n consequuntur illo vel, \n id quod consectetur soluta atque.",
        },
        {
            title: "PL 4 : Gestion de la production",
            enonce: "Pendant les quatre prochains mois l’entreprise ChausseTous doit satisfaire à temps les demandes en chaussures de ses clients. La demande est de 3000 paires pour le premier mois, 5000 pour le second, 2000 pour le troisième et 1000 pour le quatrième mois. Au début du premier mois, on a 500 paires en stock et on dispose de 100 ouvriers. Un ouvrier est payé 1500 D par mois. Un ouvrier travaille 160 heures par mois avant de considérer les heures supplémentaires. Un ouvrier peut faire un maximum de 20 heures supplémentaires par mois et est payé 13 D par heure. Une paire de chaussure prend 4 heures de travail de l’ouvrier et 15 D de matière première. Au début d’un mois donné on peut recruter ou licencier des ouvriers. Les frais de recrutement d’un ouvrier sont estimés à 1600 D, les frais de licenciement sont estimés à 2000 D. A la fin d’un mois donné, on estime à 3 D les coûts de stockage d’une paire de chaussure. La demande d’un mois est satisfaite de la production du mois et du stock au début du mois. Déterminer le planning optimal de production ainsi que la politique optimale de gestion des ouvriers.",
            model: "sit amet consectetur adipisicing elit.",
        },
        {
            title: "PL 5 : La production d’électricité",
            enonce: "La société STE produit de l’électricité dans trois centrales et fourni l’électricité à quatre villes. L’offre des trois centrales est donnée en million de Kwh dans le tableau 1. Le tableau 2 donne, en million de Kwh, la demande maximale de chacune des quatre villes. Le coût de transport d’un Kwh d’une centrale donnée à une ville donnée est donné par le tableau 3. \n 1. Déterminer la meilleure politique permettant de satisfaire les demandes des quatre villes. \n 2. Supposons que la demande de chacune des villes a augmenté de 5 millions de Kwh. Déterminer la meilleure politique permettant de satisfaire au mieux les différentes demandes en sachant que l’on subi une pénalité pour toute unité de demande non satisfaite (voir tableau 4). ",
            model: "",
        },
        {
            title: "PL 6 : Distribution de produit",
            enonce: "L’entreprise TOMO produit des conserves de tomates dans trois usines A, B et C de capacité de production annuelle respective de 200, 300 et 100 tonnes. Elle a deux clients E et F dont les demandes annuelles sont respectivement de 400 et 180 tonnes. L’entreprise dispose de deux dépôts D1, D2 par lesquels peut transiter les marchandises. Les coûts de productions sont identiques pour les trois usines. Les possibilités de transport ainsi que les coûts de transport par tonne sont donnés par le tableau suivant. La quantité pouvant être transporté entre deux nœuds quelconques ne peut dépasser les 200 tonnes. Représenter graphiquement le modèle logistique de l’entreprise. Développer un système permettant de déterminer la politique optimale de transport et de transbordement. Les cases vides indiquent une impossibilité de transport.",
            model: "",
        },
        {
            title: "PL 7 : Affectation optimale de ressources",
            enonce: "Une Société a lancé un appel d’offre pour huit projets. Six entreprises ont répondu par des offres conformément au tableau suivant. On veut déterminer l’affectation optimale permettant de réalisé les huit projets à un coût minimun tout en considérant que  1. Toute entreprise sans offre pour un projet ne peut être sélectionné pour ce projet. \n 2. Exactement une entreprise pour un projet. \n 3. Une entreprise ne peut réalisé plus de deux projets.",
            model: "",
        },
        {
            title: "PL 8 : Remplacement d’équipement",
            enonce: "Cas introductif : Le plus court chemin \n Soit un voyageur qui part de la ville 1 pour atteindre la ville 10, les distances entre et les sens des déplacements son donnés par le tableau suivant. Représenter par un graphe le réseau de circulation. Développer un système de décision permettant de déterminer le chemin le plus court de 1 à 10.",
            model: "",
        },
        {
            title: "PL 9 : Localisation d’usine et de dépôts et Planification logistique ",
            enonce: "Tomo producteur de conserve de tomate veut déterminer les usines et les dépôts qu’elle doit avoir pour optimiser son exploitation. Cinq usines et trois dépôts sont sous considération. Les capacités de production (en tonnes) des usines sont données par le tableau 1. Les coûts de production et de transport d’une tonne de conserve d’une usine vers un dépôt sont donnés par le tableau 2. Les coûts de transport d’une tonne de conserve d’un dépôt à un client donné parmi les quatre clients de l’entreprise sont donnés par le tableau 3. Le tableau 4 donne les quantités (en tonnes) requises par chacun des quatre clients. Le tableau 5 donne les coûts fixes annuels. Développer un système pour aider à prendre la meilleure décision.",
            model: "",
        },
    ];

    return (
        <div className="content">
            <h1>Linear Program Solver</h1>
            <div className="container">
                {pls.map((pl, index) => (
                    <div key={index}>
                        <CustomCollapse pl={pl} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default App;
