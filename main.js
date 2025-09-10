import LinkedList from "./linkedlist.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const list = new LinkedList();
const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function initList() {
  const size = parseInt(await ask("Enter the number of nodes to start with (0 for empty list): "), 10);

  for (let i = 0; i < size; i++) {
    const value = await ask(`Enter value for node ${i + 1}: `);
    list.append(value);
  }

  console.log("\n Initial Linked List created:");
  console.log(list.toString());
}

function showList() {
  console.log("\n Current Linked List:");
  console.log(list.toString());
}

async function menu() {
  console.log("\n Linked List Operations:");
  console.log("1. Append (add at end)");
  console.log("2. Prepend (add at start)");
  console.log("3. Insert at index");
  console.log("4. Remove at index");
  console.log("5. Pop (remove last)");
  console.log("6. Size");
  console.log("7. Head");
  console.log("8. Tail");
  console.log("9. At (get node at index)");
  console.log("10. Contains (check value)");
  console.log("11. Find (get index of value)");
  console.log("12. Print list (toString)");
  console.log("0. Exit");

  const choice = await ask("\nChoose an option: ");

  switch (choice) {
    case "1": {
      const value = await ask("Enter value to append: ");
      list.append(value);
      showList();
      break;
    }
    case "2": {
      const value = await ask("Enter value to prepend: ");
      list.prepend(value);
      showList();
      break;
    }
    case "3": {
      const value = await ask("Enter value: ");
      const index = parseInt(await ask("Enter index: "), 10);
      list.insertAt(value, index);
      showList();
      break;
    }
    case "4": {
      const index = parseInt(await ask("Enter index to remove: "), 10);
      list.removeAt(index);
      showList();
      break;
    }
    case "5":
      list.pop();
      console.log("Last node removed.");
      showList();
      break;
    case "6":
      console.log("Size:", list.size());
      break;
    case "7":
      console.log("Head:", list.head()?.value ?? "null");
      break;
    case "8":
      console.log("Tail:", list.tail()?.value ?? "null");
      break;
    case "9": {
      const index = parseInt(await ask("Enter index: "), 10);
      console.log("Node at index:", list.at(index)?.value ?? "null");
      break;
    }
    case "10": {
      const value = await ask("Enter value to search: ");
      console.log("Contains?", list.contains(value));
      break;
    }
    case "11": {
      const value = await ask("Enter value to find: ");
      console.log("Index:", list.find(value));
      break;
    }
    case "12":
      showList();
      break;
    case "0":
      rl.close();
      return;
    default:
      console.log("Invalid choice, try again.");
  }

  await menu(); 
}

async function main() {
  console.log("🚀 Welcome to Linked List Interactive Console!");
  await initList(); 
  await menu();
}

main();
