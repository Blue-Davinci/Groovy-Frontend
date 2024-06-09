<script>
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import ErrorMessage from '$lib/components/errormessage.svelte';
	import {setToast} from '$lib/utils/utils.js';
	//import { fromsignup } from '$lib/store/store.js';

	export let form;

	let signin = false;

	//console.log('Data: ', form);
</script>

<svelte:head>
	<title>Sign Up • Groovy</title>
	<link rel="stylesheet" href="/auth.css" />
</svelte:head>

<main class="container">

	<article
		class="grid"
		style="display: flex; flex-direction: row; width: 60%; height: 60%; margin: 0 auto; margin-top: 60px"
		in:fly={{ duration: 1000, y: 200 }}
		out:fly={{ duration: 150, y: -400 }}
	>
		<div style="width: 100%;">
			<!-- New container with width set to 50% -->
			<hgroup>
				<h1>Sign Up</h1>
				<p>Groovy Sign Up page</p>
			</hgroup>

			<form
				method="POST"
				action="?/signup"
				use:enhance={() => {
					signin = true;
					return async ({ result, update }) => {
						try {
							if (result.type === 'redirect') {
								const urlParams = new URLSearchParams(window.location.search);
								const redirectTo = urlParams.get('redirectTo') ?? '/movies';
								//set our sign up store to show a toast notification
								// that it was succesful and they should check their email
								//fromsignup.set(true)
								setToast(true, 'Signup was Succesful, please check your email for instructions.', 4000);
								await update();
								await goto(result.location);
							}
							await update();
						} catch (error) {
							//console.error('An error occurred:', error);
						} finally {
							signin = false;
						}
					};
				}}
			>
				<input
					type="text"
					name="name"
					placeholder="username"
					aria-label="username"
					autocomplete="email"
					required
					class="input {form?.error?.name ? 'input-error' : 'input-bordered'}"
					value={form?.data?.name ?? ''}
				/>
				<ErrorMessage error={form?.error?.name} />
				<input
					type="text"
					name="email"
					placeholder="Email"
					aria-label="Email"
					autocomplete="email"
					required
					class="input {form?.error?.email ? 'input-error' : 'input-bordered'}"
					value={form?.data?.email ?? ''}
				/>
				<ErrorMessage error={form?.error?.email} />
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					required
					class="input {form?.error?.password ? 'input-error' : 'input-bordered'}"
					value={form?.data?.password ?? ''}
				/>
				<ErrorMessage error={form?.error?.password} />
				<input
					type="password"
					name="confirmpassword"
					placeholder="Confirm Password"
					aria-label="ConfirmPassword"
					autocomplete="current-password"
					required
					class="input {form?.error?.confirmpassword ? 'input-error' : 'input-bordered'}"
					value={form?.data?.confirmpassword ?? ''}
				/>
				<ErrorMessage error={form?.error?.confirmpassword} />
				<p>
					Do you have an account? <a href="/login">Login</a>
				</p>
				<fieldset>
					{#if form?.error}
						<ul class="error-list">
							{#if typeof form.error === 'string'}
								<li class="error-message">{form.error}</li>
							{/if}
						</ul>
					{/if}
					{#if signin}
						<div class="saving-container">
							<span class="savingloader"></span>
							<span class="saving">Processing..</span>
						</div>
					{/if}
				</fieldset>
				<button type="submit" class="contrast">Sign Up</button>
			</form>
		</div>
	</article>
</main>