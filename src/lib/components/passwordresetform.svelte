<script>
	import { setToast } from '$lib/utils/utils.js';
  import {goto} from  '$app/navigation';
  import ErrorMessage from '$lib/components/errormessage.svelte';
	export let token;
	let password = '';
	let confirmPassword = '';
  let errorMessage;

	$: passwordsMatch = password === confirmPassword;
	console.log('In component: ', token);
	async function handleSubmit() {
		if (confirmPassword === '' || password === '') {
			setToast(false, 'The passwords cannot be empty!.', 3000);
			return;
		}
		if (passwordsMatch) {
			console.log('In component: ', token);
			let res = await fetch('/api/reset', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					token,
					password
				})
			});
			let data = await res.json();
			if (res.ok) {
				//console.log(data);
        setToast(true, `${data.message}`, 4000);
        goto('/login');
			} else {
        errorMessage = data.error.password ?data.error.password: data.error.token;
        console.log("error: ", errorMessage);
				setToast(false, `${errorMessage}`, 4000);
			}
		}
	}
</script>

<form class="password-reset-form" on:submit|preventDefault={handleSubmit}>
	<input type="password" bind:value={password} placeholder="New Password" required />
	<input type="password" bind:value={confirmPassword} placeholder="Confirm Password" required />
	{#if password && confirmPassword}
		<div class="feedback {passwordsMatch ? 'password-match' : 'password-mismatch'}">
			{passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
		</div>
	{/if}
  <ErrorMessage error={errorMessage?.error?.password} />
	<button type="submit">Reset Password</button>
</form>

<style>
	.password-reset-form {
		background-color: transparent;
		padding: 20px;
		width: 400px;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	input {
		margin-bottom: 10px;
		display: block;
		width: 100%;
	}
	.feedback {
		text-align: center;
		font-size: 0.8rem; /* Smaller font size */
		width: 100%;
	}
	.password-match,
	.password-mismatch {
		margin-bottom: 10px;
		color: green;
		text-align: center;
		width: 100%;
	}
	.password-mismatch {
		color: red;
	}
</style>
