// Inicializamos un array para almacenar los productos
const productos = [];

// Función para agregar un producto al array de productos
function agregarProducto(nombre, precio, cantidad) {
  const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
  };
  productos.push(producto);
  alert(`Producto "${nombre}" agregado con éxito.`);
}

// Función para mostrar la lista de productos
function mostrarProductos() {
  let listaProductos = "Lista de Productos:\n";
  productos.forEach((producto, index) => {
    listaProductos += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}\n`;
  });
  alert(listaProductos);
}

// Función para buscar un producto por nombre
function buscarProductoPorNombre(nombre) {
  const resultado = productos.filter((producto) =>
    producto.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (resultado.length > 0) {
    let mensaje = `Resultado de la búsqueda para "${nombre}":\n`;
    resultado.forEach((producto, index) => {
      mensaje += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}\n`;
    });
    alert(mensaje);
  } else {
    alert(`No se encontraron productos con el nombre "${nombre}".`);
  }
}

// Función para filtrar productos por precio
function filtrarProductosPorPrecio(precioMin, precioMax) {
  const resultado = productos.filter((producto) =>
    producto.precio >= precioMin && producto.precio <= precioMax
  );

  if (resultado.length > 0) {
    let mensaje = `Productos con precio entre $${precioMin} y $${precioMax}:\n`;
    resultado.forEach((producto, index) => {
      mensaje += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}\n`;
    });
    alert(mensaje);
  } else {
    alert("No se encontraron productos en ese rango de precios.");
  }
}

// Función para mostrar el menú
function mostrarMenu() {
  return prompt(
    "Seleccione una opción:\n1. Agregar Producto\n2. Mostrar Productos\n3. Buscar Producto por Nombre\n4. Filtrar Productos por Precio\n5. Salir"
  );
}

// Función para iniciar el simulador
function iniciarSimulador() {
  let continuar = true;

  while (continuar) {
    const opcion = mostrarMenu();

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del producto:");
        const precio = parseFloat(prompt("Ingrese el precio del producto:"));
        const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        agregarProducto(nombre, precio, cantidad);
        break;
      case "2":
        mostrarProductos();
        break;
      case "3":
        const nombreBusqueda = prompt("Ingrese el nombre del producto a buscar:");
        buscarProductoPorNombre(nombreBusqueda);
        break;
      case "4":
        const precioMin = parseFloat(prompt("Ingrese el precio mínimo:"));
        const precioMax = parseFloat(prompt("Ingrese el precio máximo:"));
        filtrarProductosPorPrecio(precioMin, precioMax);
        break;
      case "5":
        continuar = false;
        alert("Saliendo del simulador.");
        break;
      default:
        alert("Opción no válida. Por favor, seleccione una opción válida.");
        break;
    }
  }
}

// Iniciar el simulador
iniciarSimulador();

