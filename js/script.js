function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

/* Founder AI Brain Simulation */

function aiBrain(event){

if(event.key === "Enter"){

let input = document.getElementById("ai-input");
let output = document.getElementById("ai-output");

let text = input.value.toLowerCase();

let response = "CoreX Founder AI Processing...";

if(text.includes("vision")){
response = "Build intelligent enterprise AI security ecosystems.";
}

if(text.includes("project")){
response = "AI Secure Enterprise System + Threat Intelligence.";
}

if(text.includes("corex")){
response = "CoreX = Future Technology Research + Innovation.";
}

output.innerHTML += "<br>> " + input.value;
output.innerHTML += "<br>AI: " + response + "<br>";

input.value = "";
}
}
