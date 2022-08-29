import React, { useEffect, useState } from "react";
import PostDetails from "../../components/posts/PostDetails";
import { getPostsInfo, getPostDetails } from "../../helpers/page_fns";
import { format, parse } from "date-fns";

const PostDetailsPage = ({ frontMatter, details }) => {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-2xl flex justify-between">
        <p>
          <span className="font-bold pr-2">By:</span> {frontMatter.author}
        </p>
        <p>
          {format(
            parse(frontMatter.created, "MM-dd-yyyy", new Date()),
            "MMM do, yyyy"
          )}
        </p>
      </div>
      <PostDetails content={details} meta={frontMatter}></PostDetails>
    </div>
  );
};

export default PostDetailsPage;

export async function getStaticPaths() {
  const postsInfo = await getPostsInfo();
  const paths = postsInfo.map((post) => ({
    params: {
      slug: post.slug,
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
      frontMatter: data.data,
      details: data.content,
    },
  };
}
