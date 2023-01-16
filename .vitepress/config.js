export default {
  title: 'Stack Reduce',
  description: '归纳知识，降低"噪音"',
  appearance: 'dark',
  srcDir: 'src',
  lang: 'zh-CN',
  themeConfig: {
    outlineTitle: '本页目录',
    outline: [2, 4],
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/tool/': sidebarTool()
    }
  }
}

function nav() {
  return [
    { text: '向导', link: '/guide/introduction' },
    { text: '工具', link: '/tool/ide/intellij-idea' }
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
    }
  ]
}
