
const infoArticulos = {
    Agronomia: {
      imagen: "../Img Barrios/Agronomia.png",
      nombre: "Agronomia",
    },
    Almagro: {
      imagen: "../Img Barrios/Almagro.png",
      nombre: "Almagro",
    },
    Balvanera: {
      imagen: "../Img Barrios/Balvanera.png",
      nombre: "Balvanera",
    },
    Barracas: {
      imagen: "../Img Barrios/Barracas.png",
      nombre: "Barracas",
    },  
    Belgrano: {
      imagen: "../Img Barrios/Belgrano.png",
      nombre: "Belgrano",
    }, 
    Boedo: {
      imagen: "../Img Barrios/Boedo.png",
      nombre: "Boedo",
    },  
    Caballito: {
      imagen: "../Img Barrios/Caballito.png",
      nombre: "Caballito",
    }, 
    Chacarita: {
      imagen: "../Img Barrios/Chacarita.png",
      nombre: "Chacarita",
    },  
    Cohglan: {
      imagen: "../Img Barrios/Cohglan.png",
      nombre: "Cohglan",
    },  
    Colegiales: {
      imagen: "../Img Barrios/Colegiales.png",
      nombre: "Colegiales",
    }, 
    Constitucion: {
      imagen: "../Img Barrios/Constitucion.png",
      nombre: "Constitucion",
    }, 
    Flores: {
      imagen: "../Img Barrios/Flores.png",
      nombre: "Flores",
    }, 
    Floresta: {
      imagen: "../Img Barrios/Floresta.png",
      nombre: "Floresta",
    }, 
    La_Boca: {
      imagen: "../Img Barrios/La Boca.png",
      nombre: "La Boca",
    }, 
    Liniers: {
      imagen: "../Img Barrios/Liniers.png",
      nombre: "Liniers",
    }, 
    Mataderos: {
      imagen: "../Img Barrios/Mataderos.png",
      nombre: "Mataderos",
    }, 
    Monserrat: {
      imagen: "../Img Barrios/Monserrat.png",
      nombre: "Monserrat",
    }, 
    Nueva_Pompeya: {
      imagen: "../Img Barrios/Nueva Pompeya.png",
      nombre: "Nueva Pompeya",
    }, 
    Nuñez: {
      imagen: "../Img Barrios/Nuñez.png",
      nombre: "Nuñez",
    }, 
    Palermo: {
      imagen: "../Img Barrios/Palermo.png",
      nombre: "Palermo",
    },
    Parque_Avellaneda: {
      imagen: "../Img Barrios/Parque Avellaneda.png",
      nombre: "Parque Avellaneda",
    },
    Parque_Chacabuco: {
      imagen: "../Img Barrios/Parque Chacabuco.png",
      nombre: "Parque Chacabuco",
    }, 
    Parque_Chas: {
      imagen: "../Img Barrios/Parque Chas.png",
      nombre: "Parque Chas",
    }, 
    Parque_Patricios: {
      imagen: "../Img Barrios/Parque Patricios.png",
      nombre: "Parque Patricios",
    }, 
    Paternal: {
      imagen: "../Img Barrios/Paternal.png",
      nombre: "Paternal",
    },
    Recoleta: {
      imagen: "../Img Barrios/Recoleta.png",
      nombre: "Recoleta",
    }, 
    Retiro: {
      imagen: "../Img Barrios/Retiro.png",
      nombre: "Retiro",
    }, 
    Saavedra: {
      imagen: "../Img Barrios/Saavedra.png",
      nombre: "Saavedra",
    },
    San_Cristobal: {
      imagen: "../Img Barrios/San Cristobal.png",
      nombre: "San Cristobal",
    }, 
    San_Nicolas: {
      imagen: "../Img Barrios/San Nicolas.png",
      nombre: "San Nicolas",
    },
    San_Telmo: {
      imagen: "../Img Barrios/San Telmo.png",
      nombre: "San Telmo",
    }, 
    Villa_Crespo: {
      imagen: "../Img Barrios/Villa Crespo.png",
      nombre: "Villa Crespo",
    }, 
    Villa_del_Parque: {
      imagen: "../Img Barrios/Villa del Parque.png",
      nombre: "Villa del Parque",
    },
    Villa_Devoto: {
      imagen: "../Img Barrios/Villa Devoto.png",
      nombre: "Villa Devoto",
    }, 
    Villa_Urquiza: {
      imagen: "../Img Barrios/Villa Urquiza.png",
      nombre: "Villa Urquiza",
    }, 
  };

// function mostrarInformacionBarrio(barrio) {
//   const infoBarrio = infoArticulos[barrio];
//   const infoArticuloElement = document.getElementById("infoArticulo");

//   infoArticuloElement.innerHTML = "";

//   const nombreElement = document.createElement("h3");
//   nombreElement.textContent = infoBarrio.nombre;

//   const imagenElement = document.createElement("img");
//   imagenElement.src = infoBarrio.imagen;
//   imagenElement.alt = "Imagen del barrio";

//   const descripcionElement = document.createElement("p");
//   descripcionElement.textContent = infoBarrio.descripcion;

//   infoArticuloElement.appendChild(nombreElement);
//   infoArticuloElement.appendChild(imagenElement);
//   infoArticuloElement.appendChild(descripcionElement);
// }

// const listaArticulos = document.getElementById("listaArticulos");

// const articulos = listaArticulos.getElementsByTagName("li");
// for (let i = 0; i < articulos.length; i++) {
//   articulos[i].addEventListener("click", function () {
//     const barrioSeleccionado = this.getAttribute("data-barrio");
//     mostrarInformacionBarrio(barrioSeleccionado);
//   });
// }

function mostrarInformacionBarrio(barrio) {
  const infoBarrio = infoArticulos[barrio];
  const infoArticuloElement = document.getElementById("infoArticulo");

  // Limpiar el contenido anterior del contenedor
  infoArticuloElement.innerHTML = "";

  // Crear elementos para mostrar la información del barrio
  const nombreElement = document.createElement("h3");
  nombreElement.textContent = infoBarrio.nombre;

  const imagenElement = document.createElement("img");
  imagenElement.src = infoBarrio.imagen;
  imagenElement.alt = "Imagen del barrio";

  const descripcionElement = document.createElement("p");
  descripcionElement.textContent = infoBarrio.descripcion;

  // Agregar los elementos al contenedor
  infoArticuloElement.appendChild(nombreElement);
  infoArticuloElement.appendChild(imagenElement);
  infoArticuloElement.appendChild(descripcionElement);
}

// Obtener el desplegable de barrios
const selectBarrios = document.getElementById("selectBarrios");

// Agregar evento de cambio al desplegable
selectBarrios.addEventListener("change", function () {
  const barrioSeleccionado = this.value;
  mostrarInformacionBarrio(barrioSeleccionado);
});