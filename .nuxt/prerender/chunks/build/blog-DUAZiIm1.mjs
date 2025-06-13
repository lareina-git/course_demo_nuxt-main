import { ref, mergeProps, useSSRContext } from 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/h3/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/destr/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unstorage/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/ohash/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/klona/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/scule/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/pathe/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unhead/dist/server.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/devalue/index.js';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unhead/dist/utils.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/%E5%AD%A6%E4%B9%A0/course_demo_nuxt-main/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const blog2 = ref({
      title: "",
      content: "",
      author: "",
      date: "",
      tags: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-outer" }, _attrs))} data-v-3f9a0cc7><div class="blog-card" data-v-3f9a0cc7><h1 class="blog-title" data-v-3f9a0cc7>${ssrInterpolate(blog2.value.title)}</h1><div class="blog-meta" data-v-3f9a0cc7><span class="meta-item" data-v-3f9a0cc7><i class="icon-user" data-v-3f9a0cc7></i>${ssrInterpolate(blog2.value.author)}</span><span class="meta-dot" data-v-3f9a0cc7>\xB7</span><span class="meta-item" data-v-3f9a0cc7><i class="icon-calendar" data-v-3f9a0cc7></i>${ssrInterpolate(blog2.value.date)}</span><span class="meta-dot" data-v-3f9a0cc7>\xB7</span><span class="meta-item" data-v-3f9a0cc7><i class="icon-tag" data-v-3f9a0cc7></i><!--[-->`);
      ssrRenderList(blog2.value.tags, (tag, idx) => {
        _push(`<span class="blog-tag" data-v-3f9a0cc7>${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></span></div><div class="blog-content" data-v-3f9a0cc7>${ssrInterpolate(blog2.value.content)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f9a0cc7"]]);

export { blog as default };
//# sourceMappingURL=blog-DUAZiIm1.mjs.map
