<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let search = '';

	function handleInput() {
		dispatch('search', search);
	}
</script>

<div class="search-box">
	<button class="btn-search"><i class="fas fa-search"></i></button>
	<input
		type="text"
		class="input-search"
		placeholder="Type to Search..."
		bind:value={search}
		on:input={handleInput}
	/>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.search-box {
		margin-top: 40px;
		margin-bottom: 0;
		width: fit-content;
		height: fit-content;
		position: relative;
		margin-left: auto;
		margin-right: 10px;
		padding: 0;
	}
	.input-search {
		height: 50px;
		width: 50px;
		border-style: none;
		padding: 10px;
		font-size: 18px;
		letter-spacing: 2px;
		outline: none;
		border-radius: 25px;
		transition: all 0.5s ease-in-out;
		background-color: #00ff9d8e;
		padding-right: 40px;
		color: #fff;
	}
	.input-search::placeholder {
		color: rgba(255, 255, 255, 0.5);
		font-size: 18px;
		letter-spacing: 2px;
		font-weight: 100;
	}
	.btn-search {
		width: 47px;
		height: 47px;
		border-style: none;
		font-size: 20px;
		font-weight: bold;
		outline: none;
		cursor: pointer;
		border-radius: 50%;
		position: absolute;
		right: 0px;
		color: #ffffff;
		background-color: transparent;
		pointer-events: painted;
		background-image: url('/search.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 50%;
	}
	.btn-search:focus ~ .input-search {
		width: 300px;
		border-radius: 0px;
		background-color: transparent;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
	}
	.input-search:focus {
		width: 300px;
		border-radius: 0px;
		background-color: transparent;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
	}
</style>
