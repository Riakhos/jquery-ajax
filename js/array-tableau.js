console.log('test');
let fruits = ['Pomme', 'Banane', 'Fraise', 'Framboise', 'Pêche'];
console.log(fruits.length);

// Exemple de descriptions pour chaque fruit
let descriptions = {
    'Pomme': 'Un fruit croquant et sucré.',
    'Banane': 'Un fruit jaune riche en potassium.',
    'Fraise': 'Un petit fruit rouge et sucré.',
    'Framboise': 'Un fruit rouge composé de petites drupes.',
    'Pêche': 'Un fruit à la chair juteuse et à la peau veloutée.'
};

// Fonction utilitaire pour échapper le HTML
function escapeHtml(str) {
    return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace(/ {2}/g, "&nbsp;&nbsp;");
}

// Description et code général pour l'affichage des fruits
const generalDescription = "Afficher tous les fruits en lignes de 3 colonnes avec infobulle personnalisée";
const generalCodeRaw = `
    let htmlArray = '';
    for (let i = 0; i < fruits.length; i += 3) {
        htmlArray += '<div class="row">';
        htmlArray += fruits.slice(i, i + 3)
            .map(fruit => 
                \`<div class="col" 
                    data-description="\${descriptions[fruit] || ''}" 
                    data-code="console.log('\${fruit} sélectionné');">
                    <p>\${fruit}</p>
                </div>\`
            )
            .join('');
        htmlArray += '</div>';
    }
    document.getElementById('array').innerHTML = htmlArray;
`;

// Génération de la div générale
const generalDiv = `
    <div class="general-info">
        <strong>Description générale :</strong> ${generalDescription}<br>
        <strong>Code général :</strong><br>
        <pre style="white-space:pre;"><code>${escapeHtml(generalCodeRaw)}</code></pre>
    </div>
`;

// Affichage en lignes de 3 colonnes
let htmlArray = '';

for (let i = 0; i < fruits.length; i += 3) {
    htmlArray += '<div class="row">';
    htmlArray += fruits.slice(i, i + 3)
        .map(fruit => 
            `<div class="col" 
                data-description="${descriptions[fruit] || ''}" 
                data-code="console.log('${fruit} sélectionné');">
                <p>${fruit}</p>
            </div>`
        )
        .join('');
    htmlArray += '</div>';
}

// Affichage de la div générale + du tableau dans le document
document.getElementById('array').innerHTML = generalDiv + htmlArray;