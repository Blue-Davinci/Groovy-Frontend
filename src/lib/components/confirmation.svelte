<script>
	import { createEventDispatcher } from 'svelte';

	export let confirmationTitle;
	export let confirmationMessage;

	const dispatch = createEventDispatcher();

	function handleAccept() {
		dispatch('confirm', { accepted: true });
	}
	function handleDecline() {
		dispatch('confirm', { accepted: false });
	}
</script>

<div class="confirmation">
    <div class="dialog">
        <div class="title">{confirmationTitle}</div> <!-- Wrap the title in a div -->
        <p>{confirmationMessage}</p>
        <button class="confirm-button" on:click={handleAccept}>Accept</button>
        <button class="decline-button" on:click={handleDecline}>Decline</button>
    </div>
</div>

<style>
    .title {
    background-color: #404040; /* Slightly darker grey */
    color: #f8f9fa; /* Light grey for the text */
    border-bottom: 1px solid #ced4da; /* Border at the bottom */
    padding: 0.5rem;
    font-size: 1.2rem; /* Slightly larger font size */
    text-align: center;
    margin-bottom: 20px;
}
.dialog {
    background-color: #303030; /* Dark grey */
    color: #f8f9fa; /* Light grey for the text */
    border: 1px solid #ced4da;
    padding: 1rem;
    border-radius: 0.25rem;
    width: 350px; /* Increased size */
    text-align: center;
    font-size: 0.9rem; /* Decreased font size */
}

.confirmation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* This will create a semi-transparent black background */
    z-index: 9999; /* This will make sure the confirmation dialog is above everything else */
}

.confirm-button,
.decline-button {
    background-color: #00c6a7;
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Added transform to transition */
}

.confirm-button:hover {
    background-color: #008d76;
    transform: scale(1.1); /* Scale the button up slightly */
}

.decline-button {
    background-color: #dc3545;
}

.decline-button:hover {
    background-color: #c82333;
    transform: scale(1.1); /* Scale the button up slightly */
}
</style>
