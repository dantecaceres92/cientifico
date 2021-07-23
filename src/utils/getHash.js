const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/" ;   //Me devuelve un string, ejm: "1" o "123"
                           
export default getHash ;