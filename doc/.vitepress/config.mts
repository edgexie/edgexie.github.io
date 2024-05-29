import { defineConfig } from 'vitepress';

import zhihu from './config/zhihu.mts';
import bilibili from './config/bilibili.mts';
import { zh } from './config/zh.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MX-CodeCraft',
  description: 'think things through',
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', href: '/favicon_io/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1',
      },
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  appearance: 'dark',
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: {
      text: '最后更新时间：',
    },
    logo: '/favicon_io/favicon-32x32.png',

    // 社交账号
    socialLinks: [
      { icon: 'github', link: 'https://github.com/edgexie' },
      // {
      //   icon: {
      //     svg: zhihu,
      //   },
      //   link: 'https://www.zhihu.com/people/edgexxx',
      // },
      // {
      //   icon: {
      //     svg: bilibili,
      //   },
      //   link: 'https://space.bilibili.com/337059066?spm_id_from=333.999.0.0',
      // },
    ],
    editLink: {
      pattern:
        'https://github.com/edgexie/edgexie.github.io/tree/master/docs/src/:path',
      text: 'Edit this page on GitHub',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn',
      ...zh,
    },

    // en: {
    //   label: "English",
    //   lang: "en", // optional, will be added  as `lang` attribute on `html` tag
    //   link: "/en/", // default /fr/ -- shows on navbar translations menu, can be external
    //   // other locale specific properties...
    // },
  },
  // plugins: [
  //   {
  //     install: (app) => {
  //       // 全局方法示例
  //       app.config.globalProperties.$getUrl = (path) => {
  //         return import.meta.env.VITE_URL + path;
  //       };
  //     },
  //   },
  // ],
});
