// const collection = [
// 	{prenom: 'Richard', age: '43', ville: 'Argenteuil'},
// 	{prenom: 'Mathéo', age: '35', ville: 'Paris'},
// { prenom: "Alice", age: 25, ville: "Paris" },
// { prenom: "Bob", age: 30, ville: "Lyon" },
// { prenom: "Claire", age: 22, ville: "Marseille" },
// { prenom: "David", age: 28, ville: "Nice" },
// { prenom: "Emma", age: 35, ville: "Bordeaux" }
// ];
// collection.forEach(element => {
// 	document.getElementById('collection').innerHTML += 
// 	// `<p>Prénom: ${element.prenom} <br> Age: ${element.age} <br> Ville: ${element.ville}</p>`;
// 	`<p>${Object.values(element)}</p>`;
// });

const collection = [
	{ prenom: 'Richard', age: '43', ville: 'Argenteuil' },
	{ prenom: 'Mathéo', age: '35', ville: 'Paris' },
	{ prenom: "Alice", age: 25, ville: "Paris" },
	{ prenom: "Bob", age: 30, ville: "Lyon" },
	{ prenom: "Claire", age: 22, ville: "Marseille" },
	{ prenom: "David", age: 28, ville: "Nice" },
	{ prenom: "Emma", age: 35, ville: "Bordeaux" }
];

// document.getElementById('collection').innerHTML = collection
// 	// map() génère un tableau de chaînes HTML pour chaque élément.
// 	.map(element => `
// 		<div class="col">
// 			<p>
// 				Prénom: ${element.prenom} <br>
// 				Age: ${element.age} <br>
// 				Ville: ${element.ville}
// 			</p>
// 		</div>`)
// 	//join('') fusionne ce tableau en une seule chaîne sans séparation
// 	.join('');

// On divise le tableau en sous-tableaux de 3 éléments chacun
let rows = [];

// On utilise une boucle for pour parcourir le tableau par pas de 3
for (let i = 0; i < collection.length; i += 3) {
    rows.push(collection.slice(i, i + 3));
}

// Fonction pour générer la description et le code pour chaque personne
function getDescription(person) {
    return `Afficher les infos de ${person.prenom} (${person.ville})`;
}
function getCode(person) {
    return `console.log('${person.prenom} sélectionné (${person.ville})');`;
}

// Fonction utilitaire pour échapper le HTML
function escapeHtml(str) {
    return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") // tabulation → 4 espaces insécables
        .replace(/ {2}/g, "&nbsp;&nbsp;"); // double espace → 2 espaces insécables
}

// Description et code général pour la collection
const generalDescriptionCollection = "Afficher toutes les personnes de la collection";
const generalCodeRawCollection = 
`let html2 = rows.map(row =>
    \`<div class="row">
        \${row.map(element => 
            \`<div class="col"
                data-description="\${getDescription(element)}"
                data-code="\${getCode(element)}">
                <p>
                    Prénom: \${element.prenom} <br>
                    Age: \${element.age} <br>
                    Ville: \${element.ville}
                </p>
            </div>\`
        )
        .join('')}
    </div>\`
).join('');`;

// Génération de la div générale
const generalDivCollection = `
    <div class="general-info">
        <strong>Description générale :</strong> ${generalDescriptionCollection}<br>
        <strong>Code général :</strong><br>
        <pre style="white-space:pre;"><code>${escapeHtml(generalCodeRawCollection)}</code></pre>
    </div>
`;

// On génère le HTML pour chaque sous-tableau
let html2 = rows.map(row =>
    `<div class="row">
        ${row.map(element => `
            <div class="col"
                data-description="${getDescription(element)}"
                data-code="${getCode(element)}">
                <p>
                    Prénom: ${element.prenom} <br>
                    Age: ${element.age} <br>
                    Ville: ${element.ville}
                </p>
            </div>
        `).join('')}
    </div>`
).join('');

// On insère la div générale + le HTML généré dans l'élément avec l'id 'collection'
document.getElementById('collection').innerHTML = generalDivCollection + html2;