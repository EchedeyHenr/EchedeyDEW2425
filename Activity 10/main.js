let laImagen = changed.png;
function ifExist(laImagen){
    const img = new Image();
    img.src = changed.png;
    return img.complete && img.naturalHeight !== 0; // complete es que la imagen se cargó completamente
    // naturalHeight es que no está vacía (tiene alto)
}