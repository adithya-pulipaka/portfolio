import React, { useEffect, useState } from "react";
import { getPostsInfo } from "../../helpers/page_fns";
import Link from "next/link";
import Tag from "../../components/posts/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { format, parse } from "date-fns";

const Blog = ({ postsInfo, tags }) => {
  const [filteredPosts, setFilteredPosts] = useState(null);
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    if (selectedTag && postsInfo) {
      const postsByTag = postsInfo
        .map((a) => a.frontmatter)
        .filter((post) => post.tags.includes(selectedTag));
      setFilteredPosts(postsByTag);
    } else {
      setFilteredPosts(postsInfo.map((a) => a.frontmatter));
    }
    if (router?.query?.tag) {
      const tag = router?.query?.tag;
      router.replace("/blog", undefined, { shallow: true });
      setTimeout(() => filterByTag(tag));
    }
  }, [selectedTag]);

  const filterByTag = (tag) => {
    setSelectedTag(tag);
  };

  const clearTag = () => {
    setSelectedTag(null);
  };

  return (
    <>
      <div className="md:flex md:gap-12 md:max-w-5xl mx-auto">
        <section className="w-[70%]">
          <h1 className="underline mb-4 -mt-2">Posts</h1>
          {selectedTag && (
            <button
              className="bg-slate-200 px-2 py-1 rounded-lg"
              onClick={clearTag}
            >
              #{selectedTag} <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              return (
                <div key={post.slug} className="mb-8">
                  <div className="flex items-center justify-between">
                    <h3 className="hover:app-accent hover:underline mt-2 mb-2 px-4">
                      <Link href={`blog/${encodeURIComponent(post.slug)}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p>
                      {format(
                        parse(post.created, "MM-dd-yyyy", new Date()),
                        "MMM dd"
                      )}
                    </p>
                  </div>
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
        </section>
        <section className="w-[30%]">
          <h1 className="underline mb-4">Tags</h1>
          <div className="bg-slate-400 p-2 rounded-md flex gap-2 flex-wrap">
            {tags.map((name) => {
              return (
                <Tag onClick={() => filterByTag(name)} key={name}>
                  {name}
                </Tag>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const { postsInfo, tags } = await getPostsInfo();
  return {
    props: {
      postsInfo,
      tags,
    },
  };
}
