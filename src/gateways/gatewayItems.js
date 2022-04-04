async function getAllItems() {
    let result;
    await fetch("http://localhost:3001/items/allItems")
      .then((res) => res.json())
      .then((data) => {
        result = data;
      });
    return result;
  }

async function createItem(json){
    await fetch(`http://localhost:3001/items/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });
    reloadTableItems();
}

