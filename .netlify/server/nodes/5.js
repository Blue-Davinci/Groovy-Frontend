import * as server from '../entries/pages/(authed)/movies/_id_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/movies/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(authed)/movies/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.xahz5c35.js","_app/immutable/chunks/scheduler.LACeQXEc.js","_app/immutable/chunks/index.C5VqejgJ.js","_app/immutable/chunks/index.C75klxI8.js","_app/immutable/chunks/entry.BZZUX_uQ.js","_app/immutable/chunks/index.9rPL3jZF.js","_app/immutable/chunks/modals.C84Ue6o3.js","_app/immutable/chunks/utils.CmdQM1vF.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.BgFHtYN-.js"];
export const stylesheets = ["_app/immutable/assets/5.D2bYVQ-B.css","_app/immutable/assets/modals.KP98c2IY.css","_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
