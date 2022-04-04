function renderDetailsTable(pack) {
  let tabHeader = `
        <button class="btn btn-success mt-4 mx-4" onclick="reload()">Volver</button>
        ${useAllItemsButton(pack)}
        <button class="btn btn-danger mt-4 mx-4" onclick="deletePack('${pack.nombre}')">Eliminar</button>
        <h1 class="text-center" style="color: white;">${pack.nombre}</h1>
        <table class="table table-striped table-dark  table-bordered p-2 mt-5">
        <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Material</th>
                    <th>Precio</th>
                    <th>Demanda</th>
                    <th>Calidad</th>
                    <th>Cantidad</th>
                    <th>Usar</th>
                </tr>
              <tbody>`;

  pack.items.forEach((e, i) => {
    tabHeader += `
                  <tr>
                      <th>${e.nombre}</th>
                      <th>${e.material}</th>
                      <th>${parseInt(e.precio)}€</th>
                      <th>${e.demanda}</th>
                      <th>${e.calidad}</th>
                      <th>${e.cantidad}</th>                      
                      ${useItemButton(pack, parseInt(i) + 1)}
                  </tr>`;
  });
  return tabHeader;
}
