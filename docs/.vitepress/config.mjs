import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 部署到github pages时，这个要和自己的仓库地址一致
  base: '/vitepress/',
  title: "珂朵莉星球",
  description: "爱德华の珂朵莉星球",
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'VitePress教程', 
        items: [
          { text: 'VitePress搭建', link: '/vitepress/vitepress搭建' },
          { text: 'VitePress部署', link: '/vitepress/vitepress部署' },
        ],
      },
      { text: 'Python学习', 
        items: [
          { text: 'Python环境及入门', link: '/python/python环境及入门' },
          { text: 'Python项目实践', link: '/python/python项目实践' },
        ],
      },
      { text: 'AI学习', 
        items: [
          { text: '大模型', link: '/ai/大模型' },
          { text: 'QAbot方案', link: '/ai/QAbot方案' },
          { text: 'SVC相关', link: '/ai/SVC相关' },
          { text: 'TTS相关', link: '/ai/TTS相关' },
          { text: 'SD/绘世启动器', link: '/ai/SD' },
          { text: '游戏AI工具', link: '/ai/游戏AI工具' }
        ],
      },
      { text: '生活助手', 
        items: [
          { text: '自动追番', link: '/others/自动追番' },
          { text: '自动录播投稿', link: '/others/自动录播投稿' },
          { text: '私有云方案', link: '/others/私有云方案' },
          { text: '内网穿透', link: '/others/内网穿透' },
          { text: '自己做游戏', link: '/others/自己做游戏' },
          { text: 'MMD基础教程', link: '/others/MMD基础教程' }
        ],
      },
      { text: '社畜打工', 
        items: [
          { text: '支付宝商家平台', link: '/work/自动追番' },
          { text: '微信商家平台', link: '/work/自动录播投稿' }
        ],
      }
    ],

    sidebar: [
      { text: 'VitePress教程', 
        items: [
          { text: 'VitePress搭建', link: '/vitepress/vitepress搭建' },
          { text: 'VitePress部署', link: '/vitepress/vitepress部署' },
        ],
      },
      { text: 'Python学习', 
        items: [
          { text: 'Python环境及入门', link: '/python/python环境及入门' },
          { text: 'Python项目实践', link: '/python/python项目实践' },
        ],
      },
      { text: 'AI学习', 
        items: [
          { text: '大模型', link: '/ai/大模型' },
          { text: 'QAbot方案', link: '/ai/QAbot方案' },
          { text: 'SVC相关', link: '/ai/SVC相关' },
          { text: 'TTS相关', link: '/ai/TTS相关' },
          { text: 'SD/绘世启动器', link: '/ai/SD' },
          { text: '游戏AI工具', link: '/ai/游戏AI工具' }
        ],
      },
      { text: '生活助手', 
        items: [
          { text: '自动追番', link: '/others/自动追番' },
          { text: '自动录播投稿', link: '/others/自动录播投稿' },
          { text: '私有云方案', link: '/others/私有云方案' },
          { text: '内网穿透', link: '/others/内网穿透' },
          { text: '自己做游戏', link: '/others/自己做游戏' },
          { text: 'MMD基础教程', link: '/others/MMD基础教程' }
        ],
      },
      { text: '社畜打工', 
        items: [
          { text: '支付宝商家平台', link: '/work/自动追番' },
          { text: '微信商家平台', link: '/work/自动录播投稿' }
        ],
      }
    ],

    socialLinks: [
      { 
        icon: {
          svg:'<svg t="1728197315150" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4269" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="4270"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="4271"></path></svg>'
      }, 
        link: 'https://space.bilibili.com/37483985' 
      },
      { icon: 'github', link: 'https://github.com/EdwardChtholly' }
    ],

    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备123456789号-2</a>`,
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 爱德华`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 3],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }

  }
})
