document.getElementById("cargarEpisodios").addEventListener("click", function() {
    const episodios = [
        "Episodio 1 - El origen de la maldición",
        "Episodio 2 - El ataque de la maldición",
        "Episodio 3 - El camino del hechicero",
        "Episodio 4 - El duelo de hechiceros"
    ];

    const listaEpisodios = document.getElementById("listaEpisodios");

    // Limpiar la lista antes de agregar nuevos elementos
    listaEpisodios.innerHTML = "";

    episodios.forEach(function(episodio) {
        let li = document.createElement("li");
        li.textContent = episodio;
        listaEpisodios.appendChild(li);
    });
});
