

let keepGoing = true;

const todoList = [];

while (keepGoing !== false) {

    const action = prompt("What would you like to do: ");

    if (action === "new") {
        const add = prompt("What would you like to add?");
        todoList.push(add);
        console.log(`${add} added to list`)
    }
    else if (action === "list") {
        console.log("**********")
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********")
    }
    else if (action === "delete") {
        let remove = prompt("Enter the index of the item you'd like to delete: ");
        todoList.splice(remove, 1);
        console.log("Todo Removed");

    }
    else if (action === "quit") {
        keepGoing = false;
    }
}


