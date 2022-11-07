import fs from "fs";
import path from "path";
import { POSTS_DIR } from "../utils/constants";
import { serialize } from "next-mdx-remote/serialize";

export async function getPostsInfo() {
  const fileInfos = await getFileInfo();
  const postsInfo = fileInfos.filter((i) => i.frontmatter.published);

  postsInfo.sort(
    (first, second) =>
      new Date(second.last_modified).getTime() -
      new Date(first.last_modified).getTime()
  );
  return postsInfo;
}

export async function getPostDetails(slug) {
  const fileInfos = await getFileInfo();
  const fileContent = fileInfos.filter(
    (fileInfo) => fileInfo.frontmatter.slug === slug
  )[0];
  return fileContent;
}

export async function getFileInfo() {
  const files = fs.readdirSync(POSTS_DIR);
  let postsInfo = [];
  for (const file of files) {
    const fileContent = fs.readFileSync(path.join(POSTS_DIR, file));
    const data = await serialize(fileContent, { parseFrontmatter: true });
    postsInfo.push(data);
  }
  return postsInfo;
}
