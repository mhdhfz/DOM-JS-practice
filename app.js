const root = document.getElementById("root");

// create element
const container = document.createElement("div");
const msgArea = document.createElement("div");
const form = document.createElement("form");
const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const nameLabelText = document.createTextNode("name:");
const phoneLabel = document.createElement("label");
const phoneInput = document.createElement("input");
const phoneLabelText = document.createTextNode("phone no:");
const btn = document.createElement("button");
const btnText = document.createTextNode("Submit");

container.className = "container";
msgArea.id = "msg";
form.className = "d-form";
nameInput.id = "name";
phoneInput.id = "phone";

root.appendChild(container);
container.appendChild(form);
form.appendChild(msgArea);
form.appendChild(nameInput);
form.insertBefore(nameLabel, nameInput);
nameLabel.appendChild(nameLabelText);
form.appendChild(phoneInput);
form.insertBefore(phoneLabel, phoneInput);
phoneLabel.appendChild(phoneLabelText);
form.appendChild(btn);
btn.appendChild(btnText);

// select element
const selectName = document.querySelector("#name");
const selectPhone = document.querySelector("#phone");
const selectMsg = document.querySelector("#msg");

form.addEventListener("submit", newContact);

function newContact(e) {
  e.preventDefault();

  if (nameInput.value === "" || phoneInput === "") {
    selectMsg.classList.add("error");
    selectMsg.innerHTML = "Please enter all fields";

    setTimeout(() => selectMsg.remove(), 3000);
  }
}
