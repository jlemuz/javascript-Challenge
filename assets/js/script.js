// Assignment Code
 var generateBtn = document.querySelector("#generate");

//Function generates a random number within a range, and converts it to an ASCII character.
//ASCII character is returned
const generateChar = (min, max)=>{
    randomChar = Math.floor(Math.random() * (max - min) + min);
    return String.fromCharCode(randomChar);
} 
//Function to select random value from function array
//Will be used to randomly select a function based on the filtered array
const generateNum = (min, max)=>{
  randomFunc = Math.floor(Math.random() * (max - min) + min);
  return randomFunc;
} 
//Functions to generate different character sets:
//uppercase, lowercase, numbers and special characters
const generateUpper = ()=> generateChar(65,90);
const generateLower= ()=> generateChar(97, 122);
const generateSpecial= ()=> generateChar(33, 47);
const generateSpecial2= ()=> generateChar(58,64);
//returns a number not a string 
const generateNumber = ()=> generateNum(0,9);

//This is a set of prompts for the length and all the criteria options
//Users will need to confirm which criteria they'd like and the value will be assigned to a variable
const lengthPrompt = ()=> {
    let length = window.prompt("Length of password? Please enter a digit between 8 and 128." );
    return length;
}
const upperPrompt = ()=> {
  let upper = window.confirm("Include uppercase characters?");
  return upper;
}
const lowerPrompt = ()=> {
  let lower = window.confirm("Include lowercase characters?");
  return lower;
}
const numberPrompt = ()=> {
  let includeNum = window.confirm("Include numeric characters?");
  return includeNum;
}
const specialPrompt = ()=> {
  let special = window.confirm("Include special characters?");
  return special;
}
//This function takes in the prompt parameters, passes the values into the function array
//and generates the random password
const generatePassword = ()=>{
  //This prompt will occur until the user enters a digit betweem 8-128
  
    do {length = lengthPrompt();}
    while(( /^[0-9.,]+$/.test(length))===false || ((/^[8-9]$|^[1-9][0-9]$|[1][0][9]|^[1][012][0-8]$/).test(length))===false)

  //This set of confirm prompts will appear until at least one criteria is selected
  //Then this set of values are assigned to a variable which is passed to the function list array
  do{
    window.alert("You must confirm at least one of the criteria")
    upper = upperPrompt();
    lower = lowerPrompt();
    num = numberPrompt();
    special = specialPrompt();

  }
    //this while case shows that all the criteria were set to false
  while(upper!=true && lower!=true && special!=true && num!=true)

//Array of functions initialized and the 'include' key value pair is whether the user chose to include the character in the initial prompts
//Include value is a boolean value
  const funcList = [
    {name: generateUpper, include: upper},  //0
    {name: generateLower, include: lower},   //1
    {name: generateSpecial, include: special}, //2
    {name: generateSpecial2, include: special}, //3
    {name: generateNumber, include: num}    //4
  ];

  //This function filters out the false criteria and returns an array of functions with only the
  //included criteria
  const passPattern = funcList.filter(a=> a.include===true).map(i=> {return i.name;});
  //The password string is initialized and the for loop loops through the filtered 
  //function array. Therefore, only characters that the user selected to be included
  //will be added to the password string
  pass = '';
    for(i=0; i<length; i++){
      pass+=passPattern[generateNum(0,passPattern.length)]();
    }

  return pass;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
