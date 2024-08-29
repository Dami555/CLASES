function saludar(nombre) {
    // return ("Hola "+nombre);
    // alt + 96 = ` `
    return `¡Hola ${nombre}!`;
}

function notificacion(mensaje) {
    return `¡Mensaje: ${mensaje}!`
}
export {saludar, notificacion};