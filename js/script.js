function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

/* AI Brain Simulation */
function aiChat(event){

if(event.key === "Enter"){

let input = document.getElementById("ai-input");
let output = document.getElementById("ai-output");

let text = input.value.toLowerCase();

let response = "CoreX AI Processing...";

if(text.includes("skills")){
response = "AI, Cybersecurity, C++, Python, Web Engineering.";
}

if(text.includes("project")){
response = "Working on AI Secure Enterprise Systems.";
}

if(text.includes("corex")){
response = "CoreX Research = Future Technology Innovation Center.";
}

output.innerHTML += "<br>> " + input.value;
output.innerHTML += "<br>AI: " + response + "<br>";

input.value = "";
}
}