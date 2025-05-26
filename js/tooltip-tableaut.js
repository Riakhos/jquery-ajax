// Gestion globale des infobulles personnalisées pour tous les éléments .col[data-code]

// Affiche la tooltip au survol d'un élément .col[data-code]
document.addEventListener('mouseover', function(e) {
    // Recherche l'élément .col[data-code] le plus proche du curseur
    const el = e.target.closest('.col[data-code]');
    // Si aucun élément ou si la tooltip existe déjà, on ne fait rien
    if (!el || el._tooltip) return;

    // Création de la div tooltip
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip-code';
    // Remplit la tooltip avec la description et le code JS
    tooltip.innerHTML = `<strong>Description :</strong> ${el.getAttribute('data-description')}<br>
<strong>Code :</strong><br><code>${el.getAttribute('data-code')}</code>`;

    // Style de la tooltip
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#222';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '8px 12px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.zIndex = 1000;
    tooltip.style.whiteSpace = 'pre-line';
    tooltip.style.opacity = 1;

    // Ajoute la tooltip au DOM pour pouvoir calculer sa taille
    document.body.appendChild(tooltip);

    // Calcule la position de la tooltip par rapport à l'élément survolé
    const rect = el.getBoundingClientRect();
    tooltip.style.left = (rect.left + window.scrollX + rect.width/2 - tooltip.offsetWidth/2) + 'px';
    tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight - 10) + 'px';

    // Stocke la référence à la tooltip sur l'élément pour pouvoir la retirer plus tard
    el._tooltip = tooltip;
});

// Masque et supprime la tooltip quand la souris quitte l'élément
document.addEventListener('mouseout', function(e) {
    const el = e.target.closest('.col[data-code]');
    if (el && el._tooltip) {
        el._tooltip.remove();
        el._tooltip = null;
    }
});