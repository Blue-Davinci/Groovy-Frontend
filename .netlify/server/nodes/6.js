

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BoOZGtFA.js","_app/immutable/chunks/scheduler.LACeQXEc.js","_app/immutable/chunks/index.C5VqejgJ.js","_app/immutable/chunks/index.C75klxI8.js"];
export const stylesheets = ["_app/immutable/assets/6.CC72YWad.css"];
export const fonts = [];
