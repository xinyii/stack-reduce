'use client';
import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from '@/components/search';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{ defaultTheme: 'dark' }}
      search={{ SearchDialog }}
      i18n={{
        translations: {
          search: '搜索',
          searchNoResult: '没有找到结果',
          toc: '本页目录',
          tocNoHeadings: '无标题',
          lastUpdate: '最后更新于',
          nextPage: '下一页',
          previousPage: '上一页',
          chooseTheme: '主题',
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
