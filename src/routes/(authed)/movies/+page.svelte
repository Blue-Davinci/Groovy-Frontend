<script>
	//import { scrollPosition } from '$lib/store/store.js';
	//import { onMount, onDestroy, tick } from 'svelte';
	//import { afterUpdate } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Moviecard from '$lib/components/moviecard.svelte';
	import SearchMovie from '$lib/components/searchmovie.svelte';
	import { fly } from 'svelte/transition';
	import Carousel from "$lib/components/Carousel.svelte";
	import Modals from '$lib/components/modals.svelte';
	import { setToast } from '$lib/utils/utils.js';
	export let data;
	let searchTerm = '';
	let movies = data.movies;
	let showModal = false;
	let movie = {};
	let processAsUpdate = false;
	/*$: authed = data.props.authed;
	//$:console.log(authed);
	afterUpdate(() =>{
		//console.log(authed);
	})*/
	// this helper function will be passed as an anonymous function
	function setToastHelper(status, message) {
		setToast(status, message);
	}
	//this function will be called when the add button is clicked
	//it will set the showModal variable to true, which will show the movie creation modal.
	function createModal() {
		showModal = true;
	}
	//this will be called from our create movie component and will be set to false
	//to hide the movie creation modal.
	function close() {
		showModal = false;
	}
	//this function will be called when the search event is dispatched from the searchmovie component
	function handleSearch(event) {
		searchTerm = event.detail;
	}
	//we set  reactive statement to filter movies based on search term
	//If there is one, which we get via an event dispatch from the searchmovie component,
	//we filter the movies array to only include movies whose title includes the search term.
	//If there is no search term, we set filteredMovies to the entire movies array.
	$: filteredMovies = searchTerm
		? movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
		: movies;

	$: carouselMovies = filteredMovies.slice(0,10);
</script>

<svelte:head>
	<title>Movies • Groovy</title>
</svelte:head>
<div in:fly={{ x: -200, duration: 1000 }} out:slide={{ duration: 600 }}>
	<div class="carousel">
		<Carousel {carouselMovies} />
	</div>
	<div style="clear: both;"></div> <!-- Clear fix -->
	<SearchMovie on:search={handleSearch} />
	<h3>Current Movies</h3>
	<hr />
	{#if showModal}
		<div
			class="modal-container"
			transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
		>
			<Modals {showModal} {movie} {close} {processAsUpdate} {setToastHelper} />
		</div>
	{/if}

	<div class="popular-movies">
		{#each filteredMovies as movie (movie.id)}
			<Moviecard {movie} />
		{/each}
	</div>
	<button class="add-button" on:click={createModal}></button>
</div>

<style>
	h3 {
		margin-top: 40px;
		padding: 0 1rem;
	}
	.carousel{
		margin: 0 0 5px 0;
		background-color: #222;
		height: auto;
		max-height: 500px;
  }
	.popular-movies {
		display: grid;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		  justify-content: start; /* Align items to the start */
  align-items: start; /* Align items to the start */
  width: auto;
	}
	.add-button {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		font-size: 24px;
		text-align: center;
		background: url('/create.png') no-repeat center center; /* Replace '/path/to/create.png' with the actual path to your image */
		border: none;
		background-color: #00ff9d;
		bottom: 40px; /* Increase this to move the button up */
		right: 40px;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.add-button:hover {
		transform: scale(1.1);
		box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
	}

	.add-button:active {
		transform: scale(0.9);
	}
</style>
