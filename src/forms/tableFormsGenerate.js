function reload() {
    getAllPacks().then((x) => {
        document.getElementById("parent").innerHTML = renderTable(x);
      });
}