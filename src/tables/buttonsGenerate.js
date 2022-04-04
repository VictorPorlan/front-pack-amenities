const buyButton = (pack) => {
  return pack.vendido
    ? "<th>El item ya ha sido comprado</th>"
    : `<th><button class="btn btn-success" onclick="buyPack('${pack.nombre}')"}>Comprar</buttons> </th>`;
};

const openButton = (pack) => {
  if (pack.vendido) {
    return pack.abierto
      ? "<th> El item ya está abierto </th>"
      : `<th><button class="btn btn-primary" onclick="openPack('${pack.nombre}')">Abrir</buttons> </th>`;
  } else {
    return "<th> Has de comprar el pack primero </th>";
  }
};

const detailsButton = (pack) => {
  return `<th><button class="btn btn-danger" onclick="reloadDetails('${pack.nombre}')"}>Detalles</buttons> </th>`;
};

const useItemButton = (pack, index) => {
  return pack.abierto
    ? `<th><button class="btn btn-warning" onclick="useItem('${pack.nombre}', '${index}')">Usar</buttons> </th>`
    : `<th>Has de abrir el pack primero</th>`;
};

const useAllItemsButton = (pack) => {
  return `<button class="btn btn-info mt-4 mx-4" onclick="useAllItems('${pack.nombre }')" 
  ${pack.abierto 
    ? null 
    : "style='display:none;'"}
    >Usar todos</button>`;
};

const favButton = (nombre) => {
  let tempStorage = JSON.parse(localStorage.getItem('fav'))
  if(tempStorage !== null){
    return tempStorage.includes(nombre) ? filledHeart(nombre) : heart(nombre)
  }
  else {
    return heart(nombre)
  }
}