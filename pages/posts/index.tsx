import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

interface Post {
  data: {
    title: string;
    category: string;
  };
  content: string;
  slug: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <div className="flex flex-1 max-w-4xl mx-auto px-4 w-full py-12 flex-col">
        <h2 className="font-bold mb-4 border-b pb-2">Posts from Strangemood</h2>
        <ul>
          {posts.map((post) => (
            <li key={"p" + post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a className="underline">{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const posts = await Promise.all(
    postFilePaths.map(async (p) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, p));
      const { content, data } = matter(source);
      const slug = p.replace(/\.mdx$/, "");

      return {
        content,
        data,
        slug,
      };
    })
  );

  return {
    props: {
      posts,
    },
  };
};
