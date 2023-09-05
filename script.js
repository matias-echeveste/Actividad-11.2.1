        // Obtén una referencia al formulario
        const formulario = document.getElementById('registroForm');

        // Agrega un evento de escucha para el evento de envío del formulario
        formulario.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

            // Obtiene los valores de los campos del formulario
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;

            // Crea un objeto con los datos del formulario
            const datos = {
                nombre,
                apellido,
                fechaNacimiento
            };

            // Realiza una solicitud POST a la URL especificada con los datos en formato JSON
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });