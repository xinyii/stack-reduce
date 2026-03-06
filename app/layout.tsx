import { Provider } from './provider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'Stack Reduce',
    template: '%s | Stack Reduce',
  },
  description: '归纳知识，降低"噪音"',
  metadataBase: new URL('https://stack-reduce.kitlib.cn'),
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
