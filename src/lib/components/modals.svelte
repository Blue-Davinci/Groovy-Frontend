<!-- Modals.svelte -->
<script>
	//import { slide } from 'svelte/transition';
	//import { quintOut } from 'svelte/easing';
	import { getChangedFields } from '$lib/utils/utils.js';
	import { invalidateAll } from '$app/navigation';
	export let showModal = false;
	export let movie = {};
	export let close = () => {};
	export let processAsUpdate = true;
	export let setToastHelper = () => {};
	// normal vars
	//variable for our updating/saving operation
	let isLoading = false;

	// This is a copy of the movie data for the form inputs
	let formMovie = { ...movie };

	async function sendData(url, method, data) {
		//artificial delay for sim
		/*await new Promise((fulfil) => {
			setTimeout(fulfil, 5000);
		});*/
		const response = await fetch(url, {
			method: method,
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			const responseData = await response.json();
			return responseData;
		} else {
			const errorData = await response.json();
			console.log('Error recieveing result: ', errorData.error);
			return errorData;
		}
	}

	async function handleSubmit() {
		isLoading = true;
		const changes = getChangedFields(movie, formMovie);
		const url = `/api/movies?id=${movie.id}`;
		const method = 'PATCH';
		if (processAsUpdate) {
			if (Object.keys(changes).length === 0) {
				console.log('No fields have been changed');
			} else {
				console.log('Fields changed, Updating...');
				const data = await sendData(url, method, changes);
				console.log('Recieved data: ', data);
				if (!data.error) {
					setToastHelper(true, 'Update operation was successful', data);
				} else {
					setToastHelper(false, `Update Operation failed with ${data.error}`, data);
				}
			}
		} else {
			//init a fake dummy object to still get our genre arrays and change
			// the data
			const movie = {
				url: '',
				title: '',
				runtime: '',
				year: 1,
				genres: '',
				description: ''
			};
			let changes = getChangedFields(movie, formMovie);
			const url = '/api/movies';
			const method = 'POST';
			//console.log('Initial Data: ', formMovie);
			const data = await sendData(url, method, changes);
			//console.log('Creating movie, not updating: ', data);
			if (!data.error) {
				setToastHelper(true, 'Movie was added successful', data.movie);
			} else {
				setToastHelper(false, `Movie addition failed with ${data.error}`, movie);
			}
		}
		isLoading = false;
		close();
		invalidateAll();
	}
</script>

{#if showModal}
	<div class="modal">
		<button class="close-button" on:click={close}>X</button>
		<h2 class="modal-title">Edit Movie</h2>
		<form on:submit={handleSubmit}>
			<!-- Add the class "input-field" to each input and textarea -->
			<div class="image-container">
				<img
					src={formMovie.url ||
						'https://media.themoviedb.org/t/p/original/svYyAWAH3RThMmHcCaJZ97jnTtT.jpg'}
					alt={formMovie.title || 'Default Title'}
					class="movie-image"
					on:error={(e) => (e.target.src = 'default-image-url')}
				/>
				<input
					class="input-field url-input"
					name="movieurl"
					type="url"
					bind:value={formMovie.url}
					placeholder="Image URL"
					required
				/>
			</div>
			<input
				class="input-field"
				name="movietitle"
				type="text"
				bind:value={formMovie.title}
				placeholder="Movie Title"
				required
			/>
			<input
				class="input-field"
				name="movieruntime"
				type="text"
				bind:value={formMovie.runtime}
				placeholder="Runtime"
				required
			/>
			<input
				class="input-field"
				name="movieyear"
				type="number"
				bind:value={formMovie.year}
				placeholder="Release Date"
				required
			/>
			<input
				class="input-field"
				name="moviegenres"
				type="text"
				bind:value={formMovie.genres}
				placeholder="Genres (comma separated)"
				required
			/>
			<textarea
				class="input-field"
				name="moviedescription"
				bind:value={formMovie.description}
				placeholder="Description"
				required
			></textarea>
			<button type="submit" disabled={isLoading}>
				{#if isLoading}
					<img src="/tube-spinner1.svg" alt="Processing" />
					Processing...
				{:else}
					Submit
				{/if}
			</button>
		</form>
	</div>
{/if}

<style>
	.modal {
		border: 2px solid #00c6a7;
		background-color: #303030;
		padding: 60px 20px 20px 20px; /* Add more padding to the top */
		border-radius: 10px;
		max-height: 90vh;
		max-width: 600px;
		margin: auto;
		position: relative;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
		z-index: 1001;
		overflow: auto;
	}

	.close-button {
		position: absolute;
		top: 0;
		right: 10px;
		background: none;
		border: none;
		color: #f0f0f0;
		font-size: 1.5em;
		transition: color 0.2s;
	}

	.close-button:hover {
		color: #ff0000; /* Change color on hover */
	}

	.close-button:active {
		color: #00ff00; /* Change color on click */
	}

	.modal-title {
		text-align: center;
		color: #f0f0f0;
		margin-bottom: 30px;
	}
	.input-field {
		margin-bottom: 30px;
		background-color: #303030;
		color: #f0f0f0;
		border: 1px solid #f0f0f0;
		transition: border-color 0.3s;
	}
	.input-field:focus {
		border-color: #00ff00; /* Change border color on focus */
	}
	/* URL Input */
	.url-input {
		font-size: 14px; /* Adjust as needed */
		height: 30px; /* Adjust as needed */
	}

	/* button for submit*/
	button {
		background-color: #00c6a7; /* Change button background color */
		color: hsl(0, 4%, 5%); /* Change button text color */
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s; /* This will animate the background color change */
	}

	button:hover {
		background-color: #008c7a; /* Darken the background color on hover */
	}
	button img {
		max-width: 20px; /* Limit the maximum width */
		max-height: 20px;
	}

	/* IMG */

	.image-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}

	.movie-image {
		width: 200px; /* Adjust as needed */
		height: 200px; /* Adjust as needed */
		object-fit: cover; /* This will ensure that the image covers the entire area of the img element without distorting the aspect ratio */
		border-radius: 50%; /* This will make the image rounded */
		margin-bottom: 10px;
	}
</style>
