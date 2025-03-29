import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_BVyiAJv_.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DsDUF7Uu.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///V:/Dylan/Code/Bindu/Bindu-landing/","cacheDir":"file:///V:/Dylan/Code/Bindu/Bindu-landing/node_modules/.astro/","outDir":"file:///V:/Dylan/Code/Bindu/Bindu-landing/dist/","srcDir":"file:///V:/Dylan/Code/Bindu/Bindu-landing/src/","publicDir":"file:///V:/Dylan/Code/Bindu/Bindu-landing/public/","buildClientDir":"file:///V:/Dylan/Code/Bindu/Bindu-landing/dist/client/","buildServerDir":"file:///V:/Dylan/Code/Bindu/Bindu-landing/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/enviarcorreo","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/enviarCorreo\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"enviarCorreo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/enviarCorreo.js","pathname":"/api/enviarCorreo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7JRURFpI.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["V:/Dylan/Code/Bindu/Bindu-landing/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/enviarCorreo@_@js":"pages/api/enviarcorreo.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","V:/Dylan/Code/Bindu/Bindu-landing/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bdb52plH.mjs","\u0000@astrojs-manifest":"manifest_BMpQuhbd.mjs","V:/Dylan/Code/Bindu/Bindu-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BXLI7IEw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["V:/Dylan/Code/Bindu/Bindu-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".faq-button\").forEach(s=>{s.addEventListener(\"click\",()=>{const o=s.nextElementSibling,d=s.querySelector(\"svg\");o&&o.classList.toggle(\"hidden\"),d&&(o&&o.classList.contains(\"hidden\")?d.classList.remove(\"rotate-180\"):d.classList.add(\"rotate-180\"))})});const e=document.getElementById(\"contactButton\"),n=document.getElementById(\"contactModal\"),a=document.getElementById(\"closeModal\");e&&n&&a&&(e.addEventListener(\"click\",()=>{n.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"}),a.addEventListener(\"click\",()=>{n.classList.add(\"hidden\"),document.body.style.overflow=\"auto\"}),n.addEventListener(\"click\",s=>{s.target===n&&(n.classList.add(\"hidden\"),document.body.style.overflow=\"auto\")}))});document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"contactForm\"),e=document.getElementById(\"formStatus\");t&&t.addEventListener(\"submit\",async n=>{if(n.preventDefault(),!e)return;e.textContent=\"Enviando mensaje...\",e.className=\"mt-4 py-2 px-4 bg-blue-100 text-blue-800 rounded\",e.classList.remove(\"hidden\");const a={nombre:t.nombre.value,email:t.email.value,telefono:t.telefono.value,mensaje:t.mensaje.value},o=await(await fetch(\"/api/enviarCorreo\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)})).json();console.log(o),o.success?(e.textContent=\"¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.\",e.className=\"mt-4 py-2 px-4 bg-green-100 text-green-800 rounded\",t.reset()):(e.textContent=\"Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.\",e.className=\"mt-4 py-2 px-4 bg-red-100 text-red-800 rounded\")})});"]],"assets":["/_astro/index.7JRURFpI.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"fEFVFavr7H4hsMChCfZShfxRPucj5gZxaHK9QXGKCi0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
