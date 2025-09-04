const container = document.getElementById("app");

const label = document.createElement("label");
label.htmlFor = "frutas-select";
label.textContent = "Escolha uma fruta: ";
label.style.fontWeight = "bold";
label.classList.add("form-label");
label.classList.add("m-1");

const select = document.createElement("select");
select.id = "frutas-select";
select.className = "form-select";

const fruits = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

fruits.forEach((fruit) => {
  const option = document.createElement("option");
  option.value = fruit.toLowerCase();
  option.textContent = fruit;
  select.appendChild(option);
});

container.appendChild(select);
container.insertBefore(label, select);
