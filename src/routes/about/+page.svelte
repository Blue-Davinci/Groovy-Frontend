<script>
	import { fly, slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>About • Groovy</title>
</svelte:head>

<div class="about" in:fly={{ x: -200, duration: 1000 }} out:slide={{ duration: 600 }}>
	<header>
		<div class="container">
			<div id="branding">
				<h1><span class="highlight">Groovy</span> Frontend</h1>
			</div>
		</div>
	</header>

	<div class="container">
		<div class="about-info">
			<img src="favicon.png" alt="Groovy Frontend Logo" />
			<h1 style="margin-bottom: 20px;">About the Groovy Frontend</h1>
			<p class="centered-text">
				The Groovy Frontend project is a companion to the <a
					href="https://github.com/Blue-Davinci/groovy"
					target="_blank">Groovy API</a
				>, a robust movie data service built with Golang. This frontend, built with Svelte, serves
				as the user interface for the Groovy API, providing an intuitive and engaging platform for
				users to interact with a vast array of movie data.
			</p>
			<p class="centered-text">
				It leverages the capabilities of the Groovy API to present movie information in a
				user-friendly format, enhancing the overall user experience. The project supports essential
				user authentication features, including login and signup via bearer tokens. Once
				authenticated, users can perform a variety of activities such as creating, viewing,
				updating, and deleting movies.
			</p>
		</div>

    <div class="cards-container">
      <div class="card">
        <img src="/webdes.png" alt="Frontend">
        <p>Svelte Frontend</p>
      </div>
      <div class="card">
        <img src="/software.png" alt="Backend">
        <p>Golang Back-end</p>
      </div>
      <div class="card">
        <img src="/app.png" alt="Rest API">
        <p>Well Crafted API</p>
      </div>
      <div class="card">
        <img src="/graphic.png" alt="Design">
        <p>Graphic Design</p>
      </div>
    </div>


	</div>
</div>

<style>
	.container {
		background: rgba(0, 0, 0, 0.1);
		max-width: 1100px;
		margin: auto;
		overflow: hidden;
		padding: 0 20px;
	}
	header {
		margin-top: 60px;
		background: #333;
		color: #fff;
		padding-top: 30px;
		min-height: 70px;
		border-bottom: #e8491d 3px solid;
	}

	header #branding {
		float: left;
	}
	header #branding h1 {
		margin: 0;
	}

	header .highlight {
		color: #e8491d;
		font-weight: bold;
	}
	.about-info {
		display: flex;
		flex-direction: column;
		align-items: center; /* This should center the children */
		text-align: center; /* Ensure text is centered for all child text elements */
	}

	.about-info img {
    box-shadow: 0 12px 16px hwb(157 0% 75% / 0.473);
		border-radius: 40%;
		width: 300px;
		height: 300px;
		object-fit: cover;
		margin-bottom: 20px;
	}

	.about-info h1,
	.about-info p {
		width: 100%; /* Ensure full width to center text correctly */
		max-width: 800px; /* Adjust based on your preference for maximum width */
		margin: 0 auto; /* Center the element within its parent */
	}
	.about-info p {
		max-width: 100%; /* Limiting the width can help with readability and centering */
		margin: 0 auto;
	}
  .centered-text {
    font-family: 'Open Sans', Arial, sans-serif; /* Use a more readable, modern font */
    font-size: 16px; /* Adjust font size for readability */
    line-height: 1.6; /* Improve spacing between lines of text */
    margin-top: 30px; /* Add space below each paragraph for separation */
    color: hwb(0 95% 5%); /* Optional: Adjust the text color for better contrast */
}
.centered-text:not(:last-child) {
    margin-bottom: 30px; /* Only adds margin to paragraphs that are not the last child */
}
	.cards-container {
		display: flex; /* Align cards horizontally */
		justify-content: center; /* Center cards within the container */
		gap: 20px; /* Add some space between cards */
		padding: 20px 0; /* Add some vertical padding */
	}

	.card {
		background: rgba(0, 0, 0, 0.1); /* Light background for the cards */
		border: 1px solid hsl(0, 0%, 53%); /* Add a subtle border */
		border-radius: 8px; /* Round the corners */
		padding: 10px; /* Add some padding inside the cards */
		height: 200px;
		width: 200px; /* Define a fixed width for small cards */
		margin-top: 30px;
    text-align: center; /* Center the text inside the cards */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Initial subtle shadow */
	}
  .card:hover {
    transform: translateY(-5px); /* Slightly raise the card */
    box-shadow: 0 12px 16px hsla(157, 100%, 50%, 0.473); /* Increase shadow for a "lifted" effect */
}
  .card img {
    max-width: 80px; /* Make the image small */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Block display to allow for margin auto */
    margin: 0 auto 20px; /* Center the image and add space below */
  }

  .card p {
    margin: 0; /* Remove default paragraph margin */
  }
</style>