const form = document.querySelector("#add-form");
const nameIn = document.querySelector("#name");
const count = document.querySelector("#count");
const list = document.querySelector("#list");

const items = [];

function render() {
    list.innerHTML = "";

    for (const item of items) {
        const li = document.createElement("li");

        // Give the row the item's unique ID
        li.dataset.id = item.id;

        // Display the item name
        li.textContent = item.name;

        // Add bought styling
        if (item.bought) {
            li.classList.add("bought");
        }

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        li.appendChild(deleteButton);
        list.appendChild(li);
    }

    count.textContent = `${items.length} items`;
}


// Add a new item
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameIn.value.trim();

    if (name === "") {
        return;
    }

    items.push({
        id: Date.now(),
        name: name,
        bought: false
    });

    nameIn.value = "";

    render();
});


// Event delegation
list.addEventListener("click", function (event) {
    const row = event.target.closest("li");

    if (!row) {
        return;
    }

    const id = Number(row.dataset.id);

    const item = items.find(function (item) {
        return item.id === id;
    });

    if (!item) {
        return;
    }

    // Delete button
    if (event.target.tagName === "BUTTON") {
        const index = items.indexOf(item);
        items.splice(index, 1);
    } 
    // Clicking the row toggles bought
    else {
        item.bought = !item.bought;
    }

    render();
});