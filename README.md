# Amigo Secreto

Este proyecto implementa la lógica para un juego de "Amigo Secreto". El objetivo es asignar aleatoriamente un amigo secreto a cada participante, asegurando que nadie sea su propio amigo secreto.

## Archivos del proyecto

- **app.js**: Contiene la lógica principal del juego.
- **index.html**: Archivo HTML para la interfaz del proyecto.
- **style.css**: Archivo CSS para los estilos del proyecto.
- **assets/**: Carpeta que contiene imágenes utilizadas en el proyecto.

## Cómo ejecutar el proyecto

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para interactuar con la interfaz.
3. Si deseas probar la lógica directamente, abre el archivo `app.js` en un entorno de desarrollo como Visual Studio Code y ejecuta el código.

## Lógica del juego

La lógica del juego está implementada en el archivo `app.js`. La función principal es `asignarAmigosSecretos`, que toma una lista de participantes y devuelve un objeto con las asignaciones de amigos secretos.

### Ejemplo de uso

```javascript
const participantes = ["Ana", "Luis", "Carlos", "María", "Sofía", "Juan"];
const resultado = asignarAmigosSecretos(participantes);
console.log(resultado);
```

## Créditos

Este proyecto fue desarrollado por [juanoP21](https://github.com/juanoP21).
