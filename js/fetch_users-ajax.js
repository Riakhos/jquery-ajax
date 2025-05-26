$.ajax({
	type: "GET",
	url: "https://jsonplaceholder.typicode.com/users",
	success: (response) => {
		console.log(response);

		// Regrouper les utilisateurs deux par deux pour affichage en deux colonnes
		let rows = [];
		for (let i = 0; i < response.length; i += 2) {
			rows.push(response.slice(i, i + 2));
		}
		const html = rows.map(row =>
			`<div class="users-row">
				${row.map(element => `
					<div class="user-block">
						<p>Username : ${element.username}</p>
						<p>Name : ${element.name}</p>
						<p>Email : ${element.email}</p>
						<p>Phone : ${element.phone}</p>
						<p>Website : ${element.website}</p>
						<p>Zipcode : ${element.address.zipcode}</p>
						<p>Street : ${element.address.street}</p>
						<p>Company : ${element.company.name}</p>
					</div>
				`).join('')}
			</div>`
		).join('');

		$('#users-fetch').html(
            '<h3>Affichage avec map (2 colonnes) :</h3>' + html
        );
	},
	error: (xhr, status, error) => {
		console.error(`Erreur Ajax ${error}`);
	}
});