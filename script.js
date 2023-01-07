
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
 
function PrintDeveloperswithMap() {

  arr.map(printingThroghMap);
 
  function printingThroghMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}
 

function PrintDeveloperbyForEach() {

  arr.forEach(printingThroghForEach);
 
  function printingThroghForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}
 
function addData() {
  
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj);
  console.log(arr);
}
 

function removeAdmin() {

  let filtered_arr = arr.filter(function (val) {
    //callback function
    if (val.profession !== "admin") {
      //filtering criteria
      return val;
    }
  });
  console.log(filtered_arr);
}
 

function concatenateArray() {

  let arr2 = [
    { id: 5, name: "Jeevan", age: "28", profession: "Programmer" },
    { id: 6, name: "Dhanraj", age: "38", profession: "developer" },
    { id: 7, name: "Gaidhane", age: "48", profession: "Manager" },
  ];
 
  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
