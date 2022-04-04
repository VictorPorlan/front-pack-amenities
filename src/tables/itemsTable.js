function renderItemTable(items) {
  let tabHeader = `
          <button class="btn btn-success mt-4 mx-4" onclick="reloadCreateItem()">Crear item</button>
          <button class="btn btn-warning mt-4 mx-4" onclick="reload()">Tabla packs</button>
          <h1 class="text-center" style="color: white;">Items</h1>
          <table class="table table-striped table-dark table-bordered p-2 mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th> 
                        <th>Material</th>
                        <th>Demanda</th>
                        <th>Calidad</th>
                        <th>Cantidad</th>
                    </tr>
                <tbody>`;

  items.forEach((e) => {
    tabHeader += `
                    <tr>
                        <th>${e._id}</th>
                        <th>${e.nombre}</th>
                        <th>${parseInt(e.precio)}€</th>
                        <th>${e.material}</th>
                        <th>${e.demanda}</th>
                        <th>${e.calidad}</th>
                        <th>${e.cantidad}</th>
                    </tr>`;
  });
  return tabHeader;
}
