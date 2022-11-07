import React from "react";
import PostDetails from "../../components/posts/PostDetails";
import { getPostsInfo, getPostDetails } from "../../helpers/page_fns";

const PostDetailsPage = ({ content, frontMatter }) => {
  return (
    <div className="mt-8">
      <PostDetails content={content} frontMatter={frontMatter}></PostDetails>
    </div>
  );
};

export default PostDetailsPage;

export async function getStaticPaths() {
  const postsInfo = await getPostsInfo();
  const paths = postsInfo.map((post) => ({
    params: {
      slug: post.frontmatter.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getPostDetails(context.params.slug);
  return {
    props: {
      frontMatter: data.frontmatter,
      content: data,
    },
  };
}
