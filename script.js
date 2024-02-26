document.addEventListener('DOMContentLoaded', function() {
    const entradaTexto = document.querySelector('.EntradaTexto');
    const salidaTexto = document.querySelector('.SalidaTexto');
    const botonCopiar = document.querySelector('.boton');

    entradaTexto.addEventListener('input', function() {
        // Obtener el texto de entrada
        const texto = entradaTexto.value.trim();
        
        // Verificar si el texto es encriptado o no
        if (esTextoEncriptado(texto)) {
            // Desencriptar el texto
            const textoDesencriptado = desencriptarTexto(texto);
            // Mostrar el texto desencriptado en el área de salida
            salidaTexto.value = textoDesencriptado;
        } else {
            // Encriptar el texto
            const textoEncriptado = encriptarTexto(texto);
            // Mostrar el texto encriptado en el área de salida
            salidaTexto.value = textoEncriptado;
        }
    });

    botonCopiar.addEventListener('click', function() {
        // Verificar si hay texto en el área de entrada
        if (entradaTexto.value.trim() === '') {
            swal('Oooopss!', 'Por favor, escribe algún texto antes de intentar copiar.', 'warning');
            return; // Detener la ejecución si no hay texto
        }
        
        // Seleccionar todo el texto en el área de salida
        salidaTexto.select();
        // Copiar el texto al portapapeles
        navigator.clipboard.writeText(salidaTexto.value)
            .then(() => {
                // Alerta al usuario que el texto ha sido copiado
                swal('¡Éxito!', '¡El texto se copió al portapapeles!', 'success');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
                swal('Error', 'No se pudo copiar el texto al portapapeles', 'error');
            });
    });

    function encriptarTexto(texto) {
        // Aplicar las reglas de encriptación        
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/a/g, 'ai');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');
        return texto;
    }

    function desencriptarTexto(texto) {
        // Aplicar las reglas de desencriptación
        texto = texto.replace(/ufat/g, 'u');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/enter/g, 'e');        
        return texto;
    }

    function esTextoEncriptado(texto) {
        // Verificar si el texto contiene palabras encriptadas
        return /ai|enter|imes|ober|ufat/.test(texto);
    }
});
