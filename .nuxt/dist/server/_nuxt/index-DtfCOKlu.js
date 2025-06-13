import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, b as _imports_0 } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/学习/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs";
import "D:/学习/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs";
import "D:/学习/course_demo_nuxt-main/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/学习/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs";
import "D:/学习/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs";
import "D:/学习/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-8678db95><section class="hero" data-v-8678db95><div class="container" data-v-8678db95><img${ssrRenderAttr("src", _imports_0)} alt="MVP Toastmasters Club Logo" class="club-logo" data-v-8678db95><h1 data-v-8678db95>MVP TMC Bilingual Club</h1><h2 data-v-8678db95>MVP 头马双语俱乐部</h2><p class="tagline" data-v-8678db95>Where Freelancers, Digital Nomads, and Entrepreneurs Connect</p></div></section><section class="story" data-v-8678db95><div class="container" data-v-8678db95><h2 data-v-8678db95>Our Story</h2><div class="story-content" data-v-8678db95><p data-v-8678db95> MVP TMC头马双语俱乐部始于两位创始人的一次Coffee Chat。 源于自己的痛与观察，希望为给单打独斗的自由职业者、数字游民、轻创业者找个伴， 为想换赛道、GAP探索期的小伙伴搭把手。 </p><p data-v-8678db95> MVP TMC Bilingual Club began with a simple coffee chat between two founders. Born from personal experiences and observations, we aim to create a community for freelancers, digital nomads, and entrepreneurs who are seeking companionship and support during their career transitions and exploration periods. </p></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8678db95"]]);
export {
  index as default
};
//# sourceMappingURL=index-DtfCOKlu.js.map
