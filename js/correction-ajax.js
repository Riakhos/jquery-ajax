$.ajax({
	url: "https://jsonplaceholder.typicode.com/users",
	type: "GET",
	success: (response) => {
		// Version 1 : forEach (lignes de 2 colonnes)
        let htmlForEach = '';
        for (let i = 0; i < response.length; i += 2) {
            htmlForEach += '<div class="users-row">';
            for (let j = i; j < i + 2 && j < response.length; j++) {
                const element = response[j];
                htmlForEach += `
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
                `;
            }
            htmlForEach += '</div>';
        }

        // Version 2 : map (lignes de 2 colonnes)
        let rows = [];
        for (let i = 0; i < response.length; i += 2) {
            rows.push(response.slice(i, i + 2));
        }
        const htmlMap = rows.map(row =>
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

        // Affichage des deux versions pour comparaison
        $('#users-correction').html(
            '<h3>Affichage avec forEach :</h3>' +
            htmlForEach +
            '<h3>Affichage avec map :</h3>' +
            htmlMap
        );
    },
	error: (xhr, status, error) => {
	  console.error(`Erreur Ajax ${error}`); // Affiche l'erreur dans la console
	},
});