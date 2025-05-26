$('#postForm').on('submit', (event) => {
	event.preventDefault() // Empêche le rechargement de la page.

	//* Récupération des valeurs du formulaire
	const articleDataForm = {
		name: $('#name').val(),
		category: $('#category').val(),
		brand: $('#brand').val(),
		price: parseFloat($('#price').val()),
		content: $('#content').val(),
		stock: parseInt($('#stock').val()),
		online: $('#online').is(':checked'),
		picture: [
			{
				img: $('#img').val(),
				// img1: $('#img1').val(),
				// img2: $('#img2').val(),
				// img3: $('#img3').val(),
				// img4: $('#img4').val(),
			}
		]
	}
	//* Envoi des données via une requête Ajax
	$.ajax({
		type: "POST",
		url: "http://localhost:8000/api/article/add",
		data: JSON.stringify(articleDataForm),
		contentType: "application/json",
		success: (response) => {
			console.log(`L'article ajouté avec succès : ${response}`);
		},
		error: () => {
			console.error(`Erreur lors de l'ajout de l'article ${error}`);
		}
	});
});
