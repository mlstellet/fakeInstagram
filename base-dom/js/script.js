//  ATIVIDADE 1

// 2. 
let userName = document.querySelector('.avatar-content>div');
userName.innerHTML = "<strong> Nome usuário </strong>";

// 3.
let inputData = document.querySelectorAll('.form-auth>input'); 
inputData[1].placeholder = "Primeiro Nome";

// 4.
let userName2 = document.getElementsByName('name');
userName2[0].placeholder = "Primeiro Nome";
console.log(userName2);



// ATIVIDADE 2

for (input of inputData) {
     input.style.borderRadius = "4px";
     input.style.width = "80%"
}

let signupButton = document.querySelector('form>button');
signupButton.style.width = "95%"; 

let main = document.querySelector("main");
main.style.background = "#fafafa";

//  usando cssText:

for (input of inputData) {
     input.style.cssText = "border-radius: 4px; width: 80%";
}

signupButton.style.cssText = "width: 95%";

main.style.cssText = "background: #fafafa";


