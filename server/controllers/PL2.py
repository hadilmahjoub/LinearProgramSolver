import gurobipy as gp

class PL2:
    def __init__(self,niveau_qualite,nb_barils,prix_vente,frais_marketing, min_qualite):
        self.niveau_qualite = niveau_qualite
        self.nb_barils = nb_barils
        self.prix_vente = prix_vente
        self.frais_marketing = frais_marketing
        self.min_qualite = min_qualite

    def run(self):
        # Initialisation du modèle
        model = gp.Model("PL2")
        model.params.NonConvex = 2

        # Ajout des variables de décision
        gazoline = model.addVar(lb=0, ub=1, name="gazoline")
        chauffage = model.addVar(lb=0, ub=1, name="chauffage")

        # Fonction objectif : maximiser le profit total
        model.setObjective((self.prix_vente[0] - self.frais_marketing[0]) * gazoline 
                           + (self.prix_vente[1] - self.frais_marketing[1]) * chauffage, gp.GRB.MAXIMIZE)

        # Contraintes
        d1 = model.addVar(0, name="denominateur1")
        d2 = model.addVar(0, name="denominateur2")
        model.addConstr( d1 == 1 / self.nb_barils[0]*gazoline 
                        + self.nb_barils[1]*chauffage )
        model.addConstr( d2 == 1 / self.nb_barils[0]*(1-gazoline) 
                        + self.nb_barils[1]*(1-chauffage) )

        model.addConstr( ( (self.niveau_qualite[0]*self.nb_barils[0]*gazoline 
                            + self.niveau_qualite[1]*self.nb_barils[1]*chauffage) * d1 ) >= self.min_qualite[0], name="c1")
        model.addConstr( ( (self.niveau_qualite[0]*self.nb_barils[0]*(1-gazoline) 
                            + self.niveau_qualite[1]*self.nb_barils[1]*(1-chauffage)) * d2) >= self.min_qualite[1], name="c2")

        # Resolution
        model.optimize()

        resultat = {
            "Gazoline": str(gazoline.x),
            "Pétrole de chauffage": str(chauffage.x),
            "Profit total": str(model.objVal) + "DT"
        }

        return resultat
