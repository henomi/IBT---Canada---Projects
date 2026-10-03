const student ={
    name:"abebe",
    age:81
}
const {name,age}=student;
console.log(name);
console.log(age);


const form = document.querySelector("#add-form");
const nameIn = document.querySelector("#name");
const count = document.querySelector("#count");
const list = document.querySelector("#list");

const items = [];

function render() {
    list.innerHTML = "";

    for (const item of items){
        const li =document.createElement("li");
        li.textContent = item.name;

        if (item.bought) {
            li.classList.add("bought");
        }
        li.addEventListener("click", function () {
        item.bought = !item.bought;
        render();
        });

        const deletButton = document.createElement("button");
        deletButton.textContent = "Delete";

        deletButton.addEventListener("click", function (event) {
            event.stopPropagation();

        const index = items.indexOf(item);
        items.splice(index, 1);
        render();
        });
        
        list.appendChild(li);
        li.appendChild(deletButton);

    }
    count.textContent = `${items.length} items`;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
     if (nameIn.value.trim() === "") {
        return;
    }
    items.push({
        name: nameIn.value,
        bought: false
    });
    nameIn.value = "";
    render();
});


