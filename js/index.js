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
                            <div class="card mb-3" onclick="mostrarModal('Vuelo ${tipo}', '${vuelo.imagen}','${vuelo.sla} <br> ${vuelo.aep} <br>Salida de ${vuelo.origen}: ${vuelo.horario_salida} <br> Llegada a ${vuelo.escala}: ${vuelo.llegada_escala} <br> Salida de ${vuelo.escala}: ${vuelo.salida_escala} <br> Llegada a ${vuelo.destino}: ${vuelo.horario_llegada} <br> ${vuelo.aep2} <br> ${vuelo.sla2}')">
                                <div class="card-body">
                                    <h5 class="card-title">Vuelo ${tipo}</h5>
                                    <p class="card-text">Origen: ${vuelo.origen} - Destino: ${vuelo.destino}</p>
                                </div>
                            </div>
                        </div>`;
    });

    // Mostrar alojamientos
    const alojamientoContainer = document.getElementById("alojamiento-container");
    viaje.alojamiento.forEach((aloja) => {
      alojamientoContainer.innerHTML += `
          <div class="col-md-4">
              <div class="card mb-3" onclick="mostrarModal('Alojamiento en ${aloja.ciudad}', '${aloja.imagen}', 'Check-in: ${aloja.check_in} <br> Check-out: ${aloja.check_out} <br> Noches: ${aloja.noches} <br> Ubicación: ${aloja.ubicacion} <br> <a href= ${aloja.link} target= ${aloja.target}>Link</a> <br> Precio: ${aloja.precio}')">
                <div class="card-body d-flex align-items-center">
                  <div class="flex-grow-1">
                      <h5 class="card-title">${aloja.ciudad}</h5>
                      <p class="card-text">${aloja.noches} noches <br> ${aloja.precio} total</p>
                  </div>
                  <div>
                      <img src="${aloja.imagen}" alt="${aloja.ciudad}" class="img-fluid rounded" style="width: 80px; height: 80px; object-fit: cover;">
                  </div>
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
                            <div class="card mb-3" onclick="mostrarModal('${dia.fecha} - ${dia.ciudad}', '${dia.imagen}','${dia.traslado} <br> ${dia.tiempo} <br> ${actividades}')">
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
