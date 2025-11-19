// quick access
[
  remplirTableau,
  sommeTableau,
  maxTableau,
  compterOccurrences,
  inverserTableau,
  filtrerPairs,
  moyenne,
  doubler,
  fusionner,
  supprimerDoublons,
  tableMultiplication,
  motsLongs
]

// 
// challenge 1
// 
function remplirTableau(input) {
  const tableau = [];
  input.split(",").map((num) => tableau.push(Number(num)));
  return tableau;
}
// const tableau = remplirTableau();

// 
// challenge 2
//

function sommeTableau(tab = []){
    return tab.reduce((prev , cur )=>prev+=cur)
}

// console.log(sommeTableau([1,2,3]))

// 
// challenge 3
// 

function maxTableau(tab = []){
  return tab.sort((a,b)=>a-b).at(-1)
}
// console.log(maxTableau([11,1,2,4]));

// 
// challenge 4
// 
function compterOccurrences(tab = [], valeur){
  let occurrences = 0
  tab.map((el)=>el === valeur ? occurrences++ : "")
  return occurrences
}
// console.log(compterOccurrences([1,2,3,3] , 3))

// 
// challenge 4 again :D 
// 
function inverserTableau(tab = []){return [...tab].reverse()}

// 
// challenge 5
// 
function filtrerPairs(tab = []){
  return tab.filter((num)=>num % 2 === 0)
} 

// console.log(filtrerPairs([1,2,3,4]));


// 
// challenge 6
// 





// 
// challenge 7
// 

function moyenne(tab = []){
  return tab.reduce((prev,curr) => prev + curr) / tab.length  
}
// console.log(moyenne([2,2,1,1]));

// 
// challenge 8
// 

function doubler(tab = []) {return tab.map(num => num*2)}

// console.log(doubler([2,4]))

// 
// challenge 9
//

function fusionner(tab1 = [], tab2 = []) { return tab1.concat(tab2)}

// console.log(fusionner([1], [2]));

// 
// challenge 10
// 

function supprimerDoublons(tab = []){
  let cleanArray= []
  tab.map(num => cleanArray.includes(num) ? "" : cleanArray.push(num) )
  return cleanArray
}
// console.log(supprimerDoublons([1,1,2,2,3,3]))

// 
// challenge 11
// 

// just experimenting :)
function tableMultiplication(num){
  let range  = Array.from({length:10})
  return range.map((el , idx)=>num * ++idx)
}
// console.log(tableMultiplication(3));

// 
// challenge 12
// 

function motsLongs(tabMots = [], longueur) {
  return tabMots.filter((mot)=>mot.length >= longueur)
}

// console.log(motsLongs(["walid" , "reda" , "ali"] , 5))




