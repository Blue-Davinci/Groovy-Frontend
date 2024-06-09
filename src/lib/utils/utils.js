// import * as cookie from './utils/cookie.js';
//cookie.someFunction().
// Define some functions and a variable
import { toast } from '@zerodevx/svelte-toast';
function getChangedFields(original, updated) {
	const changes = {};
	for (const key in original) {
		if (original[key] !== updated[key]) {
			if (key === 'genres') {
				changes[key] = formGenreObject(updated[key]);
			} else {
				changes[key] = updated[key];
			}
		}
	}
	return changes;
}
function setToast(status, message, duration = 4000) {
	if (status) {
		// we push a good toast message to the user
		toast.push(message, {
			duration: duration,
			type: status ? 'success' : 'error',
			target: 'new',
			dismissable: false
		});
	} else {
		//push a failure toast
		toast.push(message, {
			target: 'new',
			duration: duration,
			theme: {
				'--toastBackground': 'red',
				'--toastColor': 'black',
				'--toastBarBackground': 'red'
			}
		});
	}
}
function formGenreObject(genres) {
    const parts = genres.split(',');
    const result = parts.map(part => part.trim());
    console.log("Formatted genres to: ", result);
    return result;
}
// Export the functions and the variable
export { getChangedFields, setToast };
