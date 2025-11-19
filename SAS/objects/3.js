const entreprise = {
    nom: "my company",
    adresse: {
        rue: "123 Main Street",
        ville: "New York",
        codePostal: "10001"
    }
}


class Animal {
    constructor(nom, type) {
        this.nom = nom;
        this.type = type;
    }

    parler() {
        console.log(`${this.nom} fait un bruit`);
    }
}

const chien = new Animal("Rex", "Chien");
console.log(chien);
chien.parler()

const employes = [
    { nom: "John", salaire: 2500, poste: "Developpeur" },
    { nom: "Mary", salaire: 4500, poste: "Chef de projet" },
    { nom: "Peter", salaire: 3200, poste: "Designer" },
    { nom: "Sophia", salaire: 2800, poste: "Developpeuse" },
    { nom: "Luke", salaire: 5500, poste: "Directeur" }
]

const employesSalaireEleve = employes.filter(employe => employe.salaire > 3000);
console.log("Employes avec salaire > 3000:", employesSalaireEleve);

function cloner(obj) {
    return { ...obj };
}

const objetOriginal = {
    nom: "Test",
    valeur: 42,
    details: {
        a: 1,
        b: 2
    }
}

const objetClone = cloner(objetOriginal);
objetClone.nom = "Modified";
objetClone.details.a = 999;

console.log("Objet original:", objetOriginal);
console.log("Objet clone:", objetClone);

