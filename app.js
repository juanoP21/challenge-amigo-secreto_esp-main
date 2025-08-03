// Inicializar la lista de participantes como vacía
const participantes = [];

// Función para asignar amigos secretos
function asignarAmigosSecretos(participantes) {
    if (participantes.length < 2) {
        throw new Error("Debe haber al menos dos participantes para sortear.");
    }

    const asignaciones = {};
    const disponibles = [...participantes];

    participantes.forEach(participante => {
        // Filtrar para evitar que alguien sea su propio amigo secreto
        const posibles = disponibles.filter(p => p !== participante);

        if (posibles.length === 0) {
            throw new Error("No se puede asignar un amigo secreto. Verifica la lista de participantes.");
        }

        // Seleccionar un amigo secreto aleatorio
        const indiceAleatorio = Math.floor(Math.random() * posibles.length);
        const amigoSecreto = posibles[indiceAleatorio];

        // Asignar y remover de la lista de disponibles
        asignaciones[participante] = amigoSecreto;
        disponibles.splice(disponibles.indexOf(amigoSecreto), 1);
    });

    return asignaciones;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");

    if (input.value.trim() !== "") {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = input.value;
        lista.appendChild(nuevoAmigo);
        participantes.push(input.value.trim());
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para sortear amigos secretos y mostrar el resultado
function sortearAmigo() {
    try {
        const resultado = asignarAmigosSecretos(participantes);
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = "";

        for (const [amigo, secreto] of Object.entries(resultado)) {
            const item = document.createElement("li");
            item.textContent = `${amigo} tiene como amigo secreto a ${secreto}`;
            listaResultado.appendChild(item);
        }
    } catch (error) {
        alert(error.message);
    }
}

// Ejecutar la lógica y mostrar las asignaciones
try {
    const resultado = asignarAmigosSecretos(participantes);
    console.log("Asignaciones de Amigo Secreto:", resultado);
} catch (error) {
    console.error(error.message);
}