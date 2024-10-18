const bar = document.getElementById("display");

function display(input){
  bar.value +=  input;
}

function clearDisplay(){
  bar.value = "";
}

function del() {
  bar.value = bar.value.slice(0,-1);
}

function calculate(){
  try {
    // bar = bar.replace(/x/g, '*');
    bar.value = replaceXWithMultiplySymbol(bar.value);
    bar.style.letterSpacing = "normal";
    bar.value = eval(bar.value);
  } 
  catch (error) {
    bar.style.letterSpacing = "normal";
    bar.value = "ERROR";
  }
}

document.addEventListener("keypress", function(event) {
  displayKey(event.key);
})
function displayKey(key) {
  switch (key) {
      case "+":
        display('+')
        break;
      case "-":
        display('-')
        break;
      case "*":
        display('x')
        break;
      case "c":
        clearDisplay()
        break;
      case "C":
        clearDisplay()
        break;
      case "1":
        display('1')
        break;
      case "2":
        display('2')
        break;
      case "3":
        display('3')
        break;
      case "4":
        display('4')
        break; 
      case "5":
        display('5')
        break;
      case "6":
        display('6')
        break;
      case "7":
        display('7')  
        break;
      case "8":
        display('8')
        break;
      case "9":
        display('9')
        break;
      case "0":
        display('0')
        break;
      case "/":
        display('/')  
        break;
      case "=":
        calculate()
        break;                   
  }
}

function replaceXWithMultiplySymbol(inputString) {
  var result = '';  // Initialize an empty string
  
  // Loop through each character in the input string
  for (var i = 0; i < inputString.length; i++) {
      var currentChar = inputString[i];
      
      // Check if the current character is 'x'
      if (currentChar === 'x') {
          result += '*';  // Replace 'x' with '*'
      } else {
          result += currentChar;  // Append the character as it is
      }
  }
  
  return result;  // Return the final string
}