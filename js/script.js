// ===========================
// MENU BURGER JQUERY : OUVERTURE ET FERMETURE
// ===========================


// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
    // Sélection du bouton burger et de la liste de navigation principale
    const burger = document.getElementById('burger-menu');
    const navUl = document.querySelector('.main-nav ul');

    // Vérifie que les éléments existent avant d'ajouter les événements
    if (burger && navUl) {
        // Au clic sur le burger, ouvrir/fermer le menu
        burger.addEventListener('click', () => {
            navUl.classList.toggle('open'); // Ajoute ou retire la classe 'open' sur le menu
            // Change l'icône du burger selon l'état du menu
            burger.src = navUl.classList.contains('open')
                ? 'assets/img/close.png'
                : 'assets/img/burger.png';
        });

        // Ferme le menu si on repasse en mode desktop lors d'un redimensionnement
        window.addEventListener('resize', () => {
            if (window.innerWidth > 600) {
                navUl.classList.remove('open'); // Retire la classe 'open'
                burger.src = 'assets/img/burger.png'; // Remet l'icône burger
            }
        }); 
    } else {
        // Affiche une erreur si les éléments ne sont pas trouvés
        console.error("L'élément burger ou nav n'a pas été trouvé");
    }

// ===========================
// MODALE JQUERY : OUVERTURE ET FERMETURE
// ===========================

    // Gestion de la modale pour les liens .open-modal
    document.querySelectorAll('.open-modal').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            fetch(this.dataset.md)
                .then(res => res.text())
                .then(md => {
                    document.getElementById('modal-body').innerHTML = marked.parse(md);
                    document.getElementById('modal-jquery').classList.add('show'); // Affiche la modale
                });
        });
    });

    // Fermeture de la modale au clic sur la croix
    document.querySelector('.close-modal').onclick = function() {
        document.getElementById('modal-jquery').classList.remove('show');
    };

    // Fermeture de la modale si on clique en dehors du contenu
    document.getElementById('modal-jquery').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
});