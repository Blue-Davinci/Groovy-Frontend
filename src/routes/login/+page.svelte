<script>
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import {setToast} from '$lib/utils/utils.js';

	//we export form to get any errors returned after we submit
	export let form;
	//our binders for the data
	let email = '';
	let password = '';
	//our flag for whether we are doing any processing
	let signin = false;
</script>

<svelte:head>
	<title>Sign in • Groovy</title>
	<link rel="stylesheet" href="/auth.css" />
	<meta name="Groovy login page" content="Login page." />
</svelte:head>

<main class="container">
	<article
		class="grid"
		style="display: flex; flex-direction: row;"
		in:fly={{ duration: 1000, y: 200 }}
		out:fly={{ duration: 150, y: -400 }}
	>
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<p>Groovy Login page</p>
			</hgroup>

			<form
				method="POST"
				action="?/login"
				use:enhance={() => {
					signin = true;

					return async ({ result, update }) => {
						//console.log('result: ', result);
						try {
							if (result.type === 'redirect') {
								const urlParams = new URLSearchParams(window.location.search);
								const redirectTo = urlParams.get('redirectTo') ?? '/movies';
								setToast(true, 'Succesfully Logged In.', 3000);
								await update();
								await goto(result.location);
							}
							await update();
						} catch (error) {
							//console.error('An error occurred:', error);
						} finally {
							password = '';
							signin = false;
						}
					};
				}}
			>
				<input
					type="text"
					name="email"
					placeholder="Email"
					aria-label="Email"
					autocomplete="email"
					required
					bind:value={email}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					required
					bind:value={password}
				/>
				<fieldset>
					{#if form?.error}
						<ul class="error-list">
							{#if typeof form.error === 'string'}
								<li class="error-message">{form.error}</li>
							{:else}
								{#each Object.entries(form.error) as [key, value]}
									{#each value as error}
										<li class="error-message">{key}: {error}</li>
									{/each}
								{/each}
							{/if}
						</ul>
					{/if}
					<p>
						 <a href="/reset" style="font-size: 16px;">Forgot Password?</a>
					</p>
					<button type="submit" class="contrast" disabled={signin}> Login </button>
					{#if signin}
						<div class="saving-container">
							<span class="savingloader"></span>
							<span class="saving">Processing..</span>
						</div>
					{/if}
				</fieldset>
			</form>
			<p>
				Don't have an account? <a href="/signup">Sign up</a>
			</p>
		</div>
		<div></div>
	</article>
</main>
