import React from "react";
import { getPostsInfo } from "../../helpers/page_fns";
import Link from "next/link";

const Blog = ({ postsInfo }) => {
  return (
    <>
      <div>
        {postsInfo && postsInfo.length > 0 ? (
          postsInfo
            .map((a) => a.frontmatter)
            .map((post) => {
              return (
                <div key={post.slug} className="mb-8">
                  <h3 className="hover:app-accent hover:underline mt-2 mb-2 px-4">
                    <Link href={`blog/${encodeURIComponent(post.slug)}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <hr className="mb-4" />
                  <p className="text-left mb-2 px-4 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              );
            })
        ) : (
          <div className="text-center text-xl app-accent">No Posts!</div>
        )}
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const postsInfo = await getPostsInfo();

  return {
    props: {
      postsInfo,
    },
  };
}
