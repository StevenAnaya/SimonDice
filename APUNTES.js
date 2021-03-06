// Con el teclado virtual que hicimos capturaremos el evento keydown llamada a través de la función document.addEventListener(‘keydown’)
// Cada tecla de nuestro teclado físico tiene un código asignado, con la función anterior obtendremos el keyCode de cada tecla para después asociarlo a nuestro teclado virtual con la propiedad data-key de la etiqueta div.
// La función docment.querySelector(’[data-key]="${keyCode}"’) nos devolverá las etiquetas que poseen la propiedad data-key. Por lo tanto crearemos una función propia llamada getElementByKeycode que reciba el keycode asignado para que filtre y nos devuelva la etiqueta que tenga la propiedad data-key con ese keycode.
// A continuación haremos una función que trabajará sobre los estilos css y mostrará activa, presionada o fallada la tecla presionada de nuestro teclado virtual.
// Y podemos llamarla así:
// activate(65);
// activate(65, { success: true});
// activate(65, { fail: true});
// Con esto la tecla presionada adoptará el estilo css especificado.
// Para añadir un toque genial a nuestro teclado pondremos un Time Out para desactivar la tecla y regresarla a su estilo inicial, esto nos dará un efecto de keyDown y keyUp.
// Por último haremos dos funciones más que se enfocarán en la lógica de nuestro juego. Nos ayuden a definir aleatoriamente las teclas que el usuario debe presionar tras saber su nivel recuerda que esto debe suceder cada vez que se inicie un nuevo juego.
//
//
// Crearemos la lógica de nuestro juego, validemos si el usuario adivina o no y actuemos sobre eso, todo esto sobre la primer ronda.
// Crearemos la función siguienteNivel la cual recibe el nivel actual esta valida si el juego ha terminado, si va a comenzar o si esta en algún nivel específico. Además llamando a nuestra función activate mostraremos las teclas que debe seguir el usuario añadiéndole un estilo particular.
// Recuerda que el procesador de nuestra computadora ejecuta muy rápido las instrucciones de código por lo tanto pondremos un Time Out para que las teclas a seguir se vayan mostrando con un Delay o retardo.
// Después con nuestra función onkeydown validaremos si el usuario presionó la tecla correcta o incorrecta, dependiendo del resultado asignaremos el estilo adecuado.


// Casi terminamos nuestro juego, implementaremos la librería Sweet Alert para hacer más lindos nuestros mensajes al usuario.
// En la sección de Enlaces encontrarás el sitio oficial de Sweet Alert para descargar la librería o ver la documentación.
// Una vez añadida la librería la usaremos para todos nuestros alerts, algo así:
// alert('Ganaste!') por return swal({ title: 'Ganaste!', type: 'success' })
// Y ahora nuestro alert lucirá más lindo.
