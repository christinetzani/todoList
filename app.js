// A command line based Todo List

let input = prompt("what would you like to do?");

const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    // list all items
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("************");
  
  } else if (input === "new") {
    // add new todo
    const newTodo = prompt("Ok, what's the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  
  } else if (input === "delete") {
    const index = parseInt(prompt('Ok, enter an index to delete:'));

      if (!Number.NaN(index)){
        const deleted = todos.splice(index, 1);
        console.log(`Ok, ${deleted[0]} is deleted`);
      } else {
          console.log('Uknown index');
      }
  }

  input = prompt("what would you like to do?"); // keep asking if no quit
}

console.log("OK QUIT THE APP!");
