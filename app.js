// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let nombre = input.value.trim(); // Eliminar espacios en blanco

            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }

            amigos.push(nombre); // Agregar al array
            actualizarLista(); // Actualizar lista en la pantalla
            input.value = ""; // Limpiar el campo
        }

        function actualizarLista() {
            const lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpiar la lista antes de actualizar

            amigos.forEach(amigo => {
                let li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length < 2) {
                alert("Debe haber al menos 2 participantes para el sorteo.");
                return;
            }

            let resultado = amigos[Math.floor(Math.random() * amigos.length)];
            mostrarSorteo(resultado);
        }

        function mostrarSorteo(resultado) {
            let resultadoElemento = document.getElementById("resultado");
            resultadoElemento.innerHTML = ""; // Limpiar antes de mostrar

            let li = document.createElement("li");
            li.textContent = `Amigo secreto: ${resultado}`;
            resultadoElemento.appendChild(li);
            amigos=[]
            lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";

        }