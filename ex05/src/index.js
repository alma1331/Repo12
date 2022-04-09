var myPetsArray = [
 {
 animalType: "Dog",
 name: [
 "Pujdo"
 ]
 },
 {
     animalType: "Cat",
     name: [
     "Maca"
     ]
     },

     {
         animalType: "Bird",
         name: [
        "Tweety"
         ]
         }
         ];
 


function myPetsFunction(pets)
{



 myPetsArray[0].category[0]; // "BMW X5"
 /*myVehicles[1].category[3]; // "Lamborghini Murciélago"
*/
return pets;
}

console.log(myPetsFunction());
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;