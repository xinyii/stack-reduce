import Link from 'next/link';

const features = [
  {
    title: 'AI',
    description: 'AI 工具使用技巧与实践。',
    href: '/docs/ai/claude-code/getting-started',
  },
  {
    title: '工具',
    description: '用好工具，快人一步。',
    href: '/docs/tool/ide/intellij-idea',
  },
  {
    title: '设计',
    description: '套路统一，不需要一个项目一个模板。',
    href: '/docs/design/system/uml',
  },
  {
    title: '后端',
    description: '该学什么？怎么搭框架？',
    href: '/docs/backend/java/stack',
  },
  {
    title: '前端',
    description: '千变万化，又有什么新东西啦？',
    href: '/docs/frontend/web/stack',
  },
  {
    title: '测试',
    description: '知道越多，越不容易出错。',
    href: '/docs/test/unit/java',
  },
  {
    title: '运维',
    description: '既是开发，也是运维。',
    href: '/docs/ops/deploy/jdk',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stack Reduce',
  url: 'https://stack-reduce.kitlib.cn',
  description:
    '归纳知识，降低"噪音"——涵盖 AI、后端、前端、设计、测试、运维的精简技术文档库',
  inLanguage: 'zh-CN',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-2xl py-16">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Stack Reduce</h1>
        <p className="mb-2 text-xl text-fd-muted-foreground md:text-2xl">
          归纳知识，降低&ldquo;噪音&rdquo;
        </p>
        <p className="mb-8 text-fd-muted-foreground">
          精简，统一，拿来即用！
        </p>
        <Link
          href="/docs/ai/claude-code/getting-started"
          className="inline-flex items-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          开始
        </Link>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="rounded-lg border border-fd-border bg-fd-card p-6 text-left transition-colors hover:bg-fd-accent"
          >
            <h2 className="mb-2 text-lg font-semibold">{feature.title}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {feature.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
