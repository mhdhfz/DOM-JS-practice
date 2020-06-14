const root = document.getElementById("root");

const container = document.createElement("div");
const form = document.createElement("form");
const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const nameLabelText = document.createTextNode("name:");
const phoneLabel = document.createElement("label");
const phoneInput = document.createElement("input");
const phoneLabelText = document.createTextNode("phone no:");

container.className = "container";
form.className = "d-form";

root.appendChild(container);
container.appendChild(form);
form.appendChild(nameInput);
form.insertBefore(nameLabel, nameInput);
nameLabel.appendChild(nameLabelText);
form.appendChild(phoneInput);
form.insertBefore(phoneLabel, phoneInput);
phoneLabel.appendChild(phoneLabelText);
