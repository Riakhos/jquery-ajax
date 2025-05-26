// Sélectionne les éléments HTML pour afficher les données
const divCollection = document.getElementById("divCollection");
const divCollectionFor = document.getElementById("divCollectionFor");

// Tableau d'objets représentant des personnes
const personnes = [
    { prenom: 'Richard', age: '43', ville: 'Argenteuil' },
    { prenom: 'Mathéo', age: '35', ville: 'Paris' },
    { prenom: "Alice", age: 25, ville: "Paris" },
    { prenom: "Bob", age: 30, ville: "Lyon" },
    { prenom: "Claire", age: 22, ville: "Marseille" },
    { prenom: "David", age: 28, ville: "Nice" },
    { prenom: "Emma", age: 35, ville: "Bordeaux" }
];

// Fonction pour générer la description et le code pour chaque personne
function getDescription(personne) {
    return `Afficher les infos de ${personne.prenom}, ${personne.age} ans (${personne.ville})`;
}
function getCode(personne) {
    return `console.log('${personne.prenom} sélectionné, agé de ${personne.age} ans (${personne.ville})');`;
}

// Fonction utilitaire pour échapper le HTML
function escapeHtml(str) {
    return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace(/ {2}/g, "&nbsp;&nbsp;");
}

// Description et code général pour divCollection (forEach)
const descriptionForEach = "Afficher toutes les personnes avec forEach et infobulle personnalisée";
const codeForEach = 
`let html = '<div class="row">';
personnes.forEach((personne, index) => {
    html += \`
        <div class="col"
            data-description="\${getDescription(personne)}"
            data-code="\${getCode(personne)}">
            <p>
                Prénom : \${personne.prenom}, <br>
                Âge : \${personne.age}, <br>
                Ville : \${personne.ville}
            </p>
        </div>
    \`;
    if ((index + 1) % 3 === 0 && index !== personnes.length - 1) {
        html += '</div><div class="row">';
    }
});
html += '</div>';
divCollection.innerHTML = html;`;

// Génération des blocs avec description et code
const generalDivForEach = `
    <div class="general-info">
        <strong>Description générale :</strong> ${descriptionForEach}<br>
        <strong>Code utilisé :</strong><br>
        <pre style="white-space:pre;"><code>${escapeHtml(codeForEach)}</code></pre>
    </div>
`;

// Méthode 1 : Utilisation de forEach avec infobulle personnalisée
let html = '<div class="row">';
personnes.forEach((personne, index) => {
    html += `
        <div class="col"
            data-description="${getDescription(personne)}"
            data-code="${getCode(personne)}">
            <p>
                Prénom : ${personne.prenom}, <br>
                Âge : ${personne.age}, <br>
                Ville : ${personne.ville}
            </p>
        </div>
    `;
    if ((index + 1) % 3 === 0 && index !== personnes.length - 1) {
        html += '</div><div class="row">';
    }
});
html += '</div>';
divCollection.innerHTML = html;

// Description et code général pour divCollectionFor (for)
const descriptionFor = "Afficher toutes les personnes avec une boucle for et infobulle personnalisée";
const codeFor = 
`let htmlFor = '<div class="row">';
for(let i = 0; i < personnes.length; i++) {
    htmlFor += \`
    <div class="col"
        data-description="\${getDescription(personnes[i])}"
        data-code="\${getCode(personnes[i])}">
        <p>
            Prénom : \${personnes[i].prenom}, <br>
            Âge : \${personnes[i].age}, <br>
            Ville : \${personnes[i].ville}
        </p>
    </div>\`;
    if ((i + 1) % 3 === 0 && i !== personnes.length - 1) {
        htmlFor += '</div><div class="row">';
    }
}
htmlFor += '</div>';
divCollectionFor.innerHTML = htmlFor;`;

const generalDivFor = `
    <div class="general-info">
        <strong>Description générale :</strong> ${descriptionFor}<br>
        <strong>Code utilisé :</strong><br>
        <pre style="white-space:pre;"><code>${escapeHtml(codeFor)}</code></pre>
    </div>
`;

// Méthode 2 : Boucle for traditionnelle avec infobulle personnalisée
let htmlFor = '<div class="row">';
for(let i = 0; i < personnes.length; i++) {
    htmlFor += `
    <div class="col"
        data-description="${getDescription(personnes[i])}"
        data-code="${getCode(personnes[i])}">
        <p>
            Prénom : ${personnes[i].prenom}, <br>
            Âge : ${personnes[i].age}, <br>
            Ville : ${personnes[i].ville}
        </p>
    </div>`;
    if ((i + 1) % 3 === 0 && i !== personnes.length - 1) {
        htmlFor += '</div><div class="row">';
    }
}
htmlFor += '</div>';
divCollectionFor.innerHTML = htmlFor;

// Ajoute la description et le code avant chaque tableau
divCollection.innerHTML = generalDivForEach + divCollection.innerHTML;
divCollectionFor.innerHTML = generalDivFor + divCollectionFor.innerHTML;
