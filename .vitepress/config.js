export default {
  title: 'Stack Reduce',
  description: '归纳知识，降低"噪音"',
  appearance: 'dark',
  srcDir: 'src',
  lang: 'zh-CN',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide()
    }
  }
}

function nav() {
  return [
    { text: '向导', link: '/guide/introduction' },
    { text: '工具', link: '/tool/index' }
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
