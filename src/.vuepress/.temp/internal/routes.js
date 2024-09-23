export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.08,"words":23},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/notebook/06.%E7%A5%9E%E7%A7%98%E5%A4%A7%E6%B8%8A/Token.html", { loader: () => import(/* webpackChunkName: "notebook_06.神秘大渊_Token.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/notebook/06.神秘大渊/Token.html.js"), meta: {"a":"tigerblog","c":"06.神秘大渊","g":["加密","密码"],"n":true,"r":{"minutes":0.24,"words":73},"t":"Cloudflare R2 Obsidian-backup token","i":null,"y":"a"} }],
  ["/notebook/09.%E7%AC%94%E8%AE%B0%E6%A8%A1%E6%9D%BF/VUE%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF.html", { loader: () => import(/* webpackChunkName: "notebook_09.笔记模板_VUE页面模板.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/notebook/09.笔记模板/VUE页面模板.html.js"), meta: {"g":null,"r":{"minutes":0.01,"words":4},"t":"","i":null,"y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/notebook/06.%E7%A5%9E%E7%A7%98%E5%A4%A7%E6%B8%8A/", { loader: () => import(/* webpackChunkName: "notebook_06.神秘大渊_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/notebook/06.神秘大渊/index.html.js"), meta: {"t":"06.神秘大渊"} }],
  ["/notebook/", { loader: () => import(/* webpackChunkName: "notebook_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/notebook/index.html.js"), meta: {"t":"Notebook"} }],
  ["/notebook/09.%E7%AC%94%E8%AE%B0%E6%A8%A1%E6%9D%BF/", { loader: () => import(/* webpackChunkName: "notebook_09.笔记模板_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/notebook/09.笔记模板/index.html.js"), meta: {"t":"09.笔记模板"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/06.%E7%A5%9E%E7%A7%98%E5%A4%A7%E6%B8%8A/", { loader: () => import(/* webpackChunkName: "category_06.神秘大渊_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/category/06.神秘大渊/index.html.js"), meta: {"t":"06.神秘大渊 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_加密_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"t":"标签: 加密","I":false} }],
  ["/tag/%E5%AF%86%E7%A0%81/", { loader: () => import(/* webpackChunkName: "tag_密码_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/tag/密码/index.html.js"), meta: {"t":"标签: 密码","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
