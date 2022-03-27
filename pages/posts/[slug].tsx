import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Head from "next/head";
import path from "path";
import remarkFootnotes from "remark-footnotes";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

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

export default function PostPage({ source, frontMatter }: any) {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-black p-1 py-2 w-full">
        <div className="text-xs font-mono flex items-center text-gray-100 ">
          <img
            src="/sun.svg"
            className="h-4 w-4 mr-1 dark:bg-gray-500 bg-white"
          />
          <div className="px-1">strangemood</div>
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

      <div className="pattern flex">
        <div className="max-w-3xl bg-white border-l-0 border-r-0 sm:border  border-black w-full m-auto sm:mt-12 mb-12">
          <div className="bg-black text-white px-4 py-8 flex  flex-col ">
            <h1 className="text-lg font-bold mb-1">{frontMatter.title}</h1>
            <p className="m-0 text-sm text-gray-400">{frontMatter.tagline}</p>
          </div>

          <article className="px-4 py-4 text-gray-900">
            <MDXRemote {...source} components={components} />
          </article>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

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
