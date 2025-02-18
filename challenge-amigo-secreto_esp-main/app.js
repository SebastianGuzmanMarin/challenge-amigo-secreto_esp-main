
let listaNombresAmigos = [ ];
listaNombresAmigos.innerHTML = "" // garantinza que la lista este vacia
let amigo;

function añadirAmigo(){ //Cada vez que se precione el boton, llamo la funcion
    let amigo = document.getElementById('idAmigo').value; //obtengo el valor de idAmigo (HTML) y se lo asigno a la variable "amigo"
    
    if  (amigo === "") {   
        return alert("Nombre invalido"); //si el valor es vacio, mostrara una alerta
    } else {
        if  (listaNombresAmigos.includes(amigo)) {  
            alert("Nombre ya esta en la lista");
            refrescarCajaAmigo();
            return;
        } else {
            listaNombresAmigos.push(amigo); //Agrega el nuevo amigo a la lista
            console.log(listaNombresAmigos);
            let ulFriendList  = document.getElementById('lista-Amigos'); //Vincular "lista-Amigos"("ul" HTML) con "ulFriendList"
            let liAmigo = document.createElement("li") //Crea un elemento de la lista
            liAmigo.textContent = amigo; //Asigna al elemento de la lista el texto de "amigo"
            ulFriendList.appendChild(liAmigo) //Asigna los elementos a la lista principal
            refrescarCajaAmigo();
            return;
        }
    }
}
function refrescarCajaAmigo() {  //Borra la informacion de la caja
    document.querySelector('#idAmigo').value ='';
}

function sortearAmigo(){
    if (listaNombresAmigos == "") {
        alert("No hay amigos en la lista");
        return;

    } else {  
    const numeroAleatorio  = Math.floor(Math.random() * listaNombresAmigos.length); // parte entera piso y numero alearotiro entre 0 y 1 * tamaño de la lista
    let amigoAleatorio = listaNombresAmigos[numeroAleatorio]; // el nombre escogido de la lista se le asigna a la variable "amigoAleatorio"
    ulResultado = document.getElementById('resultado') // vinculo la variable ulResultado con el elemento 'resultado' en HTML
    ulResultado.textContent = `Tu amigo secreto es: ${amigoAleatorio}`; // le agrego el texto de amigoAleatorio a ulResultado
    return;
    }
}