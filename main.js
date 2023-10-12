document.addEventListener("DOMContentLoaded", function () {
    const playlist = document.getElementById("playlist");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");
    const fileInput = document.getElementById("fileInput");
    const abrirDocumento = document.querySelector("label[for='fileInput']");

    // Reproducir el video seleccionado cuando cambie la opción
    playlist.addEventListener("change", function () {
        const selectedVideo = playlist.value;
        videoSource.src = selectedVideo;
        videoPlayer.load(); // Recargar el reproductor de video
        videoPlayer.play(); // Reproducir el nuevo video
    });

    // Agregar archivos a la lista de reproducción
    abrirDocumento.addEventListener("click", function () {
        fileInput.click();
    });
    
    fileInput.addEventListener("change", function () {
        const selectedFiles = fileInput.files;
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const objectURL = URL.createObjectURL(file);

            // Crear una opción en el select para la lista de reproducción
            const option = document.createElement("option");
            option.value = objectURL;
            option.textContent = file.name;
            playlist.appendChild(option);
        }
    });
});