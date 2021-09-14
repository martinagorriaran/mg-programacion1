export default class Anime{

    constructor()
    {
        
    }

    async obtenerCatalogo(){
        const d = await fetch ("https://api.jikan.moe/v3/search/anime?q=one%20piece")
        const sinopsis = await d.json()
        
        const catalogo = sinopsis.results;

        let array_sinopsis = [];

        catalogo.forEach(element => {
     
         let item = `
             <li class="list-group-item">${element.synopsis}<li>
        `
        array_sinopsis.push(item)

        });

        document.getElementById("lista_sinopsis").innerHTML = array_sinopsis.join('')
    }


    async obtenerFotos(){
        const d = await fetch ("https://api.jikan.moe/v3/search/anime?q=one%20piece")
        const fotos = await d.json()

        const fotoss = fotos.results;
      
        let array_fotos = [];
      
        fotoss.forEach(element => {
           
          let item = `
              <div class="col-3">
                    <div class="card" >
                        <img src="${element.image_url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <a href="#" class="btn btn-primary">Ver</a>
                            </div>
                    </div>
              </div>
          `
          array_fotos.push(item)
      
        });
      
        document.getElementById("lista_fotos").innerHTML = array_fotos.join('')
      
      }
      
    
} 




