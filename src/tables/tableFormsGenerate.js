function reload() {
    getAllPacks().then((x) => {
        document.getElementById("parent").innerHTML = renderTable(x);
      });
}

function reloadTableItems() {
  getAllItems().then((x) => {
      document.getElementById("parent").innerHTML = renderItemTable(x);
    });
}

function reloadDetails(nombre) {
    getOnePack(nombre).then((x) => {
        document.getElementById("parent").innerHTML = renderDetailsTable(x);
      });
}

function reloadCreate() {
      document.getElementById("parent").innerHTML = createForm();
}

function reloadCreateItem() {
  document.getElementById("parent").innerHTML = createItemForm();
}

