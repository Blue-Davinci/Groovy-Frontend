<script>
        import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { setToast } from '$lib/utils/utils.js';
	export let data;

    let user;
    onMount(() => {
        if (data.user) {
            user = data.user.name;
            console.log('Verification: ', data);
            setToast(true, `You have succesfully Activated your account, ${user}.`, 3000);
            goto('/login');
        } 
    });
</script>
