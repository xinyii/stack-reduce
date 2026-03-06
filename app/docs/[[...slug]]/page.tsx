import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { findPath } from 'fumadocs-core/page-tree';

function getSeoTitle(pageUrl: string, pageTitle: string): string {
  const path = findPath(
    source.pageTree.children,
    (node) => node.type === 'page' && node.url === pageUrl,
  );

  if (path) {
    const parent = path
      .filter((n) => n.type === 'folder' && typeof n.name === 'string')
      .map((n) => n.name as string)
      .pop();

    if (parent && parent !== pageTitle) {
      return `${parent} ${pageTitle}`;
    }
  }

  return pageTitle;
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const seoTitle = getSeoTitle(page.url, page.data.title);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seoTitle,
    description: page.data.description,
    url: `https://stack-reduce.kitlib.cn${page.url}`,
    publisher: { '@type': 'Organization', name: 'Stack Reduce' },
    inLanguage: 'zh-CN',
  };

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{ style: 'clerk' }}
      tableOfContentPopover={{ style: 'clerk' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = `https://stack-reduce.kitlib.cn${page.url}`;
  const seoTitle = getSeoTitle(page.url, page.data.title);

  return {
    title: seoTitle,
    description: page.data.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${seoTitle} | Stack Reduce`,
      description: page.data.description,
      url,
      siteName: 'Stack Reduce',
      locale: 'zh_CN',
    },
    twitter: {
      card: 'summary',
      title: `${seoTitle} | Stack Reduce`,
      description: page.data.description,
    },
  };
}
