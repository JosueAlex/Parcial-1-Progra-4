// 1. Creación del WebComponent (Punto 3)
class ItemComic extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Sacamos los datos de los atributos
        let titulo = this.getAttribute("nombre");
        let editorial = this.getAttribute("casa");
        let formato = this.getAttribute("tipo");

        this.innerHTML = `
            <div>
                <strong>Título:</strong> ${titulo} | 
                <strong>Editorial:</strong> ${editorial} | 
                <strong>Formato:</strong> ${formato}
            </div>
        `;
    }
}
// Registrar el componente
customElements.define("item-comic", ItemComic);


// 2. Lógica y Eventos (Punto 3 y 4)
var btn = document.getElementById("btnGuardar");

btn.addEventListener("click", function() {
    // Captura de datos de los inputs
    var inputTitulo = document.getElementById("titulo").value;
    var selectEditorial = document.getElementById("editorial").value;
    var inputFormato = document.getElementById("formato").value;

    // 3. Validación (Punto 5)
    // Trim sirve para quitar espacios vacíos al inicio y final
    if (inputTitulo.trim() === "" || selectEditorial === "" || inputFormato.trim() === "") {
        alert("¡Cuidado, héroe! Debes completar todos los campos.");
        return; // No sigue con el proceso
    }

    // 4. Manipulación del DOM para mostrar datos (Punto 4)
    var contenedor = document.getElementById("listaComics");
    
    // Creamos nuestra etiqueta personalizada
    var nuevoComic = document.createElement("item-comic");
    
    // Pasamos la info a la etiqueta
    nuevoComic.setAttribute("nombre", inputTitulo);
    nuevoComic.setAttribute("casa", selectEditorial);
    nuevoComic.setAttribute("tipo", inputFormato);

    // Lo agregamos a la pantalla
    contenedor.appendChild(nuevoComic);

    // Limpiar el formulario para el siguiente cómic
    document.getElementById("formComic").reset();
});