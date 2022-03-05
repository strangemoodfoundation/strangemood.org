import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { useEffect, useReducer, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { FAQ_PATH, faqFilePaths } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
};

function Post({ source, frontMatter }: any) {
  return (
    <div className="flex-1 flex h-full ">
      <article className="max-w-3xl flex-col flex flex-1 h-full m-auto px-4 mb-12">
        <div>
          <h2>{frontMatter.question}</h2>
        </div>

        <MDXRemote {...source} components={components} />
      </article>
    </div>
  );
}

function useFocusOnShortcut() {
  const ref = useRef<HTMLInputElement>();
  useEffect(() => {
    function listener(e: KeyboardEvent) {
      console.log(e);
      if ((e.key === "/" || e.key === "k") && (e.metaKey || e.ctrlKey)) {
        ref.current?.focus();
        alert("what");
      }
    }

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [ref.current]);
  return ref;
}

export default function Index(props: {
  posts: { source: any; frontMatter: any; content: string; slug: string }[];
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
    <Layout>
      <div className="bg-gray-100 rounded border-b px-12">
        <div className="max-w-3xl mx-auto w-full text-sm border-l border-r flex items-center bg-gray-50 pr-4">
          <input
            placeholder="Search the FAQ"
            className="py-2 pl-4 mr-4 w-full bg-gray-50"
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

      <div className="mt-12 flex flex-col">
        {props.posts
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
            <>
              <Post key={p.frontMatter.title} {...p} />
              <hr className="mb-12" />
            </>
          ))}
      </div>
    </Layout>
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

  return {
    props: {
      // Sort by priority
      posts: posts.sort((a, b) => {
        let aCategory = a.frontMatter.category || "z";
        let bCategory = b.frontMatter.category || "z";

        if (aCategory < bCategory)
          //sort string ascending
          return -1;
        if (aCategory > bCategory) return 1;
        return 0; //default return value (no sorting)
      }),
    },
  };
};
