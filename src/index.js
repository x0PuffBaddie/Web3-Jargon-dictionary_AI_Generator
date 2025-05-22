function generateEplaination(event) {
    event.preventDefault();

let jargonFormElement = document.querySelector("#explaination");

new Typewriter('#explaination', {
  strings: ['explain to me like Im 5'],
  autoStart: true,
  delay: 1,
  cursor:"",
});

}

let jargonFormElement = document.querySelector("#jargon-generator-form");
jargonFormElement.addEventListener("submit", generateEplaination);
