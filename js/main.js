// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Andiamo a selezionare il nostro "container-membri", che conterrà il nostro "membriTeamArrey".

let containerMembri = document.getElementById("container-membri");
console.log(containerMembri);

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membriTeamArrey = [
    {
        "nome" : "Wayne Barnett",
        "role" : " Founder & CEO",
        "image" : "image",
    },
    {
        "nome" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "image",
    },
    {
        "nome" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "image",
    },
    {
        "nome" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "image",
    },
    {
        "nome" : "Scott Estrada",
        "role" : "Developer",
        "image" : "image",
    },
    {
        "nome" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "image",
    },
];

// console.log(membriTeam);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

// Andiamo a creare un ciclo "for".

for(let i = 0; i < membriTeamArrey.length; i++){

    let membroIesimo = membriTeamArrey[i];

    for(let chiave in membroIesimo){
        console.log(`${chiave} ${membroIesimo[chiave]}`);
    }
}