// check adult using function
//function checkAdult(age){
//if (age >= 18){
//   return "person is adult"
//}

 //else {
 //   return"person is underage"
    
//}


//console.log(checkAdult(19)

// check adult using arrow
//const checkAdult =(age) => {
//if (age >= 18){ return"adult"}
//else{return"minor"}
//}
//
//console.log(checkAdult(20))

//check whether number is zero positive or negative

//function checkNumber(num){
  //  if (num === 0) {return "zero"}
 //   if (num > 0) {return "positive"}
 //   else{
  //      return"negative"
   // }
//}

//console.log(checkNumber(5));
// code where loop is needed
 //   for( let i = 1; i <= 20 ;i++ ) {
   //     if (i%2===0){

 //   console.log(i)
   //     }
   // }

// object where data such name marks are stored
//let student= {
 //Name:"Bibek",
// Rollno:22,
// MArks :35 
//};
//console.log(student);
const students=[
  { name:"Bibek",rollno: 20,marks:70},
  { name :"Ram",rollno:21,marks:65},
  { name :"Hari",rollno:22,marks:63}
]

console.table(students);
