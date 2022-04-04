function createForm(){
    let form = `
    <button class="btn btn-success mt-4 mx-4" onclick="reload()">Volver</button>
    <form style="width:500px; margin:20px" onsubmit="parseForm()">
    <div class="form-group" style="width:500px; margin:20px">
      <label style="color: white;">Nombre</label>
      <input type="text" class="form-control" id="createNombre" placeholder="Nombre" required>
    </div>
    <div class="form-group" style="width:500px; margin:20px">
    <label style="color: white;">Precio</label>
    <input type="number" class="form-control" id="createPrecio" placeholder="Precio" required>
  </div>
  <div class="form-group" style="width:500px; margin:20px" id="calidad">
    <label style="color: white;">Calidad</label>
    <select class="form-select" id="createCalidad">
        <option value="Basic">Basic</option>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
    </select>
    </div>
    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">ID Item 1</label>
        <input type="text" class="form-control" id="createId1" placeholder="ID" required>
    </div>
    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">ID Item 2</label>
        <input type="text" class="form-control" id="createId2" placeholder="ID" required>
    </div>
    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">ID Item 3</label>
        <input type="text" class="form-control" id="createId3" placeholder="ID">
    </div>
    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">ID Item 4</label>
        <input type="text" class="form-control" id="createId4" placeholder="ID">
    </div>
    <button type="submit" class="btn btn-primary" style="width:500px; margin:20px">Crear</button>
  </form>
    `
    return form
}

function parseForm () {
    let data = {
        nombre : document.getElementById('createNombre').value,
        precio : document.getElementById('createPrecio').value,
        calidad : document.getElementById('createCalidad').value,
        vendido: false,
        abierto: false,
        items: [
            document.getElementById('createId1').value,
            document.getElementById('createId2').value,
            document.getElementById('createId3').value,
            document.getElementById('createId4').value
        ].filter((x) => x !== "")
    }
    createPack(data)
}