<script>
	export let movie;
    let id =1;
	let defaultimgurl =
		'https://media.themoviedb.org/t/p/original/svYyAWAH3RThMmHcCaJZ97jnTtT.jpg';
	let imageUrl;
	try {
		// Try to create a new URL object with movie.url
		// If movie.url is an invalid URL, this will throw an error
		new URL(movie.url);
		imageUrl = movie.url;
	} catch {
		// If an error was thrown, use defaultimgurl instead
		imageUrl = defaultimgurl;
	}
</script>


<div class="movie-card">
	<a href={`/movies/${movie.id}`}>
		<img src={imageUrl} alt={movie.title} />
	</a>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.year}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
		max-width: 500px;
	}
	h2 {
		font-size: 0.9rem;
	}

	P {
		font-size: 0.7rem;
	}
	.movie-card {
		display: flex;
		transition: box-shadow 0.3s ease-in-out;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
		padding-bottom: 0.8rem; /* add this line */
	}
	.movie-card:hover {
        box-shadow: 0 0 10px #00c6a7; /* add this line */
    }
</style>
