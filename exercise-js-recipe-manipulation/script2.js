// 1. The logo text of the site has the wrong color. Change it to the correct one
let logoText = document.querySelector("header > p");
logoText.style.color = "black";

// 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help:

headerEl = document.querySelector("header"); 
headerEl.style.justifyContent = "unset";

// 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

headerEl.style.borderBottom ="1px solid LightGrey";

// 4. The recipe name is wrong, change it to the correct one.

h1El = document.querySelector("h1"); 
h1El.innerHTML = "Frozen Cheescake";

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.

let spanIcon = document.querySelector("span");
spanIcon.classList.add("material-icons");

// 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

let timeFix = document.querySelector(".time"); 
timeFix.innerHTML = "60+ min";

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.

let image = document.querySelector("img"); 
image.src = "./assets/frozen-cheesecake-slice.jpg";

// 8. The background color of the ingredients list container is wrong. Fix it.

let ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";

// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.

let ingredientsBottom = document.querySelector(".ingredients-list-bottom");
ingredientsBottom.lastElementChild.remove("p");

const newListItem = document.createElement("li");
newListItem.innerHTML = "15st digistivetex"

const newListItem2 = document.createElement("li");
newListItem2.innerHTML ="Lite smör";



ingredientsBottom.insertAdjacentElement("afterbegin", newListItem);
ingredientsBottom.insertAdjacentElement("afterbegin", newListItem2);

// 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.

let thirdIngredient = document.querySelector(".ingredients-list-paste li:nth-child(3)");
thirdIngredient.innerHTML = "3tsk vaniljsocker";

// 11 There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.

const newIngredient = document.createElement("li");
newIngredient.innerHTML ="400g naturell philadelphiaost";

document.querySelector(".ingredients-list-paste").insertAdjacentElement("beforeend", newIngredient);

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

const instructionBoxShadow = document.querySelector(".instructions-container > h3"); 
instructionBoxShadow.style.boxShadow = "unset";

// 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const infochange = document.querySelector(".instructions-list li:nth-child(2)");
infochange.innerHTML = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."; 

const infochange2 = document.querySelector(".instructions-list li:nth-child(9)");
infochange2.innerHTML = "Ställ in i frysen över natten.";

