import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Head from "next/head";
import path from "path";
import remarkGfm from "remark-gfm";
import { getFAQBySlug } from "../../lib/faq";
import { FAQ_PATH, postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  //   a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  //   TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter, faqs }: any) {
  const fs = faqs.map((f: any) => ({
    question: f.frontMatter.question,
    slug: f.slug,
    source: f.source,
  }));

  const faqChunk = (
    <>
      {" "}
      <div className="font-bold mb-4">Related FAQs</div>
      {fs.map((f: any) => (
        <div key={f.slug} className="mb-2">
          <a
            className="underline capitalize font-bold pb-1 flex"
            href={`/about#${f.slug}`}
          >
            {f.question}
          </a>
          <div>
            <MDXRemote {...f.source} components={components} />
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="flex flex-col w-full">
      <div className="bg-black p-1 py-2 w-full">
        <div className="text-xs font-mono flex items-center text-gray-100 ">
          <img
            src="/sun.svg"
            className="h-4 w-4 mr-1 dark:bg-gray-500 bg-white"
          />
          <a className="px-1" href="/">
            strangemood
          </a>
          <div className="h-px bg-white w-full flex-1" />
          <div className="px-1">
            <a
              href="/welcome"
              target={"_blank"}
              className="underline flex "
              onClick={() => {
                // @ts-ignore window.fathom.trackGoal('WIRAJS3K', 0);
                window.fathom.trackGoal("WIRAJS3K", 0);
              }}
            >
              Join Strangemood
            </a>
          </div>
        </div>
      </div>

      <div className="pattern flex flex-col">
        <div className="m-auto flex sm:px-4">
          <div className="max-w-3xl bg-white border-l-0 border-r-0 border-b sm:border  border-black w-full sm:mt-12 mb-12">
            <div className="bg-black text-white px-4 py-8 flex  flex-col ">
              <h1 className="text-lg font-bold mb-1">{frontMatter.title}</h1>
              <p className="m-0 text-sm text-gray-400">{frontMatter.tagline}</p>
            </div>

            <article className="px-4 py-4 text-gray-900">
              <MDXRemote {...source} components={components} />
            </article>
          </div>
          <div className="lg:flex hidden mt-48 mb-12 ml-4 text-gray-600 flex-col w-64 text-xs">
            {faqChunk}
          </div>
        </div>
        <div className="lg:hidden flex flex-col text-xs sm:px-12 px-4 pb-12 text-gray-600 ">
          {faqChunk}
        </div>
      </div>
    </div>
  );
}

async function getFAQ(slug: string) {
  const filePath = path.join(FAQ_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath);

  try {
    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    });

    return {
      source: mdxSource,
      frontMatter: data,
      content: content,
      slug: slug,
    };
  } catch (e) {
    console.error("Error loading post: " + slug);
    throw e;
  }
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const faqs = await Promise.all(
    (data.faq || []).map(async (slug: any) => {
      return await getFAQ(slug);
    })
  );

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      faqs,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path: any) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug: any) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
