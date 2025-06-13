import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-8aae8be9><h1 data-v-8aae8be9>Contact Us</h1><p data-v-8aae8be9> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8aae8be9"]]);
export {
  contactUs as default
};
//# sourceMappingURL=contact-us-DwAFoHQ_.js.map
