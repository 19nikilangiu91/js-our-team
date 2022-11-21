// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Andiamo a selezionare il nostro "container-membri", che conterrà il nostro "membriTeamArrey".

let containerMembri = document.getElementById("container-membri");
console.log(containerMembri);

// Andiamo a selezionare il nostro "output", per stampare le stesse informazioni su DOM sottoforma di stringhe.

let output = document.getElementById("output");

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membriTeamArrey = [
    {
        "nome" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        "nome" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "img/angela-caroll-chief-editor.jpg",
    },
    {
        "nome" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "img/walter-gordon-office-manager.jpg",
    },
    {
        "nome" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "img/angela-lopez-social-media-manager.jpg",
    },
    {
        "nome" : "Scott Estrada",
        "role" : "Developer",
        "image" : "img/scott-estrada-developer.jpg",
    },
    {
        "nome" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "img/barbara-ramos-graphic-designer.jpg",
    },
];

// console.log(membriTeam);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

// Andiamo a creare un ciclo "for".

for(let i = 0; i < membriTeamArrey.length; i++){

    let membroIesimo = membriTeamArrey[i];

    console.log(membroIesimo);

    // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    let nuovaCarta = [
        `
        <h1 id="output">${membroIesimo.nome}, ${membroIesimo.role}, ${membroIesimo.image}</h1>

        `
    ]

    containerMembri.innerHTML += nuovaCarta;
}
