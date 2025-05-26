$(document).ready(() => {
	//* Fonction pour afficher un article
	const generateArticleHTML = (article) => { //* On génère le HTML ce qui rend le code principal plus lisible
		const imageSrc = article.picture?.[0]?.img || 'default.jpg'; //* Utilisation du chaînage optionnel
		
		return `
			<div class="col-12 col-md-6 col-lg-4 mb-4"> <!-- Colonnes responsive -->
				<div class="card h-100 shadow-sm">
					<img src="${imageSrc}" class="card-img-top" alt="Image de ${article.name}">					
					<div class="card-body">
						<h5 class="card-title"><strong>${$('<div>').text(article.name).html()}</strong></h5>
						<p class="card-text"><strong>Marque :</strong> ${$('<div>').text(article.brand).html()}</p>
						<p class="card-text"><strong>Prix :</strong> ${$('<div>').text(article.price).html()}€</p>
					</div>
					<div class="card-footer text-muted">						
						<a href="detail/detail-article.html?id=${article._id}" class="btn btn-primary w-100">Voir Détail</a>
					</div>
				</div>
			</div>
		`;
	};

	//* Requête AJAX pour obtenir les articles
	$.ajax({
		type: "GET",
		url: "https://richard.bonnegent.fr/jquery-ajax/api/article/get",
		cache: false, //* Désactive le cache pour avoir des données à jour
		success: (response) => {
			if (Array.isArray(response)) {
				const articleHTML = response.map(generateArticleHTML).join('');
				$('#articleList').html(articleHTML);
			} else {
				console.warn("Réponse inattendue du serveur", response);
			}
		},
		error: (xhr, status, error) => {
			console.error(`Erreur Ajax: ${error} (${status})`);
			alert("Impossible de charger les articles, veuillez réessayer plus tard.");
		}
	});
});

// $(document).ready( () => {
// 	$.ajax({
// 		type: "GET",
// 		url: "http://localhost:8000/api/article/get",
// 		success: (articles) => {

// 			let articleElements = ''
// 			console.log(articles);

// 			articles.forEach(article => {
// 				articleElements+= `
// 					<a href="detail/detail-article.html?id=${article._id}">
// 						<img src="${article.picture[0].img}" width="200" alt="${article.name}">
// 					<p>${article.name} - ${article.brand} - ${article.price}€</p>
// 					</a>
// 				`
// 			});
// 			$('#articleList').html(articleElements)
// 		},
// 		error: (xhr, status, error) => {
// 			console.error(`Erreur Ajax ${error}`); // Affiche l'erreur dans la console
// 		}
// 	});	
// });