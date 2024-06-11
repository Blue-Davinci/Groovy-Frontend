<script>
	import { fly } from 'svelte/transition';
	import PasswordResetForm from '$lib/components/passwordresetform.svelte';
	export let data;
    let token = data.token;
	console.log('Pam pam:', data.token);
</script>

<svelte:head>
	<title>Password Update • Groovy</title>
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
		<PasswordResetForm {token}/>
	</div>
</div>

<style>
	.page-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh; /* Use viewport height to ensure full page height */
        min-width: 100vh;
		padding: 20px; /* To ensure content is not flush against the screen edge */
	}
    .password-reset-title {
		text-align: center;
		margin-bottom: 20px;
		font-size: 24px;
	}
    .password-reset-container img {
		display: block;
		margin: 0 auto 20px;
		width: 50px; /* Adjust based on the actual image size */
	}
</style>