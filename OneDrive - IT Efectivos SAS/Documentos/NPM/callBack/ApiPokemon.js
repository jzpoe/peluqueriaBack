const button = document.querySelector("#btn");

button.addEventListener ('click', async ()=>{
    console.log("App Pokemon Go!");
    const  llamadaApi = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto")

    console.log (llamadaApi)


    const respuesta = await llamadaApi.json();
    console.log (respuesta.forms[0])
})