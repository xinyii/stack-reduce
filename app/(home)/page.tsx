import Link from 'next/link';

const features = [
  {
    title: '工具',
    description: '用好工具，快人一步。',
    href: '/docs/tool/ai/chat-gpt',
  },
  {
    title: '设计',
    description: '都是一个套路，不需要一个项目一个模板。',
    href: '/docs/design/system/uml',
  },
  {
    title: '后端',
    description: '下一步该学什么？怎么搭框架？过来看看吧。',
    href: '/docs/backend/java/stack',
  },
  {
    title: '前端',
    description: '前端千变万化，又有什么新东西啦？',
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

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <div className="max-w-2xl py-16">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Stack Reduce</h1>
        <p className="mb-2 text-xl text-fd-muted-foreground md:text-2xl">
          归纳知识，降低&ldquo;噪音&rdquo;
        </p>
        <p className="mb-8 text-fd-muted-foreground">
          精简，统一，拿来即用！
        </p>
        <Link
          href="/docs/guide/introduction"
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
