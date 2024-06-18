const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const textPal = "is a palindrome"
const textNoPal = "is not a palindrome"


function clearText(a){
    const b = a.toLowerCase().match(/[a-z0-9]/g).join("");
    return b;
}

function reverseText(a){
    const b = a.toLowerCase().match(/[a-z0-9]/g).reverse().join("");
    return b;
}


checkBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(!textInput.value){
    return alert("Please input a value")
  } else if(clearText(textInput.value)===reverseText(textInput.value)){
    result.textContent = `${textInput.value} ${textPal}`
  } else {
    result.textContent = `${textInput.value} ${textNoPal}`
  }
});