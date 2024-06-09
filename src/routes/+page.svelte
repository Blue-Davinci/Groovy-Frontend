<script>
	//export let data;

	//console.log("Page.svelte ROOT: data: ", data);
	import { fly, slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Home • Groovy</title>
</svelte:head>
<div in:fly={{ x: -200, duration: 1000 }} out:slide={{ duration: 600 }}>
	<section class="hero">
		<div class="container">
			<h1 class="title">Welcome to The Groovy Frontend</h1>
			<p class="subtitle">Experience the speed and reliability of our Golang API</p>
			<div class="cta">
				<a class="cta-primary" href="/movies" tabindex="0" role="button" aria-label="Explore Movies"
					>Explore Movies</a
				>
				<a class="cta-secondary" href="/about" tabindex="0" role="button" aria-label="Learn More"
					>Learn More</a
				>
			</div>
		</div>
	</section>

	<div class="container">
		<hgroup>
			<h2>Let’s keep the webdesign graceful&nbsp;and&nbsp;simple!</h2>
			<h3>This is just a simple frontend for the Groovy API.</h3>
		</hgroup>
		<hr />
		<div class="grid">
			<div>
				<img src="/feature-icon-01.svg" alt="Feature Icon 1" height="16px" />
				<h4>Class-light and semantic</h4>
				<p>
					We use simple native HTML tags as much as possible. Less than 10 .classes are used in
					Pico.
				</p>
			</div>
			<div>
				<img src="/feature-icon-02.svg" alt="Feature Icon 1" height="16px" />
				<h4>Great styles with just CSS</h4>
				<p>No dependencies, package manager, external files, or JavaScript.</p>
			</div>
			<div>
				<img src="/feature-icon-03.svg" alt="Feature Icon 1" height="16px" />
				<h4>Responsive everything</h4>
				<p>Elegant and consistent adaptive spacings and typography on all devices.</p>
			</div>
		</div>
	</div>

	<hr />

	<section class="subscription">
		<div class="card">
			<h2 class="card-title">Free Subscription</h2>
			<p class="card-price">$0</p>
			<ul class="card-perks">
				<li>Add movie</li>
				<li>View movie</li>
				<li>Play trailers</li>
				<li>Rotate movies</li>
			</ul>
			<a
				class="cta-primary"
				href="/subscribe"
				tabindex="0"
				role="button"
				aria-label="Subscribe for Free">Subscribe</a
			>
		</div>
		<div class="card">
			<h2 class="card-title">Plus Subscription</h2>
			<p class="card-price">$10</p>
			<ul class="card-perks">
				<li>All Free perks</li>
				<li>Delete movies</li>
				<li>Update movies</li>
				<li>Play trailers</li>
				<li>Rotate movies</li>
			</ul>
			<a
				class="cta-primary"
				href="/subscribe"
				tabindex="0"
				role="button"
				aria-label="Subscribe for Premium">Subscribe</a
			>
		</div>
	</section>

	<hr />
	<section id="contact">
		<h2>Contact Us</h2>
		<p>For any inquiries, please reach out to us at our email:</p>
		<p>info@example.com</p>

		<input type="email" placeholder="Your email" />
		<button>
			Send Email
			<svg
				aria-hidden="true"
				focusable="false"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				height="16px"
			>
				<path
					fill="currentColor"
					d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.6 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
				></path>
			</svg>
		</button>
	</section>
</div>

<style>
	.grid {
		display: grid;
		grid-gap: 30px; /* Increased grid gap */
		grid-template-columns: repeat(
			auto-fit,
			minmax(150px, 1fr)
		); /* Adjust this value to increase spacing */
	}
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		background: url('/hero-back-illustration.svg') no-repeat center center fixed;
		height: 80vh;
		background-color: rgba(0, 0, 0, 0.1); /* Pico CSS dark theme background color */
		text-align: center;
	}

	.container {
		max-width: 90%;
		margin: 0 auto;
		padding: 0 20px;
	}

	.title {
		font-size: 2.5em;
		color: #fff; /* White color for better contrast on dark background */
	}

	.subtitle {
		font-size: 1.5em;
		color: #ccc; /* Light gray color for better contrast on dark background */
	}

	.cta {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 30px;
	}

	.cta-primary {
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.cta-primary:hover {
		background-color: #0056b3;
	}

	.cta-primary:active {
		background-color: #004085;
	}

	.cta-primary:focus {
		outline: 2px solid #0056b3;
		outline-offset: 2px;
	}

	.cta-secondary {
		background-color: transparent;
		color: #007bff;
		padding: 10px 20px;
		text-decoration: none;
		border-radius: 5px;
		transition: color 0.3s ease;
	}

	.cta-secondary:hover {
		color: #0056b3;
	}

	.cta-secondary:active {
		color: #004085;
	}

	.cta-secondary:focus {
		outline: 2px solid #007bff;
		outline-offset: 2px;
	}
	/* */
	.subscription {
    display: flex;
    justify-content: center;
    gap: 100px; /* Increased gap between cards */
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    background-image: url('/pricing-illustration.svg');
    background-repeat: no-repeat;
    background-size: cover;
    flex-wrap: wrap; /* Add this line if you want the cards to wrap on smaller screens */
}

	.card {
		background-color: rgba(0, 0, 0, 0.15); /* Slightly different color for the cards */
		padding: 20px;
		border-radius: 5px;
		box-shadow:
			0 4px 6px 0 hsla(0, 0%, 0%, 0.2),
			0 1px 3px 0 hsla(0, 0%, 0%, 0.14),
			0 3px 1px -2px hsla(0, 0%, 0%, 0.12); /* Added shadow to the cards */
		color: #fff;
		width: 300px;
	}

	.card-title {
		margin: 0;
		font-size: 1.5em;
	}

	.card-price {
		font-size: 2em;
		margin: 10px 0;
	}

	.card-perks {
		list-style-type: none; /* This will remove the default bullets */
		padding: 0;
		margin-bottom: 20px;
	}

	.card-perks li {
		list-style: none;
		margin-bottom: 10px;
		padding-left: 1em;
		text-indent: -0.7em;
	}

	.card-perks li::before {
		content: '• ';
		color: #007bff; /* You can change this color to whatever you prefer */
	}
</style>
