import matter from "gray-matter";
import path from "path";
import fs from "fs";

export function getAllPosts() {
  const pagesDirectory = path.join(process.cwd(), "_posts/blog/");
  const filenames = fs.readdirSync(pagesDirectory);
  
  return filenames.map((filename) => {
    const fullPath = path.join(pagesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      meta: data,
      content
    };
  });
}
