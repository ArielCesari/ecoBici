// document.addEventListener("keyup", e=>{

//     if (e.target.matches("#buscador")){

//         if (e.key ==="Escape")e.target.value = ""

//         document.querySelectorAll(".articulo").forEach(bici =>{

//             bici.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//               ?bici.classList.remove("filtro")
//               :bici.classList.add("filtro")
//         })

//     }


//   })


document.addEventListener("DOMContentLoaded", function () {
  const listaArticulos = document.getElementById("listaArticulos");
  const infoArticulos = {
    Agronomia: {
      imagen: "../Img Barrios/Agronomia.png",
      descripcion: "Agronomia",
    },
    Almagro: {
      imagen: "../Img Barrios/Almagro.png",
      descripcion: "Almagro",
    },
    Balvanera: {
      imagen: "../Img Barrios/Balvanera.png",
      descripcion: "Balvanera",
    },
    Barracas: {
      imagen: "../Img Barrios/Barracas.png",
      descripcion: "Barracas",
    },  
    Belgrano: {
      imagen: "../Img Barrios/Belgrano.png",
      descripcion: "Belgrano",
    }, 
    Boedo: {
      imagen: "../Img Barrios/Boedo.png",
      descripcion: "Boedo",
    },  
    Caballito: {
      imagen: "../Img Barrios/Caballito.png",
      descripcion: "Caballito",
    }, 
    Chacarita: {
      imagen: "../Img Barrios/Chacarita.png",
      descripcion: "Chacarita",
    },  
    Cohglan: {
      imagen: "../Img Barrios/Cohglan.png",
      descripcion: "Cohglan",
    },  
    Colegiales: {
      imagen: "../Img Barrios/Colegiales.png",
      descripcion: "Colegiales",
    }, 
    Constitucion: {
      imagen: "../Img Barrios/Constitucion.png",
      descripcion: "Constitucion",
    }, 
    Flores: {
      imagen: "../Img Barrios/Flores.png",
      descripcion: "Flores",
    }, 
    Floresta: {
      imagen: "../Img Barrios/Floresta.png",
      descripcion: "Floresta",
    }, 
    La_Boca: {
      imagen: "../Img Barrios/La Boca.png",
      descripcion: "La Boca",
    }, 
    Liniers: {
      imagen: "../Img Barrios/Liniers.png",
      descripcion: "Liniers",
    }, 
    Mataderos: {
      imagen: "../Img Barrios/Mataderos.png",
      descripcion: "Mataderos",
    }, 
    Monserrat: {
      imagen: "../Img Barrios/Monserrat.png",
      descripcion: "Monserrat",
    }, 
    Nueva_Pompeya: {
      imagen: "../Img Barrios/Nueva Pompeya.png",
      descripcion: "Nueva Pompeya",
    }, 
    Nuñez: {
      imagen: "../Img Barrios/Nuñez.png",
      descripcion: "Nuñez",
    }, 
    Palermo: {
      imagen: "../Img Barrios/Palermo.png",
      descripcion: "Palermo",
    },
    Parque_Avellaneda: {
      imagen: "../Img Barrios/Parque Avellaneda.png",
      descripcion: "Parque Avellaneda",
    },
    Parque_Chacabuco: {
      imagen: "../Img Barrios/Parque Chacabuco.png",
      descripcion: "Parque Chacabuco",
    }, 
    Parque_Chas: {
      imagen: "../Img Barrios/Parque Chas.png",
      descripcion: "Parque Chas",
    }, 
    Parque_Patricios: {
      imagen: "../Img Barrios/Parque Patricios.png",
      descripcion: "Parque Patricios",
    }, 
    Paternal: {
      imagen: "../Img Barrios/Paternal.png",
      descripcion: "Paternal",
    },
    Recoleta: {
      imagen: "../Img Barrios/Recoleta.png",
      descripcion: "Recoleta",
    }, 
    Retiro: {
      imagen: "../Img Barrios/Retiro.png",
      descripcion: "Retiro",
    }, 
    Saavedra: {
      imagen: "../Img Barrios/Saavedra.png",
      descripcion: "Saavedra",
    },
    San_Cristobal: {
      imagen: "../Img Barrios/San Cristobal.png",
      descripcion: "San Cristobal",
    }, 
    San_Nicolas: {
      imagen: "../Img Barrios/San Nicolas.png",
      descripcion: "San Nicolas",
    },
    San_Telmo: {
      imagen: "../Img Barrios/San Telmo.png",
      descripcion: "San Telmo",
    }, 
    Villa_Crespo: {
      imagen: "../Img Barrios/Villa Crespo.png",
      descripcion: "Villa Crespo",
    }, 
    Villa_del_Parque: {
      imagen: "../Img Barrios/Villa del Parque.png",
      descripcion: "Villa del Parque",
    },
    Villa_Devoto: {
      imagen: "../Img Barrios/Villa Devoto.png",
      descripcion: "Villa Devoto",
    }, 
    Villa_Urquiza: {
      imagen: "../Img Barrios/Villa Urquiza.png",
      descripcion: "Villa Urquiza",
    }, 
  };

  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", function () {
    const filtro = buscador.value.toLowerCase();
    const articulos = listaArticulos.getElementsByTagName("li");

    for (const articulo of articulos) {
      const nombreArticulo = articulo.textContent.toLowerCase();
      if (nombreArticulo.includes(filtro)) {
        articulo.style.display = "block";
      } else {
        articulo.style.display = "none";
      }
    }
  });

  listaArticulos.addEventListener("click", function (event) {
    const articuloSeleccionado = event.target.textContent;
    const infoSeleccionada = infoArticulos[articuloSeleccionado];

    const infoArticulo = document.getElementById("infoArticulo");
    infoArticulo.innerHTML = `
      <h3>${infoSeleccionada.descripcion}</h3>
      <img src="${infoSeleccionada.imagen}" alt="${articuloSeleccionado}">
    `;
  });
});