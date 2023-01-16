export default {
  title: 'Stack Reduce',
  description: '归纳知识，降低"噪音"',
  appearance: 'dark',
  srcDir: 'src',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    outlineTitle: '本页目录',
    outline: [2, 4],
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/tool/': sidebarTool(),
      '/backend/': sidebarBackend()
    }
  }
}

function nav() {
  return [
    { text: '向导', link: '/guide/introduction', activeMatch: '/guide/' },
    { text: '工具', link: '/tool/ide/intellij-idea', activeMatch: '/tool/' },
    {
      text: '后端',
      activeMatch: '/backend/',
      items: [{ text: 'Java', link: '/backend/java/stack' }]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduction' },
        { text: '导读', link: '/guide/outline' },
        { text: '规范', link: '/guide/specification' }
      ]
    }
  ]
}

function sidebarTool() {
  return [
    {
      text: 'IDE',
      items: [{ text: 'IntelliJ IDEA', link: '/tool/ide/intellij-idea' }]
    },
    {
      text: '通用',
      items: [{ text: 'uTools', link: '/tool/common/utools' }]
    }
  ]
}

function sidebarBackend() {
  return [
    {
      text: 'Java',
      items: [
        { text: '技术栈', link: '/backend/java/stack' },
        { text: '开发框架', link: '/backend/java/framework' }
      ]
    }
  ]
}
