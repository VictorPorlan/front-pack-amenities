async function getAllPacks() {
  let result;
  await fetch("http://localhost:3001/packs/allPacks")
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });
  return result;
}

async function getOnePack(nombre) {
  let result;
  await fetch(`http://localhost:3001/packs/findOne/${nombre}`)
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });
  return result;
}

async function buyPack(nombre) {
  await fetch(`http://localhost:3001/packs/buy/${nombre}`);
  reload();
}

async function openPack(nombre) {
  await fetch(`http://localhost:3001/packs/open/${nombre}`);
  reload();
}

async function useAllItems(nombre) {
  await fetch(`http://localhost:3001/packs/useItems/${nombre}`);
  reloadDetails(nombre);
}

async function useItem(nombre, index) {
  await fetch(`http://localhost:3001/packs/useItem/${nombre}/${index}`);
  reloadDetails(nombre);
}

async function deletePack(nombre) {
  await fetch(`http://localhost:3001/packs/delete/${nombre}`, {
    method: "DELETE",
  });
  reload();
}

async function createPack(json) {
  debugger;
  console.log(JSON.stringify(json))
  let response = await fetch(`http://localhost:3001/packs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  reload();
}
