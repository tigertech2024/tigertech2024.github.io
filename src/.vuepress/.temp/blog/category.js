export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"06.神秘大渊":{"path":"/category/06.%E7%A5%9E%E7%A7%98%E5%A4%A7%E6%B8%8A/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{"加密":{"path":"/tag/%E5%8A%A0%E5%AF%86/","indexes":[0]},"密码":{"path":"/tag/%E5%AF%86%E7%A0%81/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

