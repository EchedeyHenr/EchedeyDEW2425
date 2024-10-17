//tiempo de construcción y destrucción
//let interval = setInterval(createBrick, time);

    let constructionTime = 3000;
    let gameContainer = document.querySelector('#table-container');
    const brickWidth = 104;
    let currentX = 0;
    let currentY = 0;
    let interval;
    let cont;

    function initial() {
        interval = setInterval(createBrick, 1000);
        cont = 0;
    }
    // Una función que cree el ladrillo
    function createBrick() {
        console.log(cont);
        if (currentX + brickWidth <= gameContainer.clientWidth) {
            let brick = document.createElement('div');
            brick.className = 'brick';
            brick.style.left = currentX + 'px' // establece la posición horizontal del ladrillo
            brick.style.top = currentY + 'px'; // Centra el ladrillo
            currentX += brickWidth; // Actualiza la posición X para el proximo ladrillo //removeChild
            // Un escuchador de eventos, que cuando haga click elimine el ladrillo
            brick.addEventListener('click', function () {
                gameContainer.removeChild(brick);
                cont--;
            }); // Acaba la función de eliminarlo
            gameContainer.appendChild(brick); //Añade el ladrillo al contenedor
            cont++;
        } else {
            currentX = 0; // Reinicia la posición X si se alcanzó el borde derecho
            currentY += 54;
        }
        if(cont == 0){
            stop();
        }
    }

function stop(){  
    console.log(interval);
    clearInterval(interval);
}



