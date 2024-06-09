import { c as create_ssr_component, f as escape, e as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "devalue";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
const Errormessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `${error ? `<ul class="error-list">${typeof error === "string" ? `<li class="error-message">${escape(error)}</li>` : `${each(Object.entries(error), ([key, value]) => {
    return `<li class="error-message">${escape(value)}</li>`;
  })}`}</ul>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-1bigca2_START -->${$$result.title = `<title>Sign Up • Groovy</title>`, ""}<link rel="stylesheet" href="/auth.css"><!-- HEAD_svelte-1bigca2_END -->`, ""} <main class="container"><article class="grid" style="display: flex; flex-direction: row; width: 60%; height: 60%; margin: 0 auto; margin-top: 60px"><div style="width: 100%;"> <hgroup data-svelte-h="svelte-i6ewqa"><h1>Sign Up</h1> <p>Groovy Sign Up page</p></hgroup> <form method="POST" action="?/signup"><input type="text" name="name" placeholder="username" aria-label="username" autocomplete="email" required class="${"input " + escape(form?.error?.name ? "input-error" : "input-bordered", true)}"${add_attribute("value", form?.data?.name ?? "", 0)}> ${validate_component(Errormessage, "ErrorMessage").$$render($$result, { error: form?.error?.name }, {}, {})} <input type="text" name="email" placeholder="Email" aria-label="Email" autocomplete="email" required class="${"input " + escape(form?.error?.email ? "input-error" : "input-bordered", true)}"${add_attribute("value", form?.data?.email ?? "", 0)}> ${validate_component(Errormessage, "ErrorMessage").$$render($$result, { error: form?.error?.email }, {}, {})} <input type="password" name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required class="${"input " + escape(
    form?.error?.password ? "input-error" : "input-bordered",
    true
  )}"${add_attribute("value", form?.data?.password ?? "", 0)}> ${validate_component(Errormessage, "ErrorMessage").$$render($$result, { error: form?.error?.password }, {}, {})} <input type="password" name="confirmpassword" placeholder="Confirm Password" aria-label="ConfirmPassword" autocomplete="current-password" required class="${"input " + escape(
    form?.error?.confirmpassword ? "input-error" : "input-bordered",
    true
  )}"${add_attribute("value", form?.data?.confirmpassword ?? "", 0)}> ${validate_component(Errormessage, "ErrorMessage").$$render($$result, { error: form?.error?.confirmpassword }, {}, {})} <p data-svelte-h="svelte-1t3n718">Do you have an account? <a href="/login">Login</a></p> <fieldset>${form?.error ? `<ul class="error-list">${typeof form.error === "string" ? `<li class="error-message">${escape(form.error)}</li>` : ``}</ul>` : ``} ${``}</fieldset> <button type="submit" class="contrast" data-svelte-h="svelte-4gwfz4">Sign Up</button></form></div></article></main>`;
});
export {
  Page as default
};
