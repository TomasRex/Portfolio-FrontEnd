fetch('http://127.0.0.1:5500/pruebas.json').then((response)=> response.json()).then((data) => {
    const nombres = data.map((nombre) => nombre.nombre)
    console.log(nombres)
});
