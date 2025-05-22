function displayExplaination(response) {

new Typewriter('#explaination', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
  loop: false,
});

}


function generateExplaination(event) {
    event.preventDefault();

    
let userInstructionInput =document.querySelector("#user-instruction");
let apiKey ="0f47325f67190a100b7be47t71b9a1ob";
let prompt =`Generate a web3 jargon meaning ${userInstructionInput.value}`;
let context =`User-instruction: You are a web3 expert and your task is to explain cyrpto or web3 jargons to your student like they're 15 years old. Provide a source link as an example project to understand it more clearly`;
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



axios.get(apiUrl).then(displayExplaination);

}


let jargonFormElement = document.querySelector("#jargon-generator-form");
jargonFormElement.addEventListener("submit", generateExplaination);
