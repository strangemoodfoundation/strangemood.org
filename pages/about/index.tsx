import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { useEffect, useReducer, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { FAQ_PATH, faqFilePaths } from "../../utils/mdxUtils";
import { groupBy } from "lodash";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
};

function Post({ source, frontMatter, slug }: any) {
  return (
    <div className="flex-1 flex h-full ">
      <section className="max-w-3xl flex-col flex flex-1 h-full m-auto px-4 mb-4">
        <div className="flex justify-between items-center">
          <a href={`#${slug}`} className="clear underline">
            <h2 id={slug} className="hover:underline">
              {frontMatter.question}
            </h2>
          </a>

          <div className="flex flex-row">
            <a
              href={`https://github.com/strangemoodfoundation/strangemood.org/edit/main/faq/${slug}.mdx`}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </a>
          </div>
        </div>

        <MDXRemote {...source} components={components} />
      </section>
    </div>
  );
}

export default function Index(props: {
  posts: {
    [key: string]: {
      source: any;
      frontMatter: any;
      content: string;
      slug: string;
    }[];
  };
}) {
  const [search, setSearch] = useState("");

  // Adds keyboard shortcuts for searching
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if ((e.key === "/" || e.key === "k") && (e.metaKey || e.ctrlKey)) {
        ref.current?.focus();
      }

      if (e.key === "Escape") {
        setSearch("");
        ref.current?.blur();
      }
    }

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [ref]);

  return (
    <div className="flex flex-col w-full">
      <div className="bg-black p-1 py-2 w-full">
        <div className="text-xs font-mono flex items-center text-gray-100 ">
          <img
            src="/sun.svg"
            className="h-4 w-4 mr-1 dark:bg-gray-500 bg-white"
          />
          <a className="px-1 underline" href="/">
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
      <div className="flex w-full">
        <div className="p-4 bg-black text-white md:flex hidden">
          <nav>
            {Object.entries(props.posts).map(([category, group]) => {
              return (
                <div
                  className="text-sm w-64 flex flex-col"
                  key={"side" + category}
                >
                  <div className="font-bold mt-4">{category}</div>
                  {group.map((post) => (
                    <a
                      key={"side" + post.slug}
                      className="transition-all ml-2 flex mt-1 opacity-80 underline hover:opacity-100"
                      href={`#${post.slug}`}
                    >
                      {post.frontMatter.question}
                    </a>
                  ))}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-gray-100 rounded px-4">
            <div className="max-w-3xl mx-auto w-full text-sm border-l border-r flex items-center bg-gray-50 pr-4">
              <input
                placeholder="Search the FAQ"
                className="py-2  px-4 mr-4 w-full bg-gray-50"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                ref={ref}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <article className="">
            {Object.entries(props.posts).map(([category, group]) => {
              let groupDivs = group
                .filter((p) => {
                  if (!p.frontMatter.question) {
                    throw new Error(`${p.slug} is missing a question`);
                  }

                  if (
                    p.frontMatter.question
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return true;
                  }
                  if (p.content.toLowerCase().includes(search.toLowerCase())) {
                    return true;
                  }
                })
                .map((p) => (
                  <div className="" key={"title" + p.slug}>
                    <Post key={p.frontMatter.title} {...p} />
                  </div>
                ));

              if (groupDivs.length === 0) {
                return null;
              }

              return (
                <div key={"outer" + category}>
                  <h1 className="border-t py-2 pt-12 w-full uppercase font-mono flex flex-1 justify-start text-sm">
                    <div className="max-w-3xl flex px-4 mx-auto items-center w-full flex">
                      {category}
                      <div className="h-0.5 bg-gray-100 w-full ml-2" />
                    </div>
                  </h1>
                  <div className="pt-4 " key={category}>
                    {groupDivs}
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </div>
  );
}

async function getPost(slug: string) {
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
  const posts = await Promise.all(
    faqFilePaths
      // Remove file extensions for page paths
      .map((path: any) => path.replace(/\.mdx?$/, ""))
      .map((slug: any) => {
        return getPost(slug);
      })
  );

  const groups = groupBy(
    posts.sort((a, b) => {
      // sort by priority
      return (b.frontMatter.priority || 0) - (a.frontMatter.priority || 0);
    }),
    (p) => p.frontMatter.category
  );

  return {
    props: {
      // Sort by priority
      posts: groups,
    },
  };
};
