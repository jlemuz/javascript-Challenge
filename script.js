// Assignment Code
 //var generateBtn = document.querySelector("#generate");

//Function generates a random number within a range, and converts it to an ASCII character.
//ASCII character is returned
const generateChar = (min, max)=>{
    randomChar = Math.floor(Math.random() * (max - min) + min);
    return String.fromCharCode(randomChar);
} 

//Function to select random value from function list
const generateNum = (min, max)=>{
  randomFunc = Math.floor(Math.random() * (max - min) + min);
  return randomFunc;
} 

//Functions to generate different character sets: upper, lower, and special characters
const generateUpper = ()=> generateChar(65,90);
const generateLower= ()=> generateChar(97, 122);
const generateSpecial= ()=> generateChar(33, 47);
const generateSpecial2= ()=> generateChar(58,64);
const generateNumber = ()=> generateNum(0,9);
const selectFunct = ()=> generateNum(0,5);


//Array of functions
const funcList = [
  generateUpper,   //0
  generateLower,   //1
  generateSpecial, //2
  generateSpecial2, //3
  generateNumber    //4
];

//filter out functions based on parameters
//create new array
//randomly selectFunct a value from that array



pass = '';
for(i=0; i<12; i++){
  //console.log(selectFunct());
 pass+=funcList[selectFunct()]();
}
console.log(pass);


// const lengthPrompt = ()=> {
//     let length = window.prompt("Length of password?");
//     console.log(length);
//     return length;
// }
// const upperPrompt = ()=> {
//   let upper = window.prompt("Include upper?");
//   console.log(upper);
//   return upper;
// }
// const lowerPrompt = ()=> {
//   let lower = window.prompt("Include lower?");
//   console.log(lower);
//   return lower;
// }
// const specialPrompt = ()=> {
//   let special = window.prompt("Include special?");
//   console.log(special);
//   return special;
// }

// const generatePassword = ()=>{

//   var charLength = lengthPrompt();
//   var upperVal = upperPrompt();
//   var lowerVal= lowerPrompt();
//   var specialVal = specialPrompt();
    
//     let pass='';
//     for(i=0; i<=parseInt(charLength);i++){
//       if(upperVal === 'y'||'Y'){
//         pass+=generateUpper();
//       }
//     }
//     console.log(pass);
//   //pass = charLength + upperVal + lowerVal + specialVal;
//   return pass;
// }

//loops through adding characters to password based on length entered by user


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // // Add event listener to generate button
//  generateBtn.addEventListener("click", writePassword);
