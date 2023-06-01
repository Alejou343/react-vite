const initializeLS = () => {
    const cuentaAlmacenada = localStorage.getItem('cuenta')
    const estadoAlmacenado = localStorage.getItem('en-linea')
    let parsedCuenta
    let parsedEstado

    if (!cuentaAlmacenada) {
        localStorage.setItem('cuenta', '{}')
        parsedCuenta = {}
    } else {
        parsedCuenta = JSON.parse(cuentaAlmacenada)
    }

    if (!estadoAlmacenado) {
        localStorage.setItem('en-linea', 'false')
        parsedEstado = false
    } else {
        parsedEstado = JSON.parse(estadoAlmacenado)
    }
}

export default initializeLS;