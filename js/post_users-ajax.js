$.ajax({
    type: "POST",
    url: "https://jsonplaceholder.typicode.com/users",
    data: JSON.stringify({
        name: 'Francis',
        email: 'francis@gmail.com'
    }),
    contentType: 'application/json',
    success: (response) => {
        console.log(response);
        $('#users-post').html(
			`<div class="users-row">
				<h3>Affichage du POST (utilisateur créé)</h3> +
				<div class="user-block">
					<p>Name : ${response.name}</p>
					<p>Email : ${response.email}</p>
					<p>ID (factice) : ${response.id}</p>
				</div>
            </div>`
        );
    },
    error: (xhr, status, error) => {
        $('#users-post').html(`<p style="color:red;">Erreur Ajax : ${error}</p>`);
        console.error(`Erreur Ajax : ${error}`);
    }
});