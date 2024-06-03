import { defineConfig, type DefaultTheme } from 'vitepress';
export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    {
      text: '前端基础',
      link: '/cn/front-end/base/rank',
      activeMatch: '/front-end/base/',
    },
    {
      text: '前端进阶',
      items: [
        {
          text: 'vue3',
          link: '/cn/front-end/frame/vue3/快速开始',
        },
        {
          text: 'pure-admin',
          link: '/cn/front-end/frame/pure-admin/快速开始',
        },
      ],
      activeMatch: '/front-end/frame',
    },
    {
      text: '可视化',
      link: '/cn/front-end/visual/leaflet/with-antdv-button',
      activeMatch: '/front-end/visual',
    },
    {
      text: '后端技术',
      items: [
        {
          text: 'nestjs',
          link: '/cn/back-end/nestjs/快速开始',
        },
        {
          text: 'python',
          link: '/cn/back-end/python/快速开始',
        },
        {
          text: 'java',
          link: '/cn/back-end/java/快速开始',
        },
      ],
      activeMatch: '/back-end/',
    },
    {
      text: '嵌入式技术',

      items: [
        {
          text: 'esp8266',
          link: '/cn/embedded-system/esp8266/使用PlatformIO通过网络控制LED',
        },
      ],
      activeMatch: '/embedded-system/',
    },
    { text: '工程化', link: '/cn/engineering/' },
    // {
    //   text: 'Mx组件',
    //   link: '/cn/mx-components/common-components/按钮',
    //   activeMatch: '/mx-components/',
    // },
  ];
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/cn/front-end/base/': {
      base: '/cn/front-end/base/',
      items: [
        {
          text: '前端职级与招聘',
          link: 'rank',
        },
        { text: '书写规范', link: '书写规范' },
      ],
    },
    '/cn/front-end/frame/vue3/': [
      {
        text: 'vue3',
        base: '/cn/front-end/frame/vue3/',
        items: [
          {
            text: '快速开始',
            link: '快速开始',
          },
          {
            text: '监听器',
            link: '监听器',
          },
          {
            text: '组件',
            link: '组件',
          },
        ],
      },
    ],
    '/cn/front-end/frame/pure-admin/': {
      base: '/cn/front-end/frame/pure-admin/',
      items: [
        {
          text: '快速开始',
          link: '快速开始',
        },
        {
          text: '权限',
          link: '权限',
        },
      ],
    },
    '/cn/front-end/visual/': [
      {
        text: 'leaflet',
        base: '/cn/front-end/visual/leaflet/',
        items: [
          {
            text: '使用a-button',
            link: 'with-antdv-button',
          },
        ],
      },
    ],
    '/cn/back-end/nestjs/': [
      {
        text: 'NestJS',
        base: '/cn/back-end/nestjs/',
        items: [
          { text: '快速开始', link: '快速开始' },
          { text: '控制器', link: '控制器' },
          { text: '中间件', link: '中间件' },
          { text: '异常过滤器', link: '异常过滤器' },
          { text: '管道', link: '管道' },
          { text: '守卫', link: '守卫' },
          { text: '拦截器', link: '拦截器' },
          { text: '自定义装饰器', link: '自定义装饰器' },
          { text: '与MySQL', link: '与MySQL' },
          {
            text: '实践',
            base: './practice/',
            items: [
              {
                text: 'nestjs与vercel集成',
                link: 'intergrate-with-vercel',
              },
            ],
          },
        ],
      },
    ],
    '/cn/back-end/python/': [
      {
        text: 'python',
        base: '/cn/back-end/python/',
        items: [
          {
            text: '快速开始',
            link: '快速开始',
          },
          {
            text: '变量',
            link: '变量',
          },
        ],
      },
    ],
    '/cn/back-end/java/': [
      {
        text: 'java',
        base: '/cn/back-end/java/',
        items: [
          {
            text: '快速开始',
            link: '快速开始',
          },
          {
            text: '对象和类',
            link: '对象和类',
          },
          {
            text: '基本数据类型',
            link: '基本数据类型',
          },
          {
            text: '变量',
            link: '变量',
          },
        ],
      },
    ],
    '/cn/embedded-system/esp8266/': [
      {
        text: 'esp8266',
        base: '/cn/embedded-system/esp8266/',
        items: [
          {
            text: '控制测试页',
            link: 'control',
          },
          {
            text: '使用PlatformIO通过网络控制LED',
            link: '使用PlatformIO通过网络控制LED',
          },
          {
            text: 'MQTT 简易客户端',
            link: 'mqtt-client',
          },
        ],
      },
    ],
    '/cn/mx-components/common-components/': [
      {
        text: '公共组件',
        base: '/cn/mx-components/common-components/',
        items: [{ text: '按钮', link: '按钮' }],
      },
    ],
  };
}
