
export const getGifs = async(category) => { // funcion asincrona 
        const url = `https://api.giphy.com/v1/gifs/search?api_key=ZPPMABfl38udJ5mIih6v0okGs5muV6gC&q=${category}&limit=10`
        const resp = await fetch(url); // se llama a la api de manera asincrona
        const {data} = await resp.json();
  
        const gifs = data.map(img => 
            ({
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }));
    
        return (gifs);
    } 