const tarjeta = document.getElementById('tarjeta');

const lookForInfo = () =>{
    fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=062373c4e9279953ad3fc5e67e7d9311")
    .then(res=>res.json())
    .then((data) =>{ 
       crearTarjeta(data.data.results)
       asignarClick()
    })
}
const crearTarjeta =(array)=>{
    console.log (array)
    const html = array.reduce((acc,curr)=>{
        return acc + `
            <div class="tarjeta-cerrada tarjeta-abierta" data-id="${curr.id}">
                <h2>${curr.title}</h2>
                <img src ="${curr.thumbnail.path}.${curr.thumbnail.extension}">

            </div>
        `
    },"")
    tarjeta.innerHTML=html
}
const asignarClick = () => {
    const tarjetas =document.querySelectorAll (".tarjetas");
    for (let i= 0; i < tarjetas.length; i++) {
        tarjetas[i].onclick =()=>{
            const id = tarjetas[i].dataset.id;
            
        }
    }
}
const cerrar = document.getElementsByClassName("cerrar")
const abrirTarjeta= document.getElementById("abrir-tarjeta")
const tarjeta = document.getElementById("tarjeta");

abrirTarjeta.onclik=()=>{
    if( tarjeta.classList.contains(".tarjeta-cerrada")){
        tarjeta.classList.remove(".tarjeta-cerrada")
        tarjeta.classList.add(".tarjeta-abierta")
    }else if(tarjeta.classList.contains(".tarjeta-abierta")){
        tarjeta.classList.remove(".tarjeta-abierta");
        tarjeta.classList.add(".tarjeta-cerrada");
    }
};





lookForInfo();


