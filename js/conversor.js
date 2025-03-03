document.addEventListener("DOMContentLoaded", function () {
    const conversionInput = document.getElementById("conversion");

    async function obtenerTasaCambio() {
        try {
            const respuesta = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            const datos = await respuesta.json();
            const tasaEuro = datos.rates.EUR;  // Obtiene la tasa de cambio de USD a EUR
            
            conversionInput.value = `1 EUR = ${ (1 / tasaEuro).toFixed(4) } USD`; 
        } catch (error) {
            console.error("Error obteniendo la tasa de cambio:", error);
            conversionInput.value = "Error al cargar";
        }
    }

    obtenerTasaCambio();
});
