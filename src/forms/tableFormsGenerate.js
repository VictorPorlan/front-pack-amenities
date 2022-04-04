function reload() {
    getAllPacks().then((x) => {
        document.getElementById("parent").innerHTML = renderTable(x);
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