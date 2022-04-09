var collection = {
 2548: {
 album: "Slippery When Wet",
 artist: "Bon Jovi",
 tracks: [
 "Let It Rock",
 "You Give Love a Bad Name"
 ]
 },
 2468: {
 album: "1999",
 artist: "Prince",
 tracks: [
 "1999",
 "Little Red Corvette"
 ]
 },
 1245: {
 artist: "Robert Palmer",
 tracks: [ ]
 },
 5439: {
 album: "ABBA Gold"
 }
 };
 // Keep a copy of the collection for tests
 var oldCollection = JSON.parse(JSON.stringify(collection));
 function updateRecords(object, id, prop, value) {
 // Only change code below this line
 // Only change code above this line
 }
 
// Only change code below this line
function updateRecords(collection, id, prop, value) {
//if a value is set...
if(value !==""){
 //first check if the property is not 'tracks'. If it's anything else, update
 //that entry with the new value.
 if(prop !== "tracks"){
   collection[id][prop] = value;
 }
 //otherwise if the property IS 'tracks'...
 else{
   //see if the collection id already has a 'tracks' property. If it does
   //push the new value to the array.
   if(collection[id].hasOwnProperty("tracks")){
     collection[id][prop].push(value);
   }
   //if there is no tracks property create one and add the array.
   else{
     var arr = [value];
     collection[id][prop] = arr;
   }
 }
} //end if there's a value

//if there's no value set for the property then delete that property
else{
 delete collection[id][prop];
}

return oldCollection;
}

// Alter values below to test your code
console.log(updateRecords(collection,5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));

module.exports = updateRecords;