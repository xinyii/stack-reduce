import { Provider } from './provider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'Stack Reduce - 归纳知识，降低"噪音"',
    template: '%s | Stack Reduce',
  },
  description:
    '归纳知识，降低"噪音"——涵盖 AI、后端、前端、设计、测试、运维的精简技术文档库',
  metadataBase: new URL('https://stack-reduce.kitlib.cn'),
  keywords: [
    'Stack Reduce',
    '技术文档',
    'AI',
    '后端',
    '前端',
    '设计',
    '测试',
    '运维',
    'Java',
    'Claude Code',
  ],
  authors: [{ name: 'Stack Reduce' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Stack Reduce',
    title: 'Stack Reduce - 归纳知识，降低"噪音"',
    description:
      '归纳知识，降低"噪音"——涵盖 AI、后端、前端、设计、测试、运维的精简技术文档库',
  },
  twitter: {
    card: 'summary',
    title: 'Stack Reduce - 归纳知识，降低"噪音"',
    description:
      '归纳知识，降低"噪音"——涵盖 AI、后端、前端、设计、测试、运维的精简技术文档库',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?08fb2575ed6f0861773af2c5601ebd44";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`}
        </Script>
      </body>
    </html>
  );
}
