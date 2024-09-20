import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.46_@algolia+client-search_vadz3oiq3kxewd6c6ouj2qgoye/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14__boremaetipizxd3e5cfjjbv6ha/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.46_@algolia+client-search_vadz3oiq3kxewd6c6ouj2qgoye/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.46_@algolia+client-search_vadz3oiq3kxewd6c6ouj2qgoye/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.46_@algolia+client-search_vadz3oiq3kxewd6c6ouj2qgoye/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.46_@algolia+client-search_vadz3oiq3kxewd6c6ouj2qgoye/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_txqh6ivkcy32g2gimdcx4s55z4/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/dean/SynologyDrive/tigertech/tigerblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.46_@algolia+client-search_vadz3oiq3kxewd6c6ouj2qgoye/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});