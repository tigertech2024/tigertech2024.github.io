import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "TigerTech's blog",
  description: "一个神奇的个人知识库存储网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
