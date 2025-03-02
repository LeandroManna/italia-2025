fetch("json/viaje_italia.json")
  .then((response) => response.json())
  .then((data) => {
    const viaje = data.viaje;

    // Mostrar vuelos
    const vuelosContainer = document.getElementById("vuelos-container");
    Object.keys(viaje.vuelos).forEach((tipo) => {
      const vuelo = viaje.vuelos[tipo];
      vuelosContainer.innerHTML += `
                        <div class="col-md-6">
                            <div class="card mb-3" onclick="mostrarModal('Vuelo ${tipo}', '${vuelo.imagen}','De: ${vuelo.origen} <br> Escala: ${vuelo.escala} <br> A: ${vuelo.destino} <br> Salida: ${vuelo.horario_salida} <br> Llegada: ${vuelo.horario_llegada}')">
                                <div class="card-body">
                                    <h5 class="card-title">Vuelo ${tipo}</h5>
                                    <p class="card-text">Origen: ${vuelo.origen} - Destino: ${vuelo.destino}</p>
                                </div>
                            </div>
                        </div>`;
    });

    // Mostrar alojamientos
    const alojamientoContainer = document.getElementById(
      "alojamiento-container"
    );
    viaje.alojamiento.forEach((aloja) => {
      alojamientoContainer.innerHTML += `
                        <div class="col-md-4">
                            <div class="card mb-3" onclick="mostrarModal('Alojamiento en ${aloja.ciudad}', '${aloja.imagen}', 'Check-in: ${aloja.check_in} <br> Check-out: ${aloja.check_out} <br> Noches: ${aloja.noches}')">
                                <div class="card-body">
                                    <h5 class="card-title">${aloja.ciudad}</h5>
                                    <p class="card-text">${aloja.noches} noches</p>
                                </div>
                            </div>
                        </div>`;
    });

    // Mostrar itinerario
    const itinerarioContainer = document.getElementById("itinerario-container");
    viaje.itinerario.forEach((dia) => {
      const actividades = dia.actividades ? dia.actividades.join("<br>") : "";
      itinerarioContainer.innerHTML += `
                        <div class="col-md-4">
                            <div class="card mb-3" onclick="mostrarModal('${dia.fecha} - ${dia.ciudad}', '${dia.imagen}','${actividades}')">
                                <div class="card-body">
                                    <h5 class="card-title">${dia.fecha} - ${dia.ciudad}</h5>
                                    <p class="card-text">${actividades
                                      .split("<br>")
                                      .slice(0, 2)
                                      .join("<br>")}...</p>
                                </div>
                            </div>
                        </div>`;
    });
  });

function mostrarModal(titulo, imagen, contenido) {
  // Asignar el título del modal
  document.getElementById("modalTitle").innerText = titulo;

  // Asignar el contenido del modal (puede ser texto adicional)
  document.getElementById("modalBody").innerHTML = contenido;

  // Mostrar la imagen en el modal
  const modalImagen = document.getElementById("modalImagen");
  if (imagen) {
    modalImagen.src = imagen; // Asignar la URL de la imagen al atributo src
    modalImagen.style.display = "block"; // Asegurarse de que la imagen esté visible
  } else {
    modalImagen.style.display = "none"; // Si no hay imagen, ocultar el elemento de la imagen
  }

  // Mostrar el modal utilizando Bootstrap
  new bootstrap.Modal(document.getElementById("detalleModal")).show();
}
