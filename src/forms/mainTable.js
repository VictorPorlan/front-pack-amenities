document.addEventListener("DOMContentLoaded", () => {
    reload()
  });

  function renderTable(packs) {
    let tabHeader = `
          <h1 class="text-center">Pack amenities</h1>
          <table class="table table-striped table-dark  table-bordered p-2 mt-5">
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
                  </tr>
              <tbody>`;

    packs.forEach((e) => {
      tabHeader += `
                  <tr>
                      <th>${e.nombre}</th>
                      <th>${e.calidad}</th>
                      <th>${parseInt(e.precio)}€</th>
                      <th>${e.vendido}</th>
                      <th>${e.abierto}</th>
                      ${buyButton(e)}                          
                      ${openButton(e)}                          
                      <th><button class="btn btn-danger">Detalles</buttons> </th>
                  </tr>`;
    });
    return tabHeader;
  }
 