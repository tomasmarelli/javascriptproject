
// Variables para almacenar los productos
let nombreProducto1, precioProducto1;
let nombreProducto2, precioProducto2;
let nombreProducto3, precioProducto3;

// Función para agregar un producto
function agregarProducto() {
  const nombre = prompt('Ingrese el nombre del producto:');
  const precio = parseFloat(prompt('Ingrese el precio del producto:'));
  
  if (!nombre || isNaN(precio)) {
    alert('Entrada inválida. El producto no se ha agregado.');
  } else if (!nombreProducto1) {
    nombreProducto1 = nombre;
    precioProducto1 = precio;
    alert(`El producto "${nombre}" con precio $${precio.toFixed(2)} ha sido agregado.`);
  } else if (!nombreProducto2) {
    nombreProducto2 = nombre;
    precioProducto2 = precio;
    alert(`El producto "${nombre}" con precio $${precio.toFixed(2)} ha sido agregado.`);
  } else if (!nombreProducto3) {
    nombreProducto3 = nombre;
    precioProducto3 = precio;
    alert(`El producto "${nombre}" con precio $${precio.toFixed(2)} ha sido agregado.`);
  } else {
    alert('Ya ha alcanzado el límite de productos que puede almacenar.');
  }
}

// Función para modificar un producto
function modificarProducto() {
  const nombre = prompt('Ingrese el nombre del producto que desea modificar:');
  
  if (nombre === nombreProducto1) {
    const nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio para "${nombre}":`));
  
    if (isNaN(nuevoPrecio)) {
      alert('Entrada inválida. El producto no se ha modificado.');
    } else {
      precioProducto1 = nuevoPrecio;
      alert(`El precio del producto "${nombre}" ha sido actualizado a $${nuevoPrecio.toFixed(2)}.`);
    }
  } else if (nombre === nombreProducto2) {
    const nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio para "${nombre}":`));
  
    if (isNaN(nuevoPrecio)) {
      alert('Entrada inválida. El producto no se ha modificado.');
    } else {
      precioProducto2 = nuevoPrecio;
      alert(`El precio del producto "${nombre}" ha sido actualizado a $${nuevoPrecio.toFixed(2)}.`);
    }
  } else if (nombre === nombreProducto3) {
    const nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio para "${nombre}":`));
  
    if (isNaN(nuevoPrecio)) {
      alert('Entrada inválida. El producto no se ha modificado.');
    } else {
      precioProducto3 = nuevoPrecio;
      alert(`El precio del producto "${nombre}" ha sido actualizado a $${nuevoPrecio.toFixed(2)}.`);
    }
  } else {
    alert('El producto no existe en la lista.');
  }
}

// Función para eliminar un producto
function eliminarProducto() {
  const nombre = prompt('Ingrese el nombre del producto que desea eliminar:');
  
  if (nombre === nombreProducto1) {
    nombreProducto1 = undefined;
    precioProducto1 = undefined;
    alert(`El producto "${nombre}" ha sido eliminado.`);
  } else if (nombre === nombreProducto2) {
    nombreProducto2 = undefined;
    precioProducto2 = undefined;
    alert(`El producto "${nombre}" ha sido eliminado.`);
  } else if (nombre === nombreProducto3) {
    nombreProducto3 = undefined;
    precioProducto3 = undefined;
    alert(`El producto "${nombre}" ha sido eliminado.`);
  } else {
    alert('El producto no existe en la lista.');
  }
}

// Menú principal
let bandera = true;
while (bandera) {
  const opcion = prompt(
    'Seleccione una opción:\n' +
    '1. Agregar producto\n' +
    '2. Modificar producto\n' +
    '3. Eliminar producto\n' +
    '4. Salir'
  );
  
  switch (opcion) {
    case '1':
      agregarProducto();
      break;
    case '2':
      modificarProducto();
      break;
    case '3':
      eliminarProducto();
      break;
    case '4':
      alert('Saliendo del programa.');
      // Salir del bucle y finalizar el programa
      bandera=false;
      break ;
    default:
      alert('Opción no válida. Intente de nuevo.');
  }

}











