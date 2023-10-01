mock = [
    {
        "nombre": "Unbranded Cotton Shoes",
        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "precio": "15.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "4"
    },
    {
        "nombre": "Modern Frozen Chair",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "300.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "5"
    },
    {
        "nombre": "Oriental Rubber Car",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "80.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "6"
    },
    {
        "nombre": "Awesome Plastic Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "144.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "7"
    },
    {
        "nombre": "Recycled Metal Ball",
        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "precio": "800.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "8"
    },
    {
        "nombre": "Handcrafted Concrete Towels",
        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "precio": "605.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "9"
    },
    {
        "nombre": "Handmade Bronze Salad",
        "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "precio": "566.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "11"
    },
    {
        "nombre": "Bespoke Bronze Keyboard",
        "descripcion": "The Football Is Good For Training And Recreational Purposes",
        "precio": "587.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "12"
    },
    {
        "nombre": "Awesome Cotton Gloves",
        "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "precio": "391.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "13"
    },
    {
        "nombre": "Handmade Concrete Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "306.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "14"
    }
]

//obtener contenedor html para insertar contenido
cardContainer = document.getElementById("card-container");

//codigo a insertar. ARTICULOS
copiaMock = mock.map((articulo => {
    return `
    <div class="card btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="articles">
            <img src="${articulo.urlImagen}"></img>
            <div class="info-card">
                <h5>${articulo.nombre}</h5>
                <h6>Price: $${articulo.precio}</h6>
            </div>
        </div>
    </div>`
}))
//insertar todo en el contenedor HTML
cardContainer.innerHTML = copiaMock.join("");

/////////////////////////////////////////////////////////////////////////////////////
//INSERCIÓN DE ARCHIVO HTML AL INDEX.HTML
contenidoPostProductos = document.getElementById("contenidoPostProductos")

// Ruta al archivo "productoSeleccionado.html"
const filePath = 'pages/paginamodelo.html';

// Utiliza fetch para obtener el contenido del archivo
fetch(filePath)
    .then(response => response.text())
    .then(html => {
        // Inserta el contenido HTML en el contenedor "view"
        cardContainer.innerHTML += html;
    })
    .catch(error => {
        console.error('Error al cargar el archivo:', error);
    });


///////////////////////////////////////////////////////////////////////////////////////
//ORDENAMIENTO DE PRODUCTOS SEGUN FILTRO/EVENTO CHANGE EN EL SELECT
// Obtén el elemento select
var selectElement = document.getElementById('miSelect');
var ordenamiento = null;
// Define la función que se ejecutará cuando cambie el select
    function miFuncionCambio() {
            // Obtiene el valor seleccionado
            var valorSeleccionado = selectElement.value;
            
            // Actualiza la dirección de ordenamiento en función del valor seleccionado
            if (valorSeleccionado === "opcion2") {
                ordenamiento = "ascendente"; // Ordenar de menor a mayor
            } else if (valorSeleccionado === "opcion3") {
                ordenamiento = "descendente"; // Ordenar de mayor a menor
            } else {
                ordenamiento = null; // No hay cambio en el ordenamiento
            }

        

            // Llama a una función para ordenar y actualizar la vista
            ordenarProductos();
        }

        // Función para ordenar los productos según la dirección seleccionada
        function ordenarProductos() {
        if (ordenamiento === "ascendente") {
            // Ordenar el arreglo "mock" por precio de menor a mayor
            mock.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
        } else if (ordenamiento === "descendente") {
            // Ordenar el arreglo "mock" por precio de mayor a menor
            mock.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
        } else{}

        // Generar nuevamente los elementos HTML con el arreglo ordenado
        const copiaMockOrdenada = mock.map((articulo) => {
            return `
            <div class="contenedorDeArticulos">
                <div class="articles">
                    <img src="${articulo.urlImagen}"></img>
                    <div class="contenedorDeArticulosTEXTO">
                        <h5>${articulo.nombre}</h5>
                        <h6>Price: $${articulo.precio}</h6>
                    </div>
                </div>
            </div>`
        });

  // Insertar los elementos ordenados en el contenedor "view"
  cardContainer.innerHTML = copiaMockOrdenada.join('');
}


// Agrega un "event listener" para el evento "change"
selectElement.addEventListener('change', miFuncionCambio);


// Llama a la función para mostrar inicialmente los productos sin ordenar
ordenarProductos();



//////////////////////////////////////////////////////////////////////////////
//BUSCADOR CON INPUT

// Obtén el elemento de entrada de búsqueda
const searchInput = document.getElementById('searchInput');

// Agrega un evento de escucha al input para detectar cambios
searchInput.addEventListener('input', function() {
  // Obtiene el término de búsqueda ingresado por el usuario
  const searchTerm = searchInput.value.toLowerCase();

  // Filtra los productos que coinciden con el término de búsqueda
  const productosFiltrados = mock.filter(producto => {
    // Convierte el nombre del producto a minúsculas para hacer una búsqueda insensible a mayúsculas
    const nombreEnMinusculas = producto.nombre.toLowerCase();
    // Comprueba si el término de búsqueda está contenido en el nombre del producto
    return nombreEnMinusculas.includes(searchTerm);
  });

  // Llama a una función para mostrar los productos filtrados en la vista
  mostrarProductos(productosFiltrados);
});

// Función para mostrar los productos en la vista
function mostrarProductos(productos) {
  // Genera elementos HTML para los productos en "productos" y actualiza el contenido en el contenedor "view"
  const copiaProductos = productos.map(producto => {
    return `
    <div class="card">
        <div class="articles">
            <img src="${producto.urlImagen}"></img>
            <div class="info-card">
                <h5>${producto.nombre}</h5>
                <h6>Price: $${producto.precio}</h6>
            </div>
        </div>
    </div>`;
  });

  // Inserta los elementos generados en el contenedor "view"
  cardContainer.innerHTML = copiaProductos.join('');
}







//******************************************************************************************************** */

//function mostrarModal() {
//    // Genera elementos HTML para los productos en "productos" y actualiza el contenido en el contenedor "view"
//    const modal = productos.map(producto => {
//      return `
//      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onclick="mostrarModal">
//        <div class="modal-dialog">
//          <div class="modal-content">
//            <div class="modal-header">
//             <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//            </div>
//            <div class="modal-body">
//              asasas
//            </div>
//            <div class="modal-footer">
//              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//              <button type="button" class="btn btn-primary">Save changes</button>
//            </div>
//          </div>
//        </div>
//      </div>`;
//    });
//  
//    // Inserta los elementos generados en el contenedor "view"
//    cardContainer.innerHTML = copiaProductos.join('');
//  }

