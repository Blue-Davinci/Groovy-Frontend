<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import Modals from '$lib/components/modals.svelte';
	import Confirmation from '$lib/components/confirmation.svelte';
	import { setToast } from '$lib/utils/utils.js';
	export let data;
	let showModal = false;
	let showConfirmation = false;
	let success = false;
	let processAsUpdate = true;

	let confirmationTitle = 'Deletion Confirmation';
	let confirmationMessage = 'Are you sure you want to delete this movie?';

	$: movie = data.movie;
	function goBack() {
		goto('/movies',{
			noscroll: false,
		});
	}
	function showEditModal() {
		showModal = true;
	}
	// this helper function will be passed as an anonymous function
	// It has the new movie attribute, if the update was a success
	// we just set the current movie ds to the new one for quick
	// update previews.
	function setToastHelper(status, message, newmovie) {
		if (status) {
			data.movie = newmovie.movie;
		}
		setToast(status, message);
	}
	// for our delete component
	async function handleConfirm(event) {
		//console.log(event.detail.accepted ? 'Accepted' : 'Declined');
		showConfirmation = false;
		if (event.detail.accepted) {
			console.log('Obtained the event fire, proceeding to delete');
			const data = await deleteMovie();
			if (!data.error) {
				setToast(true, 'Movie was deleted successfully', 4000);
				//since we are also deleting a movie here, we check if a deletion
				//operation is happening. When a delete response is returned
				// the json only has a .message object in it.
				//If it doesn't then we know it's a normal update and just
				//update the movie object.
				if (!data.message) {
					data.movie = data;
				}
				/*await new Promise((fulfil) => {
					setTimeout(fulfil, 2000);
				});*/
				goBack();
			} else {
				setToast(false, `Movie deletion failed with ${data.error}`, movie);
			}
		}
	}
	function openConfirmation() {
		showConfirmation = true; // Show the confirmation message when the button is clicked
	}
	//set values to false for any visibility
	function close() {
		showModal = false;
		showConfirmation = false;
	}
	//process our deletion request
	async function deleteMovie() {
		const url = `/api/movies?id=${movie.id}`;
		const method = 'DELETE';
		const response = await fetch(url, {
			method: method
		});
		if (response.ok) {
			const responseData = await response.json();
			return responseData;
		} else {
			const errorData = await response.json();
			return errorData;
		}
	}
</script>

<svelte:head>
	<title>Movie Info • Groovy</title>
</svelte:head>
<div
	class="movie-details"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
>
	<nav class="movie-details">
		<a href="/movies" class="nav-link">Back To Movies</a>
	</nav>
	{#if showModal}
		<div
			class="modal-container"
			transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
		>
			<Modals {showModal} {movie} {close} {processAsUpdate} {setToastHelper} />
		</div>
	{/if}
	{#if showConfirmation}
		<Confirmation {confirmationTitle} {confirmationMessage} on:confirm={handleConfirm} />
	{/if}
	<div class="img-container">
		<img src={movie.url} alt={movie.title} />
		<!-- Button overlay for our editing options-->
		<div class="overlay">
			<button type="submit" class="icon-button" on:click={showEditModal}>
				<img class="icon" src="/edit.svg" alt="edit" />
			</button>
			<button type="submit" class="icon-button" on:click={openConfirmation}>
				<img class="icon" src="/delete.svg" alt="delete" />
			</button>
		</div>
	</div>
	<div class="txt-container">
		<h1>{movie.title}</h1>
		<p class="overview">{movie.description}</p>
		<p>
			<span>Release Date: </span>
			{movie.year} <br />
			<span>Runtime: </span>
			{movie.runtime} <br />
			<span>Version: </span>
			{movie.version} <br />
			<span>Genres: </span>
			{movie.genres.join(', ')} <br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}

	/* For our navigation element */
	nav.movie-details {
		margin-top: 4.5rem;
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
	}
	.nav-link {
		display: inline-block;
		background-color: #00c6a7;
		color: #232323;
		text-decoration: none;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.nav-link:hover {
		background-color: #008d76;
	}

	/* For our image container */
	.img-container {
		position: relative;
		width: 100%;
		height: 500px;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
		image-rendering: auto;
	}
	.img-container:hover .overlay {
		opacity: 1;
	}
	.movie-details {
		margin: 2rem 20%;
		margin-top: 1rem;
	}

	/* For our overlay */
	.overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		color: #f1f1f1;
		transition: opacity 0.5s ease;
		opacity: 0;
		color: white;
		font-size: 20px;
		padding: 20px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-button {
		background: none;
		border: none;
		padding: 10px;
		margin: 0 20px;
		width: 30px;
		height: 30px;
		transition:
			transform 0.3s ease,
			border 0.3s ease; /* added transition for border */
		box-sizing: content-box; /* ensure padding is not included in width and height */
	}

	.icon {
		width: 100%;
		height: 100%;
		filter: invert(100%);

		border-radius: 50%;
	}
	.icon-button:hover {
		transform: scale(1.1); /* hover effect */
		border: 2px solid #008d76; /* highlight border */
	}

	.icon-button:active .icon {
		transform: scale(0.9);
	}


</style>
