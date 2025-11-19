// const student = {
//     name:"walid" , age:21 ,
//     sePresenter(){
//         console.log(`Bonjour, je m’appelle ${this.name} et j’ai ${this.age} ans.`);
//     }
// }

// const person = {
//     name: "John Doe",
//     age: 67,
//     city: "ohio",
//     occupation: "rizzler"
// }

// for(let key in person){
//     console.log(person[key]);
    
// }

// const Class = {
//     etudiants: ["Goofy McGoofface","Silly Billy","Wacky Jackie","Dizzy Lizzy"],
//     afficherEtudiants(){
//         this.etudiants.map(etudiant => console.log(etudiant));
//     }
// }


const books = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", anne: 1943 },
    { titre: "Les Misérables", auteur: "Victor Hugo", anne: 1862 },
    { titre: "Madame Bovary", auteur: "Gustave Flaubert", anne: 1856 },
]
// books.map(book=>console.log(book.titre))


function trouverLivre(titre =""){
    return books.find(book => book.titre.toLowerCase() === titre.toLowerCase()) || "Livre non trouvé";
     
}

console.log(
    trouverLivre("Le Petit Prince")
)