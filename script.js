// Assignment Code
 var generateBtn = document.querySelector("#generate");

//Function generates a random number within a range, and converts it to an ASCII character.
//ASCII character is returned
const generateChar = (min, max)=>{
    randomChar = Math.floor(Math.random() * (max - min) + min);
    return String.fromCharCode(randomChar);
} 
//Function to select random value from function array
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

//filter out functions based on parameters
//create new array
//randomly selectFunct a value from that array

const lengthPrompt = ()=> {
    let length = window.prompt("Length of password?" );
    console.log(length);
    return length;
}
const upperPrompt = ()=> {
  let upper = window.confirm("Include upper?");
  console.log(upper);
  return upper;
}
const lowerPrompt = ()=> {
  let lower = window.confirm("Include lower?");
  console.log(lower);
  return lower;
}
const numberPrompt = ()=> {
  let includeNum = window.confirm("Include numbers?");
  console.log(includeNum);
  return includeNum;
}
const specialPrompt = ()=> {
  let special = window.confirm("Include special?");
  console.log(special);
  return special;
}
const generatePassword = ()=>{
  do {length = lengthPrompt();}
  while(( /^[0-9.,]+$/.test(length))===false)

  do{
    window.alert("You must confirm at least one of the criteria")
    upper = upperPrompt();
    lower = lowerPrompt();
    special = specialPrompt();
    num = numberPrompt();}
  while(upper!=true && lower!=true && special!=true && num!=true)

//Array of functions
  const funcList = [
    {name: generateUpper, include: upper},  //0
    {name: generateLower, include: lower},   //1
    {name: generateSpecial, include: special}, //2
    {name: generateSpecial2, include: special}, //3
    {name: generateNumber, include: num}    //4
  ];

  const passPattern = funcList.filter(a=> a.include===true).map(i=> {return i.name;});
  pass = '';
    for(i=0; i<length; i++){
      pass+=passPattern[generateNum(0,passPattern.length)]();
      console.log(pass);
    }

  return pass;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// // // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
