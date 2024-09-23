import comp from "/Users/dean/SynologyDrive/tigertech/tigerblog/src/.vuepress/.temp/pages/notebook/index.html.vue"
const data = JSON.parse("{\"path\":\"/notebook/\",\"title\":\"Notebook\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Notebook\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.tigertech.sbs/notebook/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小虎头技术\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Notebook\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"TigerTech\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Notebook\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
