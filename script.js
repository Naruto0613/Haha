let number = 30;
const string = "Naba";
const boolean = 1 < 2;
const object = {
    name: "Naba",
    age: 23,
    man: true,
};
object.cool = true;
const array = [1, 217, 90];
const array1 = ["meat", "milk", "eggs"];
console.log(array1[2]);

const sayHello = (name) => {
    console.log(`love ${name}`);
};
sayHello("Naranbadrakh");
sayHello("Deegii");

const add = (a, b) => {
    console.log(a + b);
};

add(6, 6);

const minus = (a, b) => {
    console.log(a - b);
};

minus(1, 100);

const name = document.querySelector("#name");

const header = document.querySelector("header");
console.log(header);

const nara = document.createElement("nara");
nara.style.backgroundColor = "aqua";
nara.style.color = "Red";
nara.textContent = "Naba";
nara.style.cursor = "pointer";
header.appendChild(nara);

nara.addEventListener("click", () => {
    nara.style.display = "none";
    nara.appendChild(main);
});

const main = document.querySelector("main");

const footer = document.querySelector("footer");

const car = document.querySelector("#car");

car.addEventListener("click", () => {
    header.style.backgroundColor = "red";
});

const car1 = document.querySelector("#car1");

car1.addEventListener("click", () => {
    header.style.backgroundColor = "blue";
});

const car2 = document.querySelector("#car2");

car2.addEventListener("click", () => {
    header.style.backgroundColor = "yellow";
});

const car3 = document.querySelector("#car3");

car3.addEventListener("click", () => {
    header.style.backgroundColor = "pink";
});

const car4 = document.querySelector("#car4");

car4.addEventListener("click", () => {
    header.style.backgroundColor = "aqua";
});

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
    window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

const bro = document.createElement("div");
bro.style.padding = "10px";
bro.style.cursor = "pointer";
bro.textContent = "Click";
bro.style.backgroundColor = "white";
bro.style.borderRadius = "10px";
bro.style.color = "black";
footer.appendChild(bro);

let counter = 0;

bro.addEventListener("click", () => {
    const counterElement = document.querySelector("#counter");
    counter = counter + 1;
    counterElement.textContent = counter;
});
