let arrayAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    if (nomeAmigo.value == '') {
        alert('Informe o nome do amigo.');
        return; 
    }

    if (arrayAmigos.includes(nomeAmigo.value)) {
        alert("Nome já adicionado!");
        return;
    }
    
    let listaAmigos = document.getElementById('lista-amigos');

    arrayAmigos.push(nomeAmigo.value)
    if (listaAmigos.textContent == "") {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigo.value;
    }

    nomeAmigo.value = '';
    
}

function sortear() {
    if (arrayAmigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!')
        return;
    }

    embaralhar(arrayAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < arrayAmigos.length; i++) {
     
        if (i == arrayAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + arrayAmigos[i] + " --> " + arrayAmigos[0] + "<br>";

        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + arrayAmigos[i] + " --> " + arrayAmigos[i + 1] + "<br>";
        }
     
    }

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    arrayAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

