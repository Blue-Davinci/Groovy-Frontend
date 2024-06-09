import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about.css","alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg","app.png","auth.css","base.css","bg.jpg","create.png","delete.svg","edit.svg","error.css","facebook.png","favicon.png","feature-icon-01.svg","feature-icon-02.svg","feature-icon-03.svg","global.css","graphic.png","hero-back-illustration.svg","image1.jpg","image2.jpg","image3.jpg","linkedin.png","pricing-illustration.svg","search.png","software.png","spin.svg","splide-override.css","tube-spinner.svg","tube-spinner1.svg","twitter.png","webdes.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DQEhoMfG.js","app":"_app/immutable/entry/app.wYt3FbJH.js","imports":["_app/immutable/entry/start.DQEhoMfG.js","_app/immutable/chunks/entry.BZZUX_uQ.js","_app/immutable/chunks/scheduler.LACeQXEc.js","_app/immutable/chunks/index.9rPL3jZF.js","_app/immutable/entry/app.wYt3FbJH.js","_app/immutable/chunks/scheduler.LACeQXEc.js","_app/immutable/chunks/index.C5VqejgJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/api/movies",
				pattern: /^\/api\/movies\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/movies/_server.js'))
			},
			{
				id: "/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/signup/_server.js'))
			},
			{
				id: "/api/verify",
				pattern: /^\/api\/verify\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/verify/_server.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(authed)/movies",
				pattern: /^\/movies\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(authed)/movies/[id]",
				pattern: /^\/movies\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/verify",
				pattern: /^\/verify\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
