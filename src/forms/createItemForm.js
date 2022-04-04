function createItemForm(){
    let form = `
    <button class="btn btn-success mt-4 mx-4" onclick="reload()">Volver</button>
    <form style="width:500px; margin:20px" onsubmit="parseItemForm()">

    <div class="form-group" style="width:500px; margin:20px">
      <label style="color: white;">Nombre</label>
      <input type="text" class="form-control" id="createItemNombre" placeholder="Nombre" required>
    </div>

    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">Precio</label>
        <input type="number" class="form-control" id="createItemPrecio" placeholder="Precio" required>
    </div>

    <div class="form-group" style="width:500px; margin:20px" id="material">
        <label style="color: white;">Material</label>
        <select class="form-select" id="createItemMaterial">
            <option value="Normal">Normal</option>
            <option value="Consumible">Consumible</option>
            <option value="Indestructible">Indestructible</option>
        </select>
    </div>

    <div class="form-group" style="width:500px; margin:20px">
    <label style="color: white;">Demanda</label>
    <input type="number" class="form-control" id="createItemDemanda" placeholder="Demanda" required>
    </div>
    
    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">Calidad</label>
        <input type="number" class="form-control" id="createItemCalidad" placeholder="Calidad" required>
    </div>

    <div class="form-group" style="width:500px; margin:20px">
        <label style="color: white;">Cantidad</label>
        <input type="number" class="form-control" id="createItemCantidad" placeholder="Cantidad" required>
    </div>
    <button type="submit" class="btn btn-primary" style="width:500px; margin:20px">Crear</button>
  </form>
    `
    return form
}

function parseItemForm() {
    let data = {
        nombre : document.getElementById('createItemNombre').value,
        precio : document.getElementById('createItemPrecio').value,
        calidad : document.getElementById('createItemCantidad').value,
        material : document.getElementById('createItemMaterial').value,
        demanda : document.getElementById('createItemDemanda').value,
        calidad : document.getElementById('createItemCalidad').value,
    }
    createItem(data)
}