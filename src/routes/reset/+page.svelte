<script>
	import { fly } from 'svelte/transition';
	import ErrorMessage from '$lib/components/errormessage.svelte';
	import PasswordReset from '$lib/components/passwordreset.svelte';

	let counter = 0;
	let isSuccess = false;
	let linkActive = true;
	let email;
	let errorMessage;
	let isSubmitting = false;

	function resendLinkClicked() {
		if (linkActive) {
			counter = 60; // Start counter at 60 seconds
			linkActive = false; // Disable link
			const interval = setInterval(() => {
				counter -= 1;
				if (counter <= 0) {
					clearInterval(interval);
					linkActive = true; // Re-enable link after 60 seconds
				}
			}, 1000);
		}
	}
	async function handleSubmit() {
		isSubmitting = true;
		// Implement the submit logic
		const res = await fetch('/api/reset', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		let data = await res.json();
		if (res.ok) {
			//console.log(data.message);
			//setToast(true, `${data.message}`, 6000);
            isSuccess = true;
			
		} else {
			console.log('Error: ', data.error);
			errorMessage = data.error;
		}
		isSubmitting = false;
	}
</script>

<svelte:head>
	<title>Password Reset • Groovy</title>
	<link rel="stylesheet" href="/auth.css" />
</svelte:head>

<div
	class="page-container"
	in:fly={{ duration: 1000, y: 200 }}
	out:fly={{ duration: 150, y: -400 }}
>
	<div class="password-reset-container">
		<img src="https://img.icons8.com/?size=100&id=555&format=png&color=FFFFFF" alt="Key Graphic" />
		<h2 class="password-reset-title">Password Reset</h2>
		{#if !isSuccess}
			<form class="password-reset-form" on:submit|preventDefault={handleSubmit}>
				<input
					type=""
					placeholder="Enter your email"
					autocomplete="email"
					bind:value={email}
					required
				/>
				<ErrorMessage error={errorMessage} />
				{#if isSubmitting}
					<div class="saving-container">
						<span class="savingloader"></span>
						<span class="saving">Processing..</span>
					</div>
				{/if}
				<button type="submit" class="contrast">Send Email</button>
			</form>
			<p class="resend-text">
				Not yet received?
				{#if linkActive}
					<a href="#resend" class="resend-link" on:click={resendLinkClicked}>Resend</a>
				{:else}
					<span>Please wait {counter} seconds</span>
				{/if}
			</p>
		{/if}
		{#if isSuccess}
			<!-- Component to show after successful submission -->
			<PasswordReset />
		{/if}
	</div>
</div>

<style>
	.page-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh; /* Use viewport height to ensure full page height */
		padding: 20px; /* To ensure content is not flush against the screen edge */
	}

	.password-reset-container {
		font-family: 'Open Sans', sans-serif;
		max-width: 700px;
		min-width: 500px;
		margin: auto; /* Centering horizontally for smaller screens */
		padding: 30px;
		border: 1px solid hwb(171 0% 22% / 0.137);
		border-radius: 5px;
		background-color: transparent; /* Adjust background color if needed */
	}

	.password-reset-container img {
		display: block;
		margin: 0 auto 20px;
		width: 50px; /* Adjust based on the actual image size */
	}

	.password-reset-title {
		text-align: center;
		margin-bottom: 20px;
		font-size: 24px;
	}

	.password-reset-form button {
		width: 100%;
		padding: 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.password-reset-form button:hover {
		background-color: #0056b3;
	}
	.resend-text {
		font-size: 0.9em;
		margin-top: 20px; /* Adjust spacing as needed */
		text-align: center;
	}

	.resend-link {
		/*color: #00c6a7; Match the button color */
		text-decoration: none; /* Optional: removes underline */
	}

	.resend-link:hover {
		text-decoration: underline; /* Adds underline on hover for better UX */
	}
	.resend-text span {
		color: #d9534f; /* Change to your preferred color */
		font-weight: bold;
		background-color: transparent; /* Light background to highlight the text */
		padding: 3px 6px;
		border-radius: 4px;
		margin-left: 5px;
	}
</style>
