$(document).ready(() => {
    const articleId = new URLSearchParams(window.location.search).get('id');
    console.log(articleId); // Vérifie que l'ID est correct

    // Récupère les données de l'article et remplit le formulaire
    $.ajax({
        type: "GET",
        url: `http://localhost:8000/api/article/get/${articleId}`,
        success: (response) => {
            if (response) {
                $('#name').val(response.name);
                $('#category').val(response.category);
                $('#brand').val(response.brand);
                $('#price').val(response.price);
                $('#content').val(response.content);
                $('#stock').val(response.stock);
                $('#img').val(response.picture[0].img);
            } else {
                alert('Article introuvable.');
            }
        },
        error: (xhr, status, error) => {
            console.error(`Erreur Ajax: ${error} (${status})`);
            alert("Impossible de charger l'article pour la modification.");
        }
    });

    // Gestion de la soumission du formulaire pour la mise à jour de l'article
    $('#updateForm').on('submit', (event) => {
        event.preventDefault(); // Empêche la soumission classique du formulaire
        
        // Récupère les données du formulaire
        const articleDataForm = {
            name: $('#name').val(),
            category: $('#category').val(), // Corrigé de $('#categorie') à $('#category')
            brand: $('#brand').val(),
            price: parseFloat($('#price').val()),
            content: $('#content').val(),
            stock: parseInt($('#stock').val()),
            online: $('#online').is(':checked'),
            picture: [
                {
                    img: $('#img').val()
                }
            ]
        };

        // Envoie les données via une requête AJAX pour mettre à jour l'article
        $.ajax({
            url: `http://localhost:8000/api/article/update/${articleId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(articleDataForm),
            success: (response) => {
                console.log(`Succès mise à jour : ${response}`);
                window.location.href = `../detail/detail-article.html?id=${articleId}`;
            },
            error: (xhr, status, error) => {
                console.error(`Erreur lors de la mise à jour de l'article : ${error}`);
                alert("Une erreur est survenue lors de la mise à jour de l'article.");
            }
        });
    });
});
