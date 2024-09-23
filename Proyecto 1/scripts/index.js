
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('actividad-form');
    const actividadesList = document.getElementById('actividades-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene la recarga

        console.log('Formulario enviado');

        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const imagenUrl = document.getElementById('imagen-url').value;

        console.log('Título:', titulo);
        console.log('Descripción:', descripcion);
        console.log('URL de Imagen:', imagenUrl);

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = imagenUrl;
        img.alt = `Imagen de ${titulo}`;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const h2 = document.createElement('h2');
        h2.textContent = titulo;

        const p = document.createElement('p');
        p.textContent = descripcion;

        cardContent.appendChild(h2);
        cardContent.appendChild(p);
        card.appendChild(img);
        card.appendChild(cardContent);

        actividadesList.appendChild(card);

        console.log('Tarjeta agregada');

        form.reset();
    });
});