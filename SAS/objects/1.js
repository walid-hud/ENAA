const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}
console.log(car.make, car.year);

car.year = 2020

console.log(`updated car :` , car);

car.color = "red"

delete car.model
