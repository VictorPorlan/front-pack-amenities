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
    await fetch(`http://localhost:3001/packs/buy/${nombre}`).then((_x) => reload())
    reload();
}

async function openPack(nombre) {
    await fetch(`http://localhost:3001/packs/open/${nombre}`).then((_x) => reload())
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
    await fetch(`http://localhost:3001/packs/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    });
    reload();
}

async function packAddFavourite(nombre) {
    let tempStorage = JSON.parse(localStorage.getItem('fav'))
    if (tempStorage !== null) {
        localStorage.setItem('fav', JSON.stringify([nombre, ...tempStorage]))
        reload()
    } else {
        localStorage.setItem('fav', JSON.stringify([nombre]))
        reload()
    }
}

async function packRemoveFavourite(nombre) {
    let tempStorage = JSON.parse(localStorage.getItem('fav'))
    if (tempStorage !== null) {
        let result = tempStorage.filter((x) => x !== nombre)
        localStorage.setItem('fav', JSON.stringify(result))
        reload()
    } else {
        return
    }
}