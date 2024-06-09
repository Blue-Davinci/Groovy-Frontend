import { c as create_ssr_component, d as add_attribute, f as escape, e as each } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "devalue";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let email = "";
  let password = "";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-jtcoet_START -->${$$result.title = `<title>Sign in • Groovy</title>`, ""}<link rel="stylesheet" href="/auth.css"><meta name="Groovy login page" content="Login page."><!-- HEAD_svelte-jtcoet_END -->`, ""} <main class="container"><article class="grid" style="display: flex; flex-direction: row;"><div><hgroup data-svelte-h="svelte-10ggopx"><h1>Sign in</h1> <p>Groovy Login page</p></hgroup> <form method="POST" action="?/login"><input type="text" name="email" placeholder="Email" aria-label="Email" autocomplete="email" required${add_attribute("value", email, 0)}> <input type="password" name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required${add_attribute("value", password, 0)}> <fieldset>${form?.error ? `<ul class="error-list">${typeof form.error === "string" ? `<li class="error-message">${escape(form.error)}</li>` : `${each(Object.entries(form.error), ([key, value]) => {
    return `${each(value, (error) => {
      return `<li class="error-message">${escape(key)}: ${escape(error)}</li>`;
    })}`;
  })}`}</ul>` : ``} <p data-svelte-h="svelte-1u1e7lg">Don&#39;t have an account? <a href="/signup">Sign up</a></p> <button type="submit" class="contrast" ${""}>Login</button> ${``}</fieldset></form></div> <div></div></article></main>`;
});
export {
  Page as default
};
