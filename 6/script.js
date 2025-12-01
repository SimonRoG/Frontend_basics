function download() {
	const statusDiv = document.getElementById("status");
	const usersDiv = document.getElementById("users");
	usersDiv.innerHTML = "";
	let promises = [];
	for (let i = 0; i < 5; i++)
		promises.push(fetch('https://randomuser.me/api')
			.then(response => response.json()));

	Promise.all(promises)
		.then(results => {
			statusDiv.textContent = "success!";
			results.forEach(data => {
				if (data && data.results && data.results.length > 0) {
					const user = data.results[0];
					const { picture, cell, location } = user;
					const { coordinates, postcode, country } = location;
					usersDiv.innerHTML += `
					<div class="user">
						<img src="${picture.large}" alt="User Picture" />
						<p>Cell: ${cell}</p>
						<p>Coordinates: ${coordinates.latitude}, ${coordinates.longitude}</p>
						<p>Postcode: ${postcode}</p>
						<p>Country: ${country}</p>
					</div>`;
				}
			});
		})
		.catch(error => {
			statusDiv.textContent = "error!";
			console.log(error);
		});
}