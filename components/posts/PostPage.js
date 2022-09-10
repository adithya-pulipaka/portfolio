import React from "react";

const PostPage = () => {
  return (
    <div>
      {/* <h2 className="underline px-4">All Posts</h2>

      <div>
        {postsInfo && postsInfo.length > 0 ? (
          postsInfo.map((post) => {
            return (
              <div key={post.slug} className="mb-8">
                <h3 className="hover:text-accent hover:underline mt-2 mb-2 px-4">
                  <Link href={`posts/${encodeURIComponent(post.slug)}`}>
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
          <div className="text-center text-xl text-accent">No Posts!</div>
        )}
      </div> */}
    </div>
  );
};

export default PostPage;
export async function getStaticProps(context) {
  const postsInfo = await getPostsInfo();

  return {
    props: {
      postsInfo,
    },
  };
}
