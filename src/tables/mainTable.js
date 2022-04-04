function renderTable(packs) {
  let tabHeader = `
        <button class="btn btn-success mt-4 mx-4" onclick="reloadCreate()">Crear pack</button>
        <button class="btn btn-warning mt-4 mx-4" onclick="reloadTableItems()">Tabla items</button>
        <h1 class="text-center" style="color: white;">Packs</h1>
        <table class="table table-striped table-dark table-bordered p-2 mt-5">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Calidad</th>
                      <th>Precio</th> 
                      <th>Vendido</th>
                      <th>Abierto</th>
                      <th>Comprar</th>
                      <th>Abrir</th>
                      <th>Detalles</th>
                      <th>Favoritos</th>
                  </tr>
              <tbody>`;

  packs.forEach((e) => {
    tabHeader += `
                  <tr>
                      <th>${e.nombre}</th>
                      <th>${e.calidad}</th>
                      <th>${parseInt(e.precio)}€</th>
                      <th>${e.vendido ? check : cross}</th>
                      <th>${e.abierto ? check : cross}</th>
                      ${buyButton(e)}                          
                      ${openButton(e)}                          
                      ${detailsButton(e)}
                      ${favButton(e.nombre)}
                  </tr>`;
  });
  return tabHeader;
}
