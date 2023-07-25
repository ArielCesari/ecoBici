document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(bici =>{
  
            bici.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?bici.classList.remove("filtro")
              :bici.classList.add("filtro")
        })
  
    }
  
  
  })