import fs from "fs";
import path from "path";
import { POSTS_DIR } from "../utils/constants";
import matter from "gray-matter";

export async function getPostsInfo() {
  const fileInfos = await getFileInfo();
  const postsInfo = fileInfos
    .map((i) => i.data)
    .filter((i) => i.published === true);

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
    (fileInfo) => fileInfo.data.slug === slug
  )[0];
  return fileContent;
}

export async function getFileInfo() {
  const files = fs.readdirSync(POSTS_DIR);
  let postsInfo = [];
  files.forEach((file) => {
    const data = fs.readFileSync(path.join(POSTS_DIR, file));
    const info = matter(data);
    postsInfo.push(info);
  });
  return postsInfo;
}
