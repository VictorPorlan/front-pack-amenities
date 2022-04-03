async function getAllPacks() {
  let result;
  await fetch("http://localhost:3001/packs/allPacks")
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });
  return result;
}

async function buyPack(nombre) {
  await fetch(`http://localhost:3001/packs/buy/${nombre}`)
    .then((res) => reload())
}

async function openPack(nombre) {
  await fetch(`http://localhost:3001/packs/open/${nombre}`)
    .then((res) => reload())
}
