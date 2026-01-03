import { getPosts } from "./apiClient";
async function displayPosts() {
  const result = await getPosts();

  if (result.ok) {
    const { posts, total, limit } = result.value;
    console.log(`Total de posts: ${total} - Mostrando ${limit} posts.`);
    return posts;
  }

  console.error(`Error ao buscar posts: ${result.error}`);
}

async function main() {
  console.log(await displayPosts());
}

main();
