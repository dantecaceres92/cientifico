import getData from "../utils/getData" ;

const Home = async () => {
    const characters = await getData() ;
    const view = `
        <div class = "Characters">
            ${characters.results.map(character => `
                <article class = "Character-item">
                     <a href ="#/${character.id}/"> 
                         <img src = "${character.image}" alt = "${character.name}">
                         <h2>${character.name}</h2>
                     </a>
                 </article>
            `).join("")}
        </div>
    ` ;
    return view ;
}

export default Home  ;

// Aqui nos damos cuenta que se usa el ancla "<a href= "#">" (ver linea 9) ; donde podemos ver que usa el #, 
//importante porque este hash activa al metodo "hashchange" de window para referenciar a otro id y ...
//...obtener un diferente resultado en nuestro archivo getHash.js 
