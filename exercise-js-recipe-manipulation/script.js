//1. What is the name of the recipe?
const recipeName = document.querySelector("#recipe-name");
console.log(recipeName.getHTML());

//2. What HTML tag is used to display the Recipe name?

console.log(recipeName.tagName);

// 3. What is the font size of the paragraph tag with the class "description".

let fontSizeOfP = window.getComputedStyle(document.querySelector(".description")).fontSize;
console.log(fontSizeOfP);

// 4. What is the value of the alt atrribute on the image?

let valueOfAlt = document.querySelector("img").getAttribute("alt");
console.log(valueOfAlt);

// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

let imgInfo = {
    url: document.querySelector("img").getAttribute("src"),
    height: document.querySelector("img").height,
    width: document.querySelector("img").width,
  }
  console.log(imgInfo);

  // 6.  How many ingredients has the paste?

  let itemsInPaste = document.querySelector(".ingredients-list-paste");
console.log(itemsInPaste.childElementCount);

// 7. Which is the forth element in the list containing the ingredients for the paste?

let fourthIngredient = document.querySelector(".ingredients-list-paste li:nth-child(4)").innerHTML;
console.log(fourthIngredient);


// 8 Create an an array of objects from the instructions. Each element in the array should be an object that looks like this 


const instructions = document.querySelectorAll(".instructions-list li");

const instructionObjects = [];

for (let i = 0; i < instructions.length; i++) {
  const instruction = instructions[i]; 

  const instructionObject = {
    order: i + 1, 
    text: instruction.textContent.trim(),
  };

  instructionObjects.push(instructionObject);
}

console.log(instructionObjects);

