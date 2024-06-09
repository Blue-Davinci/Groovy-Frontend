import { c as create_ssr_component, d as add_attribute, f as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
/* empty css                                                         */
const css = {
  code: "h1.svelte-1b9pia.svelte-1b9pia{padding:1rem 0rem 2rem}p.svelte-1b9pia.svelte-1b9pia{padding:1rem 0rem}nav.movie-details.svelte-1b9pia.svelte-1b9pia{margin-top:4.5rem;display:flex;min-height:10vh;align-items:center;justify-content:center}.nav-link.svelte-1b9pia.svelte-1b9pia{display:inline-block;background-color:#00c6a7;color:#232323;text-decoration:none;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.nav-link.svelte-1b9pia.svelte-1b9pia:hover{background-color:#008d76}.img-container.svelte-1b9pia.svelte-1b9pia{position:relative;width:100%;height:500px;overflow:hidden}img.svelte-1b9pia.svelte-1b9pia{width:100%;height:100%;object-fit:cover;border-radius:1rem;image-rendering:auto}.img-container.svelte-1b9pia:hover .overlay.svelte-1b9pia{opacity:1}.movie-details.svelte-1b9pia.svelte-1b9pia{margin:2rem 20%;margin-top:1rem}.overlay.svelte-1b9pia.svelte-1b9pia{position:absolute;bottom:0;left:0;right:0;background:rgba(0, 0, 0, 0.5);color:#f1f1f1;transition:opacity 0.5s ease;opacity:0;color:white;font-size:20px;padding:20px;text-align:center;display:flex;justify-content:center;align-items:center}.icon-button.svelte-1b9pia.svelte-1b9pia{background:none;border:none;padding:10px;margin:0 20px;width:30px;height:30px;transition:transform 0.3s ease,\r\n			border 0.3s ease;box-sizing:content-box}.icon.svelte-1b9pia.svelte-1b9pia{width:100%;height:100%;filter:invert(100%);border-radius:50%}.icon-button.svelte-1b9pia.svelte-1b9pia:hover{transform:scale(1.1);border:2px solid #008d76}.icon-button.svelte-1b9pia:active .icon.svelte-1b9pia{transform:scale(0.9)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport Modals from '$lib/components/modals.svelte';\\r\\n\\timport Confirmation from '$lib/components/confirmation.svelte';\\r\\n\\timport { setToast } from '$lib/utils/utils.js';\\r\\n\\texport let data;\\r\\n\\tlet showModal = false;\\r\\n\\tlet showConfirmation = false;\\r\\n\\tlet success = false;\\r\\n\\tlet processAsUpdate = true;\\r\\n\\r\\n\\tlet confirmationTitle = 'Deletion Confirmation';\\r\\n\\tlet confirmationMessage = 'Are you sure you want to delete this movie?';\\r\\n\\r\\n\\t$: movie = data.movie;\\r\\n\\tfunction goBack() {\\r\\n\\t\\tgoto('/movies',{\\r\\n\\t\\t\\tnoscroll: false,\\r\\n\\t\\t});\\r\\n\\t}\\r\\n\\tfunction showEditModal() {\\r\\n\\t\\tshowModal = true;\\r\\n\\t}\\r\\n\\t// this helper function will be passed as an anonymous function\\r\\n\\t// It has the new movie attribute, if the update was a success\\r\\n\\t// we just set the current movie ds to the new one for quick\\r\\n\\t// update previews.\\r\\n\\tfunction setToastHelper(status, message, newmovie) {\\r\\n\\t\\tif (status) {\\r\\n\\t\\t\\tdata.movie = newmovie.movie;\\r\\n\\t\\t}\\r\\n\\t\\tsetToast(status, message);\\r\\n\\t}\\r\\n\\t// for our delete component\\r\\n\\tasync function handleConfirm(event) {\\r\\n\\t\\t//console.log(event.detail.accepted ? 'Accepted' : 'Declined');\\r\\n\\t\\tshowConfirmation = false;\\r\\n\\t\\tif (event.detail.accepted) {\\r\\n\\t\\t\\tconsole.log('Obtained the event fire, proceeding to delete');\\r\\n\\t\\t\\tconst data = await deleteMovie();\\r\\n\\t\\t\\tif (!data.error) {\\r\\n\\t\\t\\t\\tsetToast(true, 'Movie was deleted successfully', 4000);\\r\\n\\t\\t\\t\\t//since we are also deleting a movie here, we check if a deletion\\r\\n\\t\\t\\t\\t//operation is happening. When a delete response is returned\\r\\n\\t\\t\\t\\t// the json only has a .message object in it.\\r\\n\\t\\t\\t\\t//If it doesn't then we know it's a normal update and just\\r\\n\\t\\t\\t\\t//update the movie object.\\r\\n\\t\\t\\t\\tif (!data.message) {\\r\\n\\t\\t\\t\\t\\tdata.movie = data;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t/*await new Promise((fulfil) => {\\r\\n\\t\\t\\t\\t\\tsetTimeout(fulfil, 2000);\\r\\n\\t\\t\\t\\t});*/\\r\\n\\t\\t\\t\\tgoBack();\\r\\n\\t\\t\\t} else {\\r\\n\\t\\t\\t\\tsetToast(false, \`Movie deletion failed with \${data.error}\`, movie);\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\tfunction openConfirmation() {\\r\\n\\t\\tshowConfirmation = true; // Show the confirmation message when the button is clicked\\r\\n\\t}\\r\\n\\t//set values to false for any visibility\\r\\n\\tfunction close() {\\r\\n\\t\\tshowModal = false;\\r\\n\\t\\tshowConfirmation = false;\\r\\n\\t}\\r\\n\\t//process our deletion request\\r\\n\\tasync function deleteMovie() {\\r\\n\\t\\tconst url = \`/api/movies?id=\${movie.id}\`;\\r\\n\\t\\tconst method = 'DELETE';\\r\\n\\t\\tconst response = await fetch(url, {\\r\\n\\t\\t\\tmethod: method\\r\\n\\t\\t});\\r\\n\\t\\tif (response.ok) {\\r\\n\\t\\t\\tconst responseData = await response.json();\\r\\n\\t\\t\\treturn responseData;\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tconst errorData = await response.json();\\r\\n\\t\\t\\treturn errorData;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Movie Info • Groovy</title>\\r\\n</svelte:head>\\r\\n<div\\r\\n\\tclass=\\"movie-details\\"\\r\\n\\ttransition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}\\r\\n>\\r\\n\\t<nav class=\\"movie-details\\">\\r\\n\\t\\t<a href=\\"/movies\\" class=\\"nav-link\\">Back To Movies</a>\\r\\n\\t</nav>\\r\\n\\t{#if showModal}\\r\\n\\t\\t<div\\r\\n\\t\\t\\tclass=\\"modal-container\\"\\r\\n\\t\\t\\ttransition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}\\r\\n\\t\\t>\\r\\n\\t\\t\\t<Modals {showModal} {movie} {close} {processAsUpdate} {setToastHelper} />\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if showConfirmation}\\r\\n\\t\\t<Confirmation {confirmationTitle} {confirmationMessage} on:confirm={handleConfirm} />\\r\\n\\t{/if}\\r\\n\\t<div class=\\"img-container\\">\\r\\n\\t\\t<img src={movie.url} alt={movie.title} />\\r\\n\\t\\t<!-- Button overlay for our editing options-->\\r\\n\\t\\t<div class=\\"overlay\\">\\r\\n\\t\\t\\t<button type=\\"submit\\" class=\\"icon-button\\" on:click={showEditModal}>\\r\\n\\t\\t\\t\\t<img class=\\"icon\\" src=\\"/edit.svg\\" alt=\\"edit\\" />\\r\\n\\t\\t\\t</button>\\r\\n\\t\\t\\t<button type=\\"submit\\" class=\\"icon-button\\" on:click={openConfirmation}>\\r\\n\\t\\t\\t\\t<img class=\\"icon\\" src=\\"/delete.svg\\" alt=\\"delete\\" />\\r\\n\\t\\t\\t</button>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t<div class=\\"txt-container\\">\\r\\n\\t\\t<h1>{movie.title}</h1>\\r\\n\\t\\t<p class=\\"overview\\">{movie.description}</p>\\r\\n\\t\\t<p>\\r\\n\\t\\t\\t<span>Release Date: </span>\\r\\n\\t\\t\\t{movie.year} <br />\\r\\n\\t\\t\\t<span>Runtime: </span>\\r\\n\\t\\t\\t{movie.runtime} <br />\\r\\n\\t\\t\\t<span>Version: </span>\\r\\n\\t\\t\\t{movie.version} <br />\\r\\n\\t\\t\\t<span>Genres: </span>\\r\\n\\t\\t\\t{movie.genres.join(', ')} <br />\\r\\n\\t\\t</p>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\th1 {\\r\\n\\t\\tpadding: 1rem 0rem 2rem;\\r\\n\\t}\\r\\n\\tp {\\r\\n\\t\\tpadding: 1rem 0rem;\\r\\n\\t}\\r\\n\\r\\n\\t/* For our navigation element */\\r\\n\\tnav.movie-details {\\r\\n\\t\\tmargin-top: 4.5rem;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tmin-height: 10vh;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t}\\r\\n\\t.nav-link {\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\tbackground-color: #00c6a7;\\r\\n\\t\\tcolor: #232323;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding: 10px 20px;\\r\\n\\t\\tborder-radius: 5px;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttransition: background-color 0.3s ease;\\r\\n\\t}\\r\\n\\r\\n\\t.nav-link:hover {\\r\\n\\t\\tbackground-color: #008d76;\\r\\n\\t}\\r\\n\\r\\n\\t/* For our image container */\\r\\n\\t.img-container {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 500px;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\timg {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tobject-fit: cover;\\r\\n\\t\\tborder-radius: 1rem;\\r\\n\\t\\timage-rendering: auto;\\r\\n\\t}\\r\\n\\t.img-container:hover .overlay {\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\t.movie-details {\\r\\n\\t\\tmargin: 2rem 20%;\\r\\n\\t\\tmargin-top: 1rem;\\r\\n\\t}\\r\\n\\r\\n\\t/* For our overlay */\\r\\n\\t.overlay {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbottom: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\tright: 0;\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.5);\\r\\n\\t\\tcolor: #f1f1f1;\\r\\n\\t\\ttransition: opacity 0.5s ease;\\r\\n\\t\\topacity: 0;\\r\\n\\t\\tcolor: white;\\r\\n\\t\\tfont-size: 20px;\\r\\n\\t\\tpadding: 20px;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\r\\n\\t.icon-button {\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding: 10px;\\r\\n\\t\\tmargin: 0 20px;\\r\\n\\t\\twidth: 30px;\\r\\n\\t\\theight: 30px;\\r\\n\\t\\ttransition:\\r\\n\\t\\t\\ttransform 0.3s ease,\\r\\n\\t\\t\\tborder 0.3s ease; /* added transition for border */\\r\\n\\t\\tbox-sizing: content-box; /* ensure padding is not included in width and height */\\r\\n\\t}\\r\\n\\r\\n\\t.icon {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tfilter: invert(100%);\\r\\n\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t}\\r\\n\\t.icon-button:hover {\\r\\n\\t\\ttransform: scale(1.1); /* hover effect */\\r\\n\\t\\tborder: 2px solid #008d76; /* highlight border */\\r\\n\\t}\\r\\n\\r\\n\\t.icon-button:active .icon {\\r\\n\\t\\ttransform: scale(0.9);\\r\\n\\t}\\r\\n\\r\\n\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwIC,8BAAG,CACF,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IACpB,CACA,6BAAE,CACD,OAAO,CAAE,IAAI,CAAC,IACf,CAGA,GAAG,0CAAe,CACjB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CACA,qCAAU,CACT,OAAO,CAAE,YAAY,CACrB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACnC,CAEA,qCAAS,MAAO,CACf,gBAAgB,CAAE,OACnB,CAGA,0CAAe,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MACX,CACA,+BAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,eAAe,CAAE,IAClB,CACA,4BAAc,MAAM,CAAC,sBAAS,CAC7B,OAAO,CAAE,CACV,CACA,0CAAe,CACd,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,UAAU,CAAE,IACb,CAGA,oCAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,IAAI,CAC7B,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACd,CAEA,wCAAa,CACZ,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CACT,SAAS,CAAC,IAAI,CAAC,IAAI,CAAC;AACvB,GAAG,MAAM,CAAC,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,WACb,CAEA,iCAAM,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,IAAI,CAAC,CAEpB,aAAa,CAAE,GAChB,CACA,wCAAY,MAAO,CAClB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACnB,CAEA,0BAAY,OAAO,CAAC,mBAAM,CACzB,SAAS,CAAE,MAAM,GAAG,CACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let movie;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  movie = data.movie;
  return `${$$result.head += `<!-- HEAD_svelte-kziwcw_START -->${$$result.title = `<title>Movie Info • Groovy</title>`, ""}<!-- HEAD_svelte-kziwcw_END -->`, ""} <div class="movie-details svelte-1b9pia"><nav class="movie-details svelte-1b9pia" data-svelte-h="svelte-1rej010"><a href="/movies" class="nav-link svelte-1b9pia">Back To Movies</a></nav> ${``} ${``} <div class="img-container svelte-1b9pia"><img${add_attribute("src", movie.url, 0)}${add_attribute("alt", movie.title, 0)} class="svelte-1b9pia">  <div class="overlay svelte-1b9pia"><button type="submit" class="icon-button svelte-1b9pia" data-svelte-h="svelte-15ocbmz"><img class="icon svelte-1b9pia" src="/edit.svg" alt="edit"></button> <button type="submit" class="icon-button svelte-1b9pia" data-svelte-h="svelte-114119m"><img class="icon svelte-1b9pia" src="/delete.svg" alt="delete"></button></div></div> <div class="txt-container"><h1 class="svelte-1b9pia">${escape(movie.title)}</h1> <p class="overview svelte-1b9pia">${escape(movie.description)}</p> <p class="svelte-1b9pia"><span data-svelte-h="svelte-5gofgn">Release Date:</span> ${escape(movie.year)} <br> <span data-svelte-h="svelte-q8a63k">Runtime:</span> ${escape(movie.runtime)} <br> <span data-svelte-h="svelte-1pkhfqw">Version:</span> ${escape(movie.version)} <br> <span data-svelte-h="svelte-750ej0">Genres:</span> ${escape(movie.genres.join(", "))} <br></p></div> </div>`;
});
export {
  Page as default
};
