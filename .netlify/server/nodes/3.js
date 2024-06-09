

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.lOMcdN0j.js","_app/immutable/chunks/scheduler.LACeQXEc.js","_app/immutable/chunks/index.C5VqejgJ.js","_app/immutable/chunks/index.C75klxI8.js"];
export const stylesheets = ["_app/immutable/assets/3.B39HwsRF.css"];
export const fonts = [];
