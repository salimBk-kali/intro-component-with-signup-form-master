let submit = document.querySelector(".send");
let inputs = document.querySelectorAll("input");
let email = document.querySelector("[name= 'email']");
let arrayInputs = Array.from(inputs);

submit.addEventListener('click', function(event){
    let formValide = true;
    removeErrorMsg();
    if(!detectError(formValide)){
        showErrorMsg();
        valideEmail();
        event.preventDefault();
    }
    
});
function removeErrorMsg(){
for(let i=0;i<arrayInputs.length;i++){
    arrayInputs[i].onmouseleave = function(){
        if(arrayInputs[i].value !== "" ){
            let nextElement = arrayInputs[i].nextElementSibling;
            if (nextElement && nextElement.tagName.toLowerCase() === 'p') {
            nextElement.remove();
            arrayInputs[i].style.borderColor = "";

        }
        }
    }
}
}

function detectError(formValide){
    for(let i=0;i<arrayInputs.length;i++){
        if(arrayInputs[i].value === "" || valideEmail() === false ){
            formValide = false;
        }
    }
    return formValide;
}
function showErrorMsg(){
    for(let i=0;i<arrayInputs.length;i++){
        let nextElement = arrayInputs[i].nextElementSibling;
        if (nextElement && nextElement.tagName.toLowerCase() === 'p') {
            nextElement.remove();

        }
        if(arrayInputs[i].value === "" ){
            arrayInputs[i].style.borderColor = "red";
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(`${arrayInputs[i].name} cannot be empty`));
            arrayInputs[i].after(p);
            arrayInputs[i].placeholder = "";
        }
    }
}
function valideEmail(){
    if(email.value !== ""){
        valide = /\w+@\w+.tld/g;
        if(valide.test(email.value)){
            return true;
        }else{
            let nextElement = email.nextElementSibling;
            if (nextElement && nextElement.tagName.toLowerCase() === 'p') {
            nextElement.remove();
            }
            let p = document.createElement("p");
            p.appendChild(document.createTextNode("Looks like this is not an email"));
            email.after(p);
            return false;
        }
    }
}




