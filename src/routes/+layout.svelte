<script>
	import { onMount } from 'svelte';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	//import { setToast } from '$lib/utils/utils.js';
	import '@picocss/pico';

	// layout data to get the authed part
	export let data;
	$: authed = data.props.user;
	//console.log('[Layout.svelte] The Authed Local Data: ', authed);

	/*function setToast(status, message, duration = 4000) {
		if (status) {
			// we push a toast message to the user
			toast.push(message, {
				duration: duration,
				type: status ? 'success' : 'error',
				target: 'new',
				dismissable: false
			});
		}
	}*/
	onMount(() => {
		const preloader = document.getElementById('preloader');
		preloader.style.display = 'none';
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/global.css" />
	<link rel="stylesheet" href="/splide-override.css">
</svelte:head>
<div id="preloader">
	<div class="loader"></div>
</div>
<nav class="menu-container">
	<!-- logo -->
	<a href="/" class="menu-logo">
		<img src="/favicon.png" alt="Website Logo" />
	</a>

	<!-- menu items -->
	<div class="menu">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/movies" data-sveltekit-preload-data>Movies</a></li>
			<li><a href="/about">About</a></li>
		</ul>
		<ul>
			{#if !authed || authed === null || authed === undefined}
				<li><a href="/signup">Sign-up</a></li>
				<li><a href="/login">Login</a></li>
			{:else}
				<form method="POST" action="/logout">
					<button class="nav-button">log out</button>
				</form>
			{/if}
		</ul>
	</div>
</nav>

<div class="page-container">
	<div class="wrap">
		<SvelteToast
			target="new"
			options={{
				initial: 1,
				intro: { y: -64 },
				dismissable: false
			}}
		/>
	</div>
	<div class="content-wrap">
		<slot />
	</div>
	<hr />
	<footer>
		<div class="footer-content">
			<h3>Groovy</h3>
			<p>The groovy API frontend.</p>
			<ul class="socials">
				<li>
					<a href="https://facebook.com">
						<img src="/facebook.png" alt="Facebook" width="24px" height="24px" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com">
						<img src="/twitter.png" alt="Twitter" width="24px" height="24px" />
					</a>
				</li>
				<li>
					<a href="https://linkedin.com">
						<img src="/linkedin.png" alt="LinkedIn" width="24px" height="24px" />
					</a>
				</li>
			</ul>
			<p>© {new Date().getFullYear()} Groovy. All rights reserved.</p>
			<p>
				Powered by <a href="https://svelte.dev/">Svelte</a>,
				<a href="https://picocss.com/">Pico Css</a>
				and <a href="https://go.dev/">Golang.</a>.
			</p>
		</div>
	</footer>
</div>

<style>
	/* Toast */
	.wrap {
		--toastContainerTop: 0.5rem;
		--toastContainerRight: 0.5rem;
		--toastContainerBottom: auto;
		--toastContainerLeft: 0.5rem;
		--toastWidth: 100%;
		--toastMinHeight: 2rem;
		--toastPadding: 0 0.5rem;
		font-size: 0.875rem;
	}
	@media (min-width: 40rem) {
		.wrap {
			--toastContainerRight: auto;
			--toastContainerLeft: calc(50vw - 20rem);
			--toastWidth: 40rem;
			--toastBackground: #00c6a7;
			--toastBarBackground: hwb(0 18% 81%);
		}
	}
</style>
