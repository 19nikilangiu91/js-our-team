// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membriTeam = [
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

console.log(membriTeam);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

// Andiamo a creare un ciclo for

for(let i = 0; i < membriTeam.length; i++){

    let membroIesimo = membriTeam[i];
    console.log(membroIesimo);
}