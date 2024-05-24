export default {
  title: 'Stack Reduce',
  description: '归纳知识，降低"噪音"',
  appearance: 'dark',
  srcDir: 'src',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    outlineTitle: '本页目录',
    outline: [2, 4],
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/tool/': sidebarTool(),
      '/design/': sidebarDesign(),
      '/backend/': sidebarBackend(),
      '/frontend/': sidebarFrontend(),
      '/ops/': sidebarOps(),
      '/test/': sidebarTest()
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    lastUpdated: {
      text: '最后更新于'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  sitemap: {
    hostname: 'https://stack-reduce.kitlib.cn'
  },
  head: [
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?08fb2575ed6f0861773af2c5601ebd44";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ]
}

function nav() {
  return [
    { text: '向导', link: '/guide/introduction', activeMatch: '/guide/' },
    {
      text: '工具',
      activeMatch: '/tool/',
      items: [
        { text: 'IDE', link: '/tool/ide/intellij-idea' },
        { text: '通用', link: '/tool/common/utools' }
      ]
    },
    {
      text: '设计',
      activeMatch: '/design/',
      items: [
        { text: '系统设计', link: '/design/system/uml' },
        { text: '原型设计', link: '/design/prototype/tool' },
        { text: '数据库设计', link: '/design/database/specification' },
        { text: '接口设计', link: '/design/api/tool' }
      ]
    },
    {
      text: '后端',
      activeMatch: '/backend/',
      items: [
        { text: 'Java', link: '/backend/java/stack' },
        { text: 'TypeScript', link: '/backend/ts/stack' },
        { text: '数据库', link: '/backend/database/knowledge' }
      ]
    },
    {
      text: '前端',
      activeMatch: '/frontend/',
      items: [
        { text: 'Web', link: '/frontend/web/stack' },
        { text: 'H5', link: '/frontend/h5/stack' },
        { text: 'App', link: '/frontend/app/stack' }
      ]
    },
    {
      text: '测试',
      activeMatch: '/test/',
      items: [
        { text: '单元测试', link: '/test/unit/java' },
        { text: '性能测试', link: '/test/performance/jmeter' }
      ]
    },
    {
      text: '运维',
      activeMatch: '/ops/',
      items: [
        { text: '部署', link: '/ops/deploy/jdk' },
        { text: 'CI/CD', link: '/ops/cicd/jenkins' }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduction' },
        { text: '导读', link: '/guide/outline' }
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
      items: [
        { text: 'uTools', link: '/tool/common/utools' },
        { text: 'Everything', link: '/tool/common/everything' }
      ]
    }
  ]
}

function sidebarDesign() {
  return [
    {
      text: '系统设计',
      items: [
        { text: '建模', link: '/design/system/uml' },
        { text: '工具', link: '/design/system/tool' }
      ]
    },
    {
      text: '原型设计',
      items: [{ text: '工具', link: '/design/prototype/tool' }]
    },
    {
      text: '数据库设计',
      items: [
        { text: '规范', link: '/design/database/specification' },
        { text: '工具', link: '/design/database/tool' }
      ]
    },
    {
      text: '接口设计',
      items: [{ text: '工具', link: '/design/api/tool' }]
    }
  ]
}

function sidebarBackend() {
  return [
    {
      text: 'Java',
      items: [
        { text: '技术栈', link: '/backend/java/stack' },
        { text: '框架', link: '/backend/java/framework' },
        { text: '规范', link: '/backend/java/specification' }
      ]
    },
    {
      text: 'TypeScript',
      items: [{ text: '技术栈', link: '/backend/ts/stack' }]
    },
    {
      text: '数据库',
      items: [{ text: '知识点', link: '/backend/database/knowledge' }]
    }
  ]
}

function sidebarFrontend() {
  return [
    {
      text: 'Web',
      items: [{ text: '技术栈', link: '/frontend/web/stack' }]
    },
    {
      text: 'H5',
      items: [{ text: '技术栈', link: '/frontend/h5/stack' }]
    },
    {
      text: 'App',
      items: [{ text: '技术栈', link: '/frontend/app/stack' }]
    }
  ]
}

function sidebarTest() {
  return [
    {
      text: '单元测试',
      items: [
        { text: 'Java', link: '/test/unit/java' },
        { text: 'JMeter', link: '/test/unit/jmeter' }
      ]
    },
    {
      text: '性能测试',
      items: [{ text: 'JMeter', link: '/test/performance/jmeter' }]
    }
  ]
}

function sidebarOps() {
  return [
    {
      text: '部署',
      items: [
        { text: 'JDK', link: '/ops/deploy/jdk' },
        { text: 'MySQL', link: '/ops/deploy/mysql' },
        { text: 'Nginx', link: '/ops/deploy/nginx' },
        { text: 'NodeJS', link: '/ops/deploy/nodejs' },
        { text: 'Redis', link: '/ops/deploy/redis' },
        { text: 'Docker', link: '/ops/deploy/docker' },
        { text: 'Script', link: '/ops/deploy/script' }
      ]
    },
    {
      text: 'CI/CD',
      items: [{ text: 'Jenkins', link: '/ops/cicd/jenkins' }]
    }
  ]
}
