import { c as create_ssr_component, d as add_attribute, f as escape, j as createEventDispatcher, k as compute_rest_props, l as spread, p as escape_attribute_value, q as escape_object, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../../chunks/client.js";
/* empty css                                                      */
const css$2 = {
  code: "img.svelte-1atiin8{width:100%;height:40vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem;max-width:500px}h2.svelte-1atiin8{font-size:0.9rem}P.svelte-1atiin8{font-size:0.7rem}.movie-card.svelte-1atiin8{display:flex;transition:box-shadow 0.3s ease-in-out;flex-direction:column;justify-content:space-around;padding:1rem;padding-bottom:0.8rem}.movie-card.svelte-1atiin8:hover{box-shadow:0 0 10px #00c6a7}",
  map: '{"version":3,"file":"moviecard.svelte","sources":["moviecard.svelte"],"sourcesContent":["<script>\\r\\n\\texport let movie;\\r\\n    let id =1;\\r\\n\\tlet defaultimgurl =\\r\\n\\t\\t\'https://media.themoviedb.org/t/p/original/svYyAWAH3RThMmHcCaJZ97jnTtT.jpg\';\\r\\n\\tlet imageUrl;\\r\\n\\ttry {\\r\\n\\t\\t// Try to create a new URL object with movie.url\\r\\n\\t\\t// If movie.url is an invalid URL, this will throw an error\\r\\n\\t\\tnew URL(movie.url);\\r\\n\\t\\timageUrl = movie.url;\\r\\n\\t} catch {\\r\\n\\t\\t// If an error was thrown, use defaultimgurl instead\\r\\n\\t\\timageUrl = defaultimgurl;\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<div class=\\"movie-card\\">\\r\\n\\t<a href={`/movies/${movie.id}`}>\\r\\n\\t\\t<img src={imageUrl} alt={movie.title} />\\r\\n\\t</a>\\r\\n\\t<div class=\\"description\\">\\r\\n\\t\\t<h2>{movie.title}</h2>\\r\\n\\t\\t<p>{movie.year}</p>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\timg {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 40vh;\\r\\n\\t\\tobject-fit: cover;\\r\\n\\t\\tborder-radius: 1rem;\\r\\n\\t\\tmargin-bottom: 1rem;\\r\\n\\t\\tmax-width: 500px;\\r\\n\\t}\\r\\n\\th2 {\\r\\n\\t\\tfont-size: 0.9rem;\\r\\n\\t}\\r\\n\\r\\n\\tP {\\r\\n\\t\\tfont-size: 0.7rem;\\r\\n\\t}\\r\\n\\t.movie-card {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\ttransition: box-shadow 0.3s ease-in-out;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tjustify-content: space-around;\\r\\n\\t\\tpadding: 1rem;\\r\\n\\t\\tpadding-bottom: 0.8rem; /* add this line */\\r\\n\\t}\\r\\n\\t.movie-card:hover {\\r\\n        box-shadow: 0 0 10px #00c6a7; /* add this line */\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,KACZ,CACA,iBAAG,CACF,SAAS,CAAE,MACZ,CAEA,gBAAE,CACD,SAAS,CAAE,MACZ,CACA,0BAAY,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,WAAW,CACvC,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,YAAY,CAC7B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CACA,0BAAW,MAAO,CACX,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,OACzB"}'
};
let defaultimgurl = "https://media.themoviedb.org/t/p/original/svYyAWAH3RThMmHcCaJZ97jnTtT.jpg";
const Moviecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  let imageUrl;
  try {
    new URL(movie.url);
    imageUrl = movie.url;
  } catch {
    imageUrl = defaultimgurl;
  }
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$2);
  return `<div class="movie-card svelte-1atiin8"><a${add_attribute("href", `/movies/${movie.id}`, 0)}><img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", movie.title, 0)} class="svelte-1atiin8"></a> <div class="description"><h2 class="svelte-1atiin8">${escape(movie.title)}</h2> <p class="svelte-1atiin8">${escape(movie.year)}</p></div> </div>`;
});
const css$1 = {
  code: ".svelte-1i3us25.svelte-1i3us25{box-sizing:border-box}.search-box.svelte-1i3us25.svelte-1i3us25{margin-top:100px;margin-bottom:0;width:fit-content;height:fit-content;position:relative;margin-left:auto;margin-right:10px;padding:0}.input-search.svelte-1i3us25.svelte-1i3us25{height:50px;width:50px;border-style:none;padding:10px;font-size:18px;letter-spacing:2px;outline:none;border-radius:25px;transition:all 0.5s ease-in-out;background-color:#00ff9d8e;padding-right:40px;color:#fff}.input-search.svelte-1i3us25.svelte-1i3us25::placeholder{color:rgba(255, 255, 255, 0.5);font-size:18px;letter-spacing:2px;font-weight:100}.btn-search.svelte-1i3us25.svelte-1i3us25{width:47px;height:47px;border-style:none;font-size:20px;font-weight:bold;outline:none;cursor:pointer;border-radius:50%;position:absolute;right:0px;color:#ffffff;background-color:transparent;pointer-events:painted;background-image:url('/search.png');background-repeat:no-repeat;background-position:center;background-size:50%}.btn-search.svelte-1i3us25:focus~.input-search.svelte-1i3us25{width:300px;border-radius:0px;background-color:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.5);transition:all 500ms cubic-bezier(0, 0.11, 0.35, 2)}.input-search.svelte-1i3us25.svelte-1i3us25:focus{width:300px;border-radius:0px;background-color:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.5);transition:all 500ms cubic-bezier(0, 0.11, 0.35, 2)}",
  map: `{"version":3,"file":"searchmovie.svelte","sources":["searchmovie.svelte"],"sourcesContent":["<script>\\r\\n\\timport { createEventDispatcher } from 'svelte';\\r\\n\\tconst dispatch = createEventDispatcher();\\r\\n\\tlet search = '';\\r\\n\\r\\n\\tfunction handleInput() {\\r\\n\\t\\tdispatch('search', search);\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"search-box\\">\\r\\n\\t<button class=\\"btn-search\\"><i class=\\"fas fa-search\\"></i></button>\\r\\n\\t<input\\r\\n\\t\\ttype=\\"text\\"\\r\\n\\t\\tclass=\\"input-search\\"\\r\\n\\t\\tplaceholder=\\"Type to Search...\\"\\r\\n\\t\\tbind:value={search}\\r\\n\\t\\ton:input={handleInput}\\r\\n\\t/>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t* {\\r\\n\\t\\tbox-sizing: border-box;\\r\\n\\t}\\r\\n\\t.search-box {\\r\\n\\t\\tmargin-top: 100px;\\r\\n\\t\\tmargin-bottom: 0;\\r\\n\\t\\twidth: fit-content;\\r\\n\\t\\theight: fit-content;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tmargin-left: auto;\\r\\n\\t\\tmargin-right: 10px;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\t.input-search {\\r\\n\\t\\theight: 50px;\\r\\n\\t\\twidth: 50px;\\r\\n\\t\\tborder-style: none;\\r\\n\\t\\tpadding: 10px;\\r\\n\\t\\tfont-size: 18px;\\r\\n\\t\\tletter-spacing: 2px;\\r\\n\\t\\toutline: none;\\r\\n\\t\\tborder-radius: 25px;\\r\\n\\t\\ttransition: all 0.5s ease-in-out;\\r\\n\\t\\tbackground-color: #00ff9d8e;\\r\\n\\t\\tpadding-right: 40px;\\r\\n\\t\\tcolor: #fff;\\r\\n\\t}\\r\\n\\t.input-search::placeholder {\\r\\n\\t\\tcolor: rgba(255, 255, 255, 0.5);\\r\\n\\t\\tfont-size: 18px;\\r\\n\\t\\tletter-spacing: 2px;\\r\\n\\t\\tfont-weight: 100;\\r\\n\\t}\\r\\n\\t.btn-search {\\r\\n\\t\\twidth: 47px;\\r\\n\\t\\theight: 47px;\\r\\n\\t\\tborder-style: none;\\r\\n\\t\\tfont-size: 20px;\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\toutline: none;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tright: 0px;\\r\\n\\t\\tcolor: #ffffff;\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tpointer-events: painted;\\r\\n\\t\\tbackground-image: url('/search.png');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: 50%;\\r\\n\\t}\\r\\n\\t.btn-search:focus ~ .input-search {\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\tborder-radius: 0px;\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tborder-bottom: 1px solid rgba(255, 255, 255, 0.5);\\r\\n\\t\\ttransition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);\\r\\n\\t}\\r\\n\\t.input-search:focus {\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\tborder-radius: 0px;\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tborder-bottom: 1px solid rgba(255, 255, 255, 0.5);\\r\\n\\t\\ttransition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsBC,8BAAE,CACD,UAAU,CAAE,UACb,CACA,yCAAY,CACX,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,CAAC,CAChB,KAAK,CAAE,WAAW,CAClB,MAAM,CAAE,WAAW,CACnB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,CACV,CACA,2CAAc,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WAAW,CAChC,gBAAgB,CAAE,SAAS,CAC3B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IACR,CACA,2CAAa,aAAc,CAC1B,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/B,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,GACd,CACA,yCAAY,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,WAAW,CAC7B,cAAc,CAAE,OAAO,CACvB,gBAAgB,CAAE,kBAAkB,CACpC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,GAClB,CACA,0BAAW,MAAM,CAAG,4BAAc,CACjC,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,WAAW,CAC7B,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACjD,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,aAAa,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACpD,CACA,2CAAa,MAAO,CACnB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,WAAW,CAC7B,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACjD,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,aAAa,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACpD"}`
};
const Searchmovie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let search = "";
  $$result.css.add(css$1);
  return `<div class="search-box svelte-1i3us25"><button class="btn-search svelte-1i3us25" data-svelte-h="svelte-kytgvc"><i class="fas fa-search svelte-1i3us25"></i></button> <input type="text" class="input-search svelte-1i3us25" placeholder="Type to Search..."${add_attribute("value", search, 0)}> </div>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { carouselMovies } = $$props;
  const mainOptions = {
    pagination: true,
    autoplay: true,
    type: "loop"
  };
  let main;
  if ($$props.carouselMovies === void 0 && $$bindings.carouselMovies && carouselMovies !== void 0)
    $$bindings.carouselMovies(carouselMovies);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="gallery"><div class="gallery--main">${validate_component(Splide_1, "Splide").$$render(
      $$result,
      { options: mainOptions, this: main },
      {
        this: ($$value) => {
          main = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(carouselMovies, (imageSrc) => {
            return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
              default: () => {
                return `<img${add_attribute("src", imageSrc.url, 0)} alt="desc"> <div class="image-label-container"><div class="image-title">${escape(imageSrc.title)}</div> <div class="image-description">${escape(imageSrc.description.split(" ").slice(0, 15).join(" "))}...</div></div> `;
              }
            })}`;
          })}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "h3.svelte-n5vrl{margin-top:40px;padding:0 1rem}.carousel.svelte-n5vrl{margin:0 0 5px 0;background-color:#222;height:auto;max-height:500px}.popular-movies.svelte-n5vrl{display:grid;margin-left:0.5rem;margin-right:0.5rem;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;justify-content:start;align-items:start;width:auto}.add-button.svelte-n5vrl{position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;font-size:24px;text-align:center;background:url('/create.png') no-repeat center center;border:none;background-color:#00ff9d;bottom:40px;right:40px;transition:transform 0.3s ease,\r\n			box-shadow 0.3s ease}.add-button.svelte-n5vrl:hover{transform:scale(1.1);box-shadow:0 0 10px rgba(0, 255, 157, 0.5)}.add-button.svelte-n5vrl:active{transform:scale(0.9)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\t//import { scrollPosition } from '$lib/store/store.js';\\r\\n\\t//import { onMount, onDestroy, tick } from 'svelte';\\r\\n\\t//import { afterUpdate } from 'svelte';\\r\\n\\timport { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\timport Moviecard from '$lib/components/moviecard.svelte';\\r\\n\\timport SearchMovie from '$lib/components/searchmovie.svelte';\\r\\n\\timport { fly } from 'svelte/transition';\\r\\n\\timport Carousel from \\"$lib/components/Carousel.svelte\\";\\r\\n\\timport Modals from '$lib/components/modals.svelte';\\r\\n\\timport { setToast } from '$lib/utils/utils.js';\\r\\n\\texport let data;\\r\\n\\tlet searchTerm = '';\\r\\n\\tlet movies = data.movies;\\r\\n\\tlet showModal = false;\\r\\n\\tlet movie = {};\\r\\n\\tlet processAsUpdate = false;\\r\\n\\t/*$: authed = data.props.authed;\\r\\n\\t//$:console.log(authed);\\r\\n\\tafterUpdate(() =>{\\r\\n\\t\\t//console.log(authed);\\r\\n\\t})*/\\r\\n\\t// this helper function will be passed as an anonymous function\\r\\n\\tfunction setToastHelper(status, message) {\\r\\n\\t\\tsetToast(status, message);\\r\\n\\t}\\r\\n\\t//this function will be called when the add button is clicked\\r\\n\\t//it will set the showModal variable to true, which will show the movie creation modal.\\r\\n\\tfunction createModal() {\\r\\n\\t\\tshowModal = true;\\r\\n\\t}\\r\\n\\t//this will be called from our create movie component and will be set to false\\r\\n\\t//to hide the movie creation modal.\\r\\n\\tfunction close() {\\r\\n\\t\\tshowModal = false;\\r\\n\\t}\\r\\n\\t//this function will be called when the search event is dispatched from the searchmovie component\\r\\n\\tfunction handleSearch(event) {\\r\\n\\t\\tsearchTerm = event.detail;\\r\\n\\t}\\r\\n\\t//we set  reactive statement to filter movies based on search term\\r\\n\\t//If there is one, which we get via an event dispatch from the searchmovie component,\\r\\n\\t//we filter the movies array to only include movies whose title includes the search term.\\r\\n\\t//If there is no search term, we set filteredMovies to the entire movies array.\\r\\n\\t$: filteredMovies = searchTerm\\r\\n\\t\\t? movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))\\r\\n\\t\\t: movies;\\r\\n\\r\\n\\t$: carouselMovies = filteredMovies.slice(0,10);\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Movies • Groovy</title>\\r\\n</svelte:head>\\r\\n<div in:fly={{ x: -200, duration: 1000 }} out:slide={{ duration: 600 }}>\\r\\n\\t<div class=\\"carousel\\">\\r\\n\\t\\t<Carousel {carouselMovies} />\\r\\n\\t</div>\\r\\n\\t<div style=\\"clear: both;\\"></div> <!-- Clear fix -->\\r\\n\\t<SearchMovie on:search={handleSearch} />\\r\\n\\t<h3>Current Movies</h3>\\r\\n\\t<hr />\\r\\n\\t{#if showModal}\\r\\n\\t\\t<div\\r\\n\\t\\t\\tclass=\\"modal-container\\"\\r\\n\\t\\t\\ttransition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}\\r\\n\\t\\t>\\r\\n\\t\\t\\t<Modals {showModal} {movie} {close} {processAsUpdate} {setToastHelper} />\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\r\\n\\t<div class=\\"popular-movies\\">\\r\\n\\t\\t{#each filteredMovies as movie (movie.id)}\\r\\n\\t\\t\\t<Moviecard {movie} />\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n\\t<button class=\\"add-button\\" on:click={createModal}></button>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\th3 {\\r\\n\\t\\tmargin-top: 40px;\\r\\n\\t\\tpadding: 0 1rem;\\r\\n\\t}\\r\\n\\t.carousel{\\r\\n\\t\\tmargin: 0 0 5px 0;\\r\\n\\t\\tbackground-color: #222;\\r\\n\\t\\theight: auto;\\r\\n\\t\\tmax-height: 500px;\\r\\n  }\\r\\n\\t.popular-movies {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tmargin-left: 0.5rem;\\r\\n\\t\\tmargin-right: 0.5rem;\\r\\n\\t\\tgrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\r\\n\\t\\tgrid-column-gap: 1rem;\\r\\n\\t\\tgrid-row-gap: 2rem;\\r\\n\\t\\t  justify-content: start; /* Align items to the start */\\r\\n  align-items: start; /* Align items to the start */\\r\\n  width: auto;\\r\\n\\t}\\r\\n\\t.add-button {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\tbottom: 20px;\\r\\n\\t\\tright: 20px;\\r\\n\\t\\twidth: 60px;\\r\\n\\t\\theight: 60px;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\tfont-size: 24px;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tbackground: url('/create.png') no-repeat center center; /* Replace '/path/to/create.png' with the actual path to your image */\\r\\n\\t\\tborder: none;\\r\\n\\t\\tbackground-color: #00ff9d;\\r\\n\\t\\tbottom: 40px; /* Increase this to move the button up */\\r\\n\\t\\tright: 40px;\\r\\n\\t\\ttransition:\\r\\n\\t\\t\\ttransform 0.3s ease,\\r\\n\\t\\t\\tbox-shadow 0.3s ease;\\r\\n\\t}\\r\\n\\r\\n\\t.add-button:hover {\\r\\n\\t\\ttransform: scale(1.1);\\r\\n\\t\\tbox-shadow: 0 0 10px rgba(0, 255, 157, 0.5);\\r\\n\\t}\\r\\n\\r\\n\\t.add-button:active {\\r\\n\\t\\ttransform: scale(0.9);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiFC,eAAG,CACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CAAC,IACZ,CACA,sBAAS,CACR,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACZ,CACD,4BAAgB,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,YAAY,CAAE,MAAM,CACpB,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,eAAe,CAAE,IAAI,CACrB,YAAY,CAAE,IAAI,CAChB,eAAe,CAAE,KAAK,CACxB,WAAW,CAAE,KAAK,CAClB,KAAK,CAAE,IACR,CACA,wBAAY,CACX,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,kBAAkB,CAAC,SAAS,CAAC,MAAM,CAAC,MAAM,CACtD,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CACT,SAAS,CAAC,IAAI,CAAC,IAAI,CAAC;AACvB,GAAG,UAAU,CAAC,IAAI,CAAC,IAClB,CAEA,wBAAW,MAAO,CACjB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CAEA,wBAAW,OAAQ,CAClB,SAAS,CAAE,MAAM,GAAG,CACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredMovies;
  let carouselMovies;
  let { data } = $$props;
  let movies = data.movies;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  filteredMovies = movies;
  carouselMovies = filteredMovies.slice(0, 10);
  return `${$$result.head += `<!-- HEAD_svelte-1c1kq15_START -->${$$result.title = `<title>Movies • Groovy</title>`, ""}<!-- HEAD_svelte-1c1kq15_END -->`, ""} <div><div class="carousel svelte-n5vrl">${validate_component(Carousel, "Carousel").$$render($$result, { carouselMovies }, {}, {})}</div> <div style="clear: both;"></div>  ${validate_component(Searchmovie, "SearchMovie").$$render($$result, {}, {}, {})} <h3 class="svelte-n5vrl" data-svelte-h="svelte-p9ccvi">Current Movies</h3> <hr> ${``} <div class="popular-movies svelte-n5vrl">${each(filteredMovies, (movie) => {
    return `${validate_component(Moviecard, "Moviecard").$$render($$result, { movie }, {}, {})}`;
  })}</div> <button class="add-button svelte-n5vrl"></button> </div>`;
});
export {
  Page as default
};
