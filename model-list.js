import { projects } from "./projects.js";

//Get all buttons
const projectContainer = document.getElementById("projects-container");
const projectButtons = Array.from(projectContainer.children);
console.log(projectButtons);

const templateProjectButton = projectButtons[0];

const baseURL = './model-viewer.html';

for (let project of projects) {

    //Create a new button
    const newButton = templateProjectButton.cloneNode(true);
    
    //Add project name to button. 
    const buttonTitle = newButton.querySelector('button');
    buttonTitle.textContent = project.name;

    //Add project URL to button
    const boton = newButton.querySelector('a');
    boton.href = baseURL + `?id=${project.id}`;

    //Add card to container
    projectContainer.appendChild(newButton)
}
templateProjectButton.remove();