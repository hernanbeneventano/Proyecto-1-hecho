class Activity {
    constructor(id, title, description, imgUrl){
        this.id=id;
        this.title=title;
        this.description=description;
        this.imgUrl=imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities=[];
    }
    
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl) {
        const id = this.activities.length + 1;
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
        return newActivity;
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('actividad-form');
    const actividadesList = document.getElementById('actividades-list');
    const repository = new Repository();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('titulo').value;
        const description = document.getElementById('descripcion').value;
        const imgUrl = document.getElementById('imagen-url').value;

        const newActivity = repository.createActivity(title, description, imgUrl);

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = newActivity.imgUrl;
        img.alt = `Imagen de ${newActivity.title}`;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const h2 = document.createElement('h2');
        h2.textContent = newActivity.title;

        const p = document.createElement('p');
        p.textContent = newActivity.description;

        cardContent.appendChild(h2);
        cardContent.appendChild(p);
        card.appendChild(img);
        card.appendChild(cardContent);

        actividadesList.appendChild(card);

        form.reset();
    });
});

