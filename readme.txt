1- ¿Qué valor agregado tiene el uso de webcomponents a su proyecto? 
La reutilización y el orden. En lugar de tener un montón de etiquetas <div> y <span> repetidas para cada cómic en la lista,  creamos una etiqueta propia (como <mi-item>). 
Esto hace que el código sea mucho más limpio y que, si en el futuro queremos cambiar el diseño de cómo se ve un cómic,  solo tengamos que modificar el componente en un solo lugar 
y se actualizará en toda la página.

2- ¿De qué forma manipularon los datos sin recargar la página?
Lo logramos utilizando JavaScript y el DOM. Cuando el usuario hace clic en el botón, capturamos la información de los cuadros de texto y creamos un nuevo elemento 
en la lista usando document.createElement. Al "inyectar" este nuevo elemento directamente en el contenedor de la página, 
el usuario ve el resultado al instante sin que el navegador tenga que volver a cargar todo el sitio.

3- ¿De qué forma validaron las entradas de datos?
Usamos una validación lógica simple con una estructura if. 
Antes de permitir que el cómic se agregue a la lista, el programa revisa si los campos de texto están vacíos o si el selector no tiene una opción elegida. 
Si falta algún dato, el programa detiene el proceso y muestra un mensaje de alerta (alert) avisando que todos los campos son obligatorios.

4- ¿Cómo manejaría la escalabilidad futura en su página?
Para que la página crezca implementaría dos cosas principales: uso de bases de datos y separar el JavaScript en diferentes archivos.


Estudiante: Josue Alexander Turcios Quintanilla SMIS94820