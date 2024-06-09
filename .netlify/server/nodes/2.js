import * as server from '../entries/pages/(authed)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(authed)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.DQg2WqGF.js","_app/immutable/chunks/scheduler.LACeQXEc.js","_app/immutable/chunks/index.C5VqejgJ.js"];
export const stylesheets = [];
export const fonts = [];
