function distanciaAlOrigen(x, y) {
    return Math.sqrt(x * x + y * y);
}

function coordenadaMasCercana(coordenadas) {
    let distanciaMinima = Infinity;
    let coordenadaCercana = null;
    
    coordenadas.forEach(coordenada => {
        const distancia = distanciaAlOrigen(coordenada[0], coordenada[1]);
        if (distancia < distanciaMinima) {
            distanciaMinima = distancia;
            coordenadaCercana = coordenada;
        }
    });
    
    return coordenadaCercana;
}

/*
const coordenadasUsuario = [[1, 2], [-3, 4], [5, -6], [-7, -8]];
const coordenadaCercana = coordenadaMasCercana(coordenadasUsuario);
console.log("La coordenada más cercana al origen es:", coordenadaCercana);*/

