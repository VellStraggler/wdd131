const newParagraph = document.createElement("p");
newParagraph.innerText = "Added by JavaScript!";
document.body.appendChild(newParagraph);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
document.body.appendChild(newH2);

const newP = document.createElement("p");
newP.innerText = "This was added through Javascript";
document.body.appendChild(newP);

