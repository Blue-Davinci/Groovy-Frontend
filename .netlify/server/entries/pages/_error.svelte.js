import { h as getContext, c as create_ssr_component, b as subscribe, f as escape } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".parent-container.svelte-1qjov9b.svelte-1qjov9b{display:flex;align-items:center;justify-content:center;height:calc(100vh - 0px);padding:20px}.oops.svelte-1qjov9b h1.svelte-1qjov9b{font-family:'Montserrat', sans-serif;font-size:120px;font-weight:900;position:relative;background:url('https://i.ibb.co/ysnSFL2/bg.jpg') no-repeat;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:cover;background-position:center;text-align:center;line-height:1}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\r\\n\\timport { page } from '$app/stores';\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<meta charset=\\"utf-8\\" />\\r\\n\\t<meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\" />\\r\\n\\t<meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\" />\\r\\n\\t<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\\r\\n\\r\\n\\t<title>Error</title>\\r\\n\\r\\n\\t<!-- Google font -->\\r\\n\\t<link href=\\"https://fonts.googleapis.com/css?family=Montserrat:400,700,900\\" rel=\\"stylesheet\\" />\\r\\n\\r\\n\\t<!-- Custom stlylesheet -->\\r\\n\\t<link type=\\"text/css\\" rel=\\"stylesheet\\" href=\\"/error.css\\" />\\r\\n\\r\\n\\t<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\\r\\n\\t<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\\r\\n\\t<!--[if lt IE 9]>\\r\\n\\t\\t  <script src=\\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\\"><\/script>\\r\\n\\t\\t  <script src=\\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\\"><\/script>\\r\\n\\t\\t<![endif]-->\\r\\n</svelte:head>\\r\\n\\r\\n<div class=\\"parent-container\\">\\r\\n\\t<div class=\\"notfound\\">\\r\\n\\t\\t<div class=\\"notfound\\">\\r\\n\\t\\t\\t<div class=\\"oops\\">\\r\\n\\t\\t\\t\\t<h1>Oops!</h1>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<h2>{$page.error.title ? $page.error.title : 'An Error Occurred'}</h2>\\r\\n\\t\\t\\t<p>{$page.error.message ? $page.error.message : ''}</p>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t{$page.error.info? $page.error.info: 'A problem has occurred that prevented us from displaying what you wanted'}\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<a href=\\"/\\">Go To Homepage</a>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.parent-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\theight: calc(100vh - 0px); /* adjust this value based on the height of your footer */\\r\\n\\t\\tpadding: 20px;\\r\\n\\t}\\r\\n\\t.oops h1 {\\r\\n\\t\\tfont-family: 'Montserrat', sans-serif;\\r\\n\\t\\tfont-size: 120px;\\r\\n\\t\\tfont-weight: 900;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tbackground: url('https://i.ibb.co/ysnSFL2/bg.jpg') no-repeat;\\r\\n\\t\\tbackground-clip: text;\\r\\n\\t\\t-webkit-background-clip: text;\\r\\n\\t\\t-webkit-text-fill-color: transparent;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tline-height: 1; /* Adjust line-height to ensure text aligns properly */\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2CC,+CAAkB,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,OAAO,CAAE,IACV,CACA,oBAAK,CAAC,iBAAG,CACR,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,sCAAsC,CAAC,SAAS,CAC5D,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAAW,CACpC,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,CACd"}`
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hwb4fy_START --><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1">${$$result.title = `<title>Error</title>`, ""}<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900" rel="stylesheet"><link type="text/css" rel="stylesheet" href="/error.css"><!-- HEAD_svelte-1hwb4fy_END -->`, ""} <div class="parent-container svelte-1qjov9b"><div class="notfound"><div class="notfound"><div class="oops svelte-1qjov9b" data-svelte-h="svelte-pqwpsy"><h1 class="svelte-1qjov9b">Oops!</h1></div> <h2>${escape($page.error.title ? $page.error.title : "An Error Occurred")}</h2> <p>${escape($page.error.message ? $page.error.message : "")}</p> <p>${escape($page.error.info ? $page.error.info : "A problem has occurred that prevented us from displaying what you wanted")}</p> <a href="/" data-svelte-h="svelte-1yvdoq6">Go To Homepage</a></div></div> </div>`;
});
export {
  Error$1 as default
};
