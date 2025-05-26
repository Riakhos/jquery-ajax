$(document).ready( () => {
	//* Fonction pour afficher un article
	const generateArticleHTML = (article) => { //* On génère le HTML ce qui rend le code principal plus lisible
		const imageSrc = article.picture?.[0]?.img || 'default.jpg'; //* Utilisation du chaînage optionnel

		return `
			<div id="articleContainer" class="d-flex justify-content-center align-items-center">
				<div class="card h-100 shadow-sm">
					<img src="${imageSrc}" class="card-img-top" alt="Image de ${article.name}">
					<div class="card-body">
						<h5 class="card-title"><strong>${$('<div>').text(article.name).html()}</strong></h5>
						<p class="card-text"><strong>Catégorie :</strong> ${$('<div>').text(article.category).html()}</p>
						<p class="card-text"><strong>Marque :</strong> ${$('<div>').text(article.brand).html()}</p>
						<p class="card-text"><strong>Prix :</strong> ${$('<div>').text(article.price).html()}€</p>
						<p class="card-text"><strong>Description :</strong> ${$('<div>').text(article.content).html()}</p>
						<p><strong>Stock : </strong> ${$('<div>').text(article.stock).html()}</p>
					</div>
					<div class="card-footer text-muted">
						<button type="button" class="btn btn-primary w-100 mb-2" id="updateArticle">Modifier cet article</button>
						<button type="button" class="btn btn-danger w-100 mb-2" id="deleteArticle">Supprimer cet article</button>
					</div>
				</div>
			</div>
		`;
	};

	//* Récupère l'ID de l'article depuis l'URL
	const articleId = new URLSearchParams(window.location.search).get('id');

	console.log(articleId);

	//* Requête AJAX pour obtenir les articles
	$.ajax({
		type: "GET",
		url: `https://richard.bonnegent.fr/jquery-ajax/api/article/get`,
		cache: false, //* Désactive le cache pour avoir des données à jour
		success: (response) => {
			console.log(response);
			if (Array.isArray(response)) {

				//* Filtrer l'article correspondant à l'ID
				const article = response.find(item => item._id === articleId);

				if (article) {
					//* Générer et afficher le HTML pour cet article uniquement
					const articleHTML = generateArticleHTML(article);
					$('#article').html(articleHTML);

					//? Ajout de l'événement de suppression
                    $('#deleteArticle').on('click', () => {

						//* Affiche une fenêtre de confirmation avant de supprimer l'article					
						if (window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {

							//* Requête AJAX pour supprimer l'article
							$.ajax({
								type: "DELETE",  //* Utilisation de la méthode DELETE pour supprimer
								url: `https://richard.bonnegent.fr/jquery-ajax/api/article/delete/${article._id}`,  //* Remplacement de :idArticle par l'ID réel
								success: () => {
									alert("Article supprimé avec succès!");
									//* Rediriger l'utilisateur vers la liste des articles ou la page d'accueil
									window.location.href = "../index.html";  //* Remplacez "index.html" par la page où vous souhaitez rediriger
								},
								error: (xhr, status, error) => {
									console.error(`Erreur AJAX lors de la suppression: ${error}`);
									alert("Une erreur est survenue lors de la suppression de l'article.");
								}
							});							
						} else {
							//* L'utilisateur a annulé la suppression, on ne fait rien
							console.log("Suppression annulée.");
						}
					});

					//? Ajout de l'évènement de mise à jour
					$('#updateArticle').on('click', () => {
						//* Rediriger l'utilisateur vers la page de modification de l'article
                        window.location.href = `../update/update-article.html?id=${article._id}`;
					})
				} else {
					console.warn("Aucun article trouvé avec cet ID");
					$('#article').html("<p>Aucun article trouvé</p>");
				}
			} else {
				console.warn("Réponse inattendue du serveur", response);
			}
		},
		error: (xhr, status, error) => {
			console.error(`Erreur Ajax: ${error} (${status})`);
			alert("Impossible de charger l'article, veuillez réessayer plus tard.");
		}
	});
});