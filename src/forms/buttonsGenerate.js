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