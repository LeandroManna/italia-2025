# Italia 2025

## Descripción

Este proyecto es una aplicación web que visualiza un itinerario de viaje a Italia para 2025, mostrando información detallada sobre vuelos, alojamientos y actividades día a día. La página utiliza un enfoque simple pero efectivo, cargando datos desde un archivo JSON y presentándolos en una interfaz agradable y responsive.

## Características

- Visualización estructurada del itinerario de viaje
- Detalles de vuelos (ida y vuelta) con información de fechas y aeropuertos
- Plan de alojamiento por ciudad con fechas de check-in/check-out
- Actividades programadas para cada día del viaje
- Diseño responsive adaptado a dispositivos móviles y de escritorio
- Interfaz visual con imágenes ilustrativas de cada destino

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- [Bootstrap 5](https://getbootstrap.com/) para la interfaz gráfica
- [Font Awesome](https://fontawesome.com/) para iconos

## Estructura del proyecto

```
italia-2025/
├── assets/
│   ├── img/                    # Imágenes de destinos y recursos
├── css/
│   └── style.css               # Estilos personalizados 
├── js/
│   └── main.js                 # Lógica para cargar y mostrar datos
├── index.html                  # Página principal
└── viaje_italia.json           # Datos del itinerario en formato JSON
```

## Funcionamiento

La aplicación funciona siguiendo estos pasos:

1. Al cargar la página, se realiza una petición para obtener los datos del archivo `viaje_italia.json`
2. Los datos son procesados y mostrados en las diferentes secciones de la página:
   - Sección de vuelos (ida y vuelta)
   - Lista de alojamientos por ciudad
   - Calendario detallado de actividades día por día
3. Las imágenes asociadas a cada destino se cargan dinámicamente según las rutas especificadas en el JSON
4. La navegación permite al usuario desplazarse entre las diferentes secciones del itinerario

## Instalación y uso

1. Clona este repositorio:
   ```
   git clone https://github.com/LeandroManna/italia-2025.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd italia-2025
   ```

3. Abre el archivo `index.html` en tu navegador o utiliza un servidor web local para visualizar el proyecto.

## Estructura del JSON

El archivo `viaje_italia.json` contiene toda la información estructurada del viaje:

- **viaje**: Objeto principal con:
  - **titulo**: Nombre del viaje
  - **fechas**: Objeto con fechas de salida, llegada y regreso
  - **vuelos**: Detalles de vuelos de ida y vuelta
  - **alojamiento**: Array de objetos con información de hospedaje por ciudad
  - **itinerario**: Array de objetos con actividades diarias detalladas

## Personalización

Para adaptar este proyecto a otro viaje:

1. Modifica el archivo `viaje_italia.json` con los detalles de tu viaje
2. Actualiza las imágenes en `assets/img/` para que coincidan con tus destinos
3. Ajusta el diseño en `css/style.css` según tus preferencias

## Posibles mejoras

- Añadir un mapa interactivo para visualizar el recorrido completo
- Implementar un contador regresivo para la fecha del viaje
- Agregar funcionalidad para guardar notas o comentarios por día
- Desarrollar una versión offline como PWA
- Integrar previsión meteorológica para cada destino
- Añadir conversor de monedas local/euro

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, no dudes en hacer un fork y enviar un pull request.

## Autor

Desarrollado por [Leandro Manna](https://github.com/LeandroManna)