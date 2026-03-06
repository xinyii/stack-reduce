import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Stack Reduce',
    },
    links: [
      { text: '向导', url: '/docs/guide/introduction' },
      { text: '工具', url: '/docs/tool/ai/chat-gpt' },
      { text: '设计', url: '/docs/design/system/uml' },
      { text: '后端', url: '/docs/backend/java/stack' },
      { text: '前端', url: '/docs/frontend/web/stack' },
      { text: '测试', url: '/docs/test/unit/java' },
      { text: '运维', url: '/docs/ops/deploy/jdk' },
    ],
  };
}
